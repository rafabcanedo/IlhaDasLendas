import { Team } from '@prisma/client'
import { prisma } from '../../prisma/client'

export class GetTeamsByReleaseCase {
  async execute(): Promise<Team[]> {
    const teams = await prisma.team.findMany({
      orderBy: {
        created_at: 'desc',
      },
    })

    return teams
  }
}
