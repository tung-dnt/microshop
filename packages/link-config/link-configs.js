const path = require('path')
const fs = require('fs/promises')
const glob = require('glob-promise')
const chalk = require('chalk')

const relative = (x) => path.relative(process.cwd(), x)
const root = (x) => path.join(process.cwd(), x)

async function globals() {
  console.log('linking global configs environment...')
  const pattern = 'global?(.*).json'
  const configs = await glob(root(`./env/${pattern}`))
  const projects = await glob(root('./apps/*'))

  for (const project of projects) {
    const configDir = path.join(path.join(project, './_env/'))

    // create /config directory if not exists
    if (!(await fs.lstat(configDir).catch(() => null))?.isDirectory()) await fs.mkdir(configDir)

    // delete all global configs
    const existings = await glob(path.join(configDir, pattern))
    await Promise.allSettled(existings.map((x) => fs.rm(x)))

    // setup new links
    for (const config of configs) {
      const configPath = path.join(configDir, path.basename(config))
      await fs.symlink(path.relative(path.dirname(configPath), config), configPath)
      console.log(`linked ${chalk.green(relative(config))} -> ${chalk.yellow(relative(configPath))}`)
    }
  }
}

async function locals() {
  console.log('linking local configs environment...')
  const pattern = '*?(.*).json'
  const configs = await glob(root(`./env/locals/${pattern}`)).then((configs) =>
    configs.map((x) => {
      const [app, env] = path
        .basename(x)
        .split('.')
        .map((x) => x.trim())
        .slice(0, -1)
      return [x, root(`./apps/${app}/_env/local${env ? '.' + env : ''}.json`)]
    })
  )

  // delete existing configs
  await Promise.allSettled(configs.map(([x, y]) => y).map((x) => fs.rm(x)))

  for (const [config, to] of configs) {
    try {
      await fs.symlink(path.relative(path.dirname(to), config), to)
      console.log(`linked ${chalk.green(relative(config))} -> ${chalk.yellow(relative(to))}`)
    } catch (e) {
      const message =
        e.code === 'ENOENT'
          ? {
              message: `Unable to proceed with symlinking for file ${config}. Required folder ${
                to.split('_env/local.json')[0]
              } is missing.`
            }
          : {}
      console.error({...message, ...e})
    }
  }
}

globals().then(locals)
