import { Router } from 'express'
import { CollectiveController } from '../../controllers/subjects/collectives.js'
import { upload } from '../../middlewares/multerConfig.js'

export const createCollectiveRouter = ({ collectiveModel }) => {
  const collectiveRouter = Router()

  const collectiveController = new CollectiveController({ collectiveModel })

  collectiveRouter.get('/', collectiveController.getAll)
  collectiveRouter.get('/:id', collectiveController.getById)
  collectiveRouter.post('/', upload.single('logo'), collectiveController.create)
  collectiveRouter.delete('/:id', collectiveController.delete)
  collectiveRouter.put('/:id', collectiveController.update)

  return collectiveRouter
}
