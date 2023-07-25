import 'express-async-errors'
import express, { NextFunction, Request, Response } from 'express'
import { routes } from './routes'
import { AppError } from './errors/AppError'
import cors from 'cors'

const app = express()

const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200,
}

app.use(cors(corsOptions))

app.use(express.json())

app.use(routes)

app.use(
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof AppError) {
      return response.status(error.statusCode).json({
        status: 'error',
        message: error.message,
      })
    }

    return response.status(500).json({
      status: 'error',
      message: `Internal server error - ${error.message}`,
    })
  },
)

app.listen(3333, () => console.log('Server is runing in port: 3333 ⚗️'))
