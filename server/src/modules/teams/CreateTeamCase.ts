import { AppError } from '../../errors/AppError'
import { prisma } from '../../prisma/client'
import { CreateTeamDTO } from '../dtos/CreateTeamDTO'
import { Team } from '@prisma/client'

export class CreateTeamCase {
  async execute({ name, image }: CreateTeamDTO): Promise<Team> {
    // Verificando se o time já existe
    const teamAlreadyExists = await prisma.team.findUnique({
      where: {
        name,
      },
    })

    if (teamAlreadyExists) {
      throw new AppError('Team already exists!')
    }

    // Criando um time
    const team = await prisma.team.create({
      data: {
        name,
        image,
      },
    })

    return team
  }
}
