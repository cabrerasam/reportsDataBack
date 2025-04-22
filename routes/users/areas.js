import { Router } from 'express'
import { AreaController } from '../../controllers/users/areas.js'

export const createAreaRouter = ({ areaModel }) => {
  const areasRouter = Router()

  const areaController = new AreaController({ areaModel })

  areasRouter.get('/', areaController.getAll)
  areasRouter.get('/:id', areaController.getById)
  areasRouter.post('/', areaController.create)
  areasRouter.delete('/:id', areaController.delete)
  areasRouter.put('/:id', areaController.update)

  return areasRouter
}
