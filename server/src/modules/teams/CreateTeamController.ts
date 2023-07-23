import { Request, Response } from 'express'
import { CreateTeamCase } from './CreateTeamCase'

export class CreateTeamController {
  async handle(req: Request, res: Response) {
    const { name, image } = req.body

    const createTeamCase = new CreateTeamCase()

    const result = await createTeamCase.execute({ name, image })

    return res.status(201).json(result)
  }
}
