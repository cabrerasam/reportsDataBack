import { Router } from 'express'
import { MonitoringController } from '../../controllers/reports/monitoring.js'
import { uploadReports } from '../../middlewares/multerFileConfig.js'

export const createMonitoringRouter = ({ monitoringModel }) => {
  const monitoringRouter = Router()

  const monitoringController = new MonitoringController({ monitoringModel })

  monitoringRouter.get('/', monitoringController.getAll)
  monitoringRouter.get('/:id', monitoringController.getById)
  monitoringRouter.post('/', uploadReports.single('file'), monitoringController.create)
  monitoringRouter.delete('/:id', monitoringController.delete)
  monitoringRouter.put('/:id', monitoringController.update)

  return monitoringRouter
}
