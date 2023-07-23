import { Router } from 'express'
import { CreatePlayerController } from '../modules/players/CreatePlayerController'
import { GetAllPlayersController } from '../modules/players/GetAllPlayersController'

const createPlayerController = new CreatePlayerController()
const getAllPlayerController = new GetAllPlayersController()

const playerRoutes = Router()

playerRoutes.post('/', createPlayerController.handle)
playerRoutes.get('/', getAllPlayerController.handle)

export { playerRoutes }
