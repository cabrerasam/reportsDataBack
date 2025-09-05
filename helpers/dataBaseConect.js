import pg from 'pg'

const { Pool } = pg

const config = {
  host: 'localhost',
  port: 5432,
  database: 'reports',
  user: 'report',
  password: 'mi4v-aee3-5939'
}

export const pool = new Pool(config)
