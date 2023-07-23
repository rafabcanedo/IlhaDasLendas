import { Router } from 'express'
import { CreateTeamController } from '../modules/teams/CreateTeamController'
import { GetTeamsByReleaseController } from '../modules/teams/GetTeamsByReleaseController'

const createTeamController = new CreateTeamController()
const getTeamsByReleaseController = new GetTeamsByReleaseController()

const teamRoutes = Router()

teamRoutes.post('/', createTeamController.handle)
teamRoutes.get('/release', getTeamsByReleaseController.handle)

export { teamRoutes }
