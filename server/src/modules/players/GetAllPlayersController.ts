import { Request, Response } from 'express'
import { GetAllPlayersCase } from './GetAllPlayersCase'

export class GetAllPlayersController {
  async handle(req: Request, res: Response) {
    const getAllPlayersCase = new GetAllPlayersCase()

    const result = await getAllPlayersCase.execute()

    return res.status(201).json(result)
  }
}
