import { Router } from 'express'
import { IndividualController } from '../../controllers/subjects/individuals.js'
import { upload } from '../../middlewares/multerConfig.js'

export const createIndividualRouter = ({ individualModel }) => {
  const individualRouter = Router()

  const individualController = new IndividualController({ individualModel })

  individualRouter.get('/', individualController.getAll)
  individualRouter.get('/:id', individualController.getById)
  individualRouter.post('/', upload.single('photo'), individualController.create)
  individualRouter.delete('/:id', individualController.delete)
  individualRouter.put('/:id', upload.single('photo'), individualController.update)
  individualRouter.delete('/:id/uploads/photos/:photoName', individualController.deletePhoto)

  return individualRouter
}
