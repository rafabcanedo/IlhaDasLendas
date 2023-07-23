import { Player } from '@prisma/client'
import { prisma } from '../../prisma/client'

export class GetAllPlayersCase {
  async execute(): Promise<Player[]> {
    const players = await prisma.player.findMany({})

    return players
  }
}
