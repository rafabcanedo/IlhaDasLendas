import { Request, Response } from 'express'
import { GetTeamsByReleaseCase } from './GetTeamsByReleaseCase'

export class GetTeamsByReleaseController {
  async handle(req: Request, res: Response) {
    const getTeamsByReleaseCase = new GetTeamsByReleaseCase()

    const result = await getTeamsByReleaseCase.execute()

    return res.status(201).json(result)
  }
}
