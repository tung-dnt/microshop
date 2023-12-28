import { zdrizzle } from 'drizzle-orm/node-postgres'
import { migrate } from 'drizzle-orm/node-postgres/migrator'
import { Client } from 'pg'

async function runMigrations() {
  const client = new Client({
    user: 'root',
    host: 'localhost',
    database: 'postgres',
    password: 'password',
    port: 5433
  })

  await client.connect()

  const db = zdrizzle(client)

  // This will run migrations on the database, skipping the ones already applied
  await migrate(db, { migrationsFolder: '../drizzle' })

  // Don't forget to close the connection, otherwise the script will hang
  await client.end()
}

// Call the async function
runMigrations()
  .then(() => console.log('Migrations completed successfully.'))
  .catch(error => {
    console.error('An error occurred during migrations:', error)
    process.exit(1) // Exit the process with an error code
  })
