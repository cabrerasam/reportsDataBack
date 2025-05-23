import { Router } from 'express'
import { SpecialController } from '../../controllers/reports/specials.js'
import { uploadReports } from '../../middlewares/multerFileConfig.js'

export const createSpecialRouter = ({ specialModel }) => {
  const specialRouter = Router()

  const specialController = new SpecialController({ specialModel })

  specialRouter.get('/', specialController.getAll)
  specialRouter.get('/:id', specialController.getById)
  specialRouter.post('/', uploadReports.single('file'), specialController.create)
  specialRouter.delete('/:id', specialController.delete)
  specialRouter.put('/:id', specialController.update)

  return specialRouter
}
