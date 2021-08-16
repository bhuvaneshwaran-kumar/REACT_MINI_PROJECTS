import dotenv from 'dotenv';
dotenv.config()

export const PORT = parseInt(process.env.PORT)
export const CORS_ORIGIN = process.env.CORS_ORIGIN

export const NODE_ENV = process.env.NODE_ENV
export const PROD = NODE_ENV === 'production'

export const MONGO_DB_URL = process.env.MONGO_DB_URL

export const SECERET1 = process.env.SECERET1
export const SECERET2 = process.env.SECERET2

export const COOKIE_NAME = process.env.COOKIE_NAME


