import { defineConfig } from 'drizzle-kit'
export default defineConfig({
 out: "./drizzle/migrations",
 schema: "./src/db/schema.ts",
  driver: 'pg',
  dbCredentials: {
    connectionString: process.env.DATABASE_URL ?? ' ',
  },
  verbose: true,
  strict: true,
})