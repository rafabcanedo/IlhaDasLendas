import { Router } from 'express'
import { teamRoutes } from './team.routes'
import { playerRoutes } from './player.routes'

const routes = Router()

routes.use('/teams', teamRoutes)
routes.use('/players', playerRoutes)

export { routes }
