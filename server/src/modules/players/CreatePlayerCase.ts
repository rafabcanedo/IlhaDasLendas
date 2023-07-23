import { AppError } from '../../errors/AppError'
import { prisma } from '../../prisma/client'
import { Player } from '@prisma/client'
import { CreatePlayerDTO } from '../dtos/CreatePlayerDTO'

export class CreatePlayerCase {
  async execute({ name, image, role, team }: CreatePlayerDTO): Promise<Player> {
    // Verificando se o Player já existe
    const playerAlreadyExists = await prisma.team.findUnique({
      where: {
        name,
      },
    })

    if (playerAlreadyExists) {
      throw new AppError('Player already exists!')
    }

    // Criando um player
    const player = await prisma.player.create({
      data: {
        name,
        image,
        role,
        team,
      },
    })

    return player
  }
}
