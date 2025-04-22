import { Router } from 'express'
import { RegionController } from '../../controllers/users/regions.js'

export const createRegionRouter = ({ regionModel }) => {
  const regionRouter = Router()

  const regionController = new RegionController({ regionModel })

  regionRouter.get('/', regionController.getAll)
  regionRouter.get('/:id', regionController.getById)
  regionRouter.post('/', regionController.create)
  regionRouter.delete('/:id', regionController.delete)
  regionRouter.put('/:id', regionController.update)

  return regionRouter
}
