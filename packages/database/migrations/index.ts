import type { Config } from 'drizzle-kit'
import { drizzle } from 'drizzle-orm/node-postgres'
import { migrate } from 'drizzle-orm/node-postgres/migrator'
import { Client } from 'pg'

const path = require('path')

async function runMigrations() {
  const serviceName = process.env.SERVICE_NAME // TODO: need to discuss how to get service name from env
  const configurations = (await import(`../configs/${serviceName}.config`)).default satisfies Config

  if(!configurations) {
    throw new Error('Configurations not found')
  }

  const client = new Client(configurations.dbCredentials)
  const db = drizzle(client)

  // ======== CONNECT TO DATABASE AND RUN MIGRATIONS ========
  await client.connect()
  // This will run migrations on the database, skipping the ones already applied
  await migrate(db, { migrationsFolder: path.resolve(__dirname, `../migrations/${serviceName}`) })
  // Don't forget to close the connection, otherwise the script will hang
  await client.end()
}

runMigrations()
  .then(() => console.log('Migrations completed successfully.'))
  .catch(error => {
    console.error('An error occurred during migrations:', error)
    process.exit(1) // Exit the process with an error code
  })
