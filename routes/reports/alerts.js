import { Router } from 'express'
import { AlertController } from '../../controllers/reports/alerts.js'
import { uploadReports } from '../../middlewares/multerFileConfig.js'

export const createAlertRouter = ({ alertModel }) => {
  const alertRouter = Router()

  const alertController = new AlertController({ alertModel })

  alertRouter.get('/', alertController.getAll)
  alertRouter.get('/:id', alertController.getById)
  alertRouter.post('/', uploadReports.single('file'), alertController.create)
  alertRouter.delete('/:id', alertController.delete)
  alertRouter.put('/:id', alertController.update)

  return alertRouter
}
