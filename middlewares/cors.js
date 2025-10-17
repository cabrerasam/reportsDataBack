import cors from 'cors'

const ACCEPTED_ORIGINS = [
  'http://192.168.40.111:5173',
  'http://192.168.40.111:5174',
  'http://192.168.40.111:1234',
  'http://localhost:5173',
  'http://localhost:5174'
]

export const corsMiddleware = ({ acceptedOrigins = ACCEPTED_ORIGINS } = {}) => cors({
  origin: (origin, callback) => {
    if (acceptedOrigins.includes(origin)) {
      return callback(null, true)
    }

    if (!origin) {
      return callback(null, true)
    }

    return callback(new Error('Not allowed by CORS'))
  },
  credentials: true
})
