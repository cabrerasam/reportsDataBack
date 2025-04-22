import { Router } from 'express'
import { SundayController } from '../../controllers/reports/sundays.js'
import { uploadReports } from '../../middlewares/multerFileConfig.js'

export const createSundayRouter = ({ sundayModel }) => {
  const sundayRouter = Router()

  const sundayController = new SundayController({ sundayModel })

  sundayRouter.get('/', sundayController.getAll)
  sundayRouter.get('/:id', sundayController.getById)
  sundayRouter.post('/', uploadReports.single('file'), sundayController.create)
  sundayRouter.delete('/:id', sundayController.delete)
  sundayRouter.put('/:id', sundayController.update)

  return sundayRouter
}
