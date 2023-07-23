import { Request, Response } from 'express'
import { CreatePlayerCase } from './CreatePlayerCase'

export class CreatePlayerController {
  async handle(req: Request, res: Response) {
    const { name, image, role, team } = req.body

    const createPlayerCase = new CreatePlayerCase()

    const result = await createPlayerCase.execute({ name, image, role, team })

    return res.status(201).json(result)
  }
}
