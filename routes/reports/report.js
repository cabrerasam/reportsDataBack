import { Router } from 'express'
import { ReportController } from '../../controllers/reports/report.js'
import { uploadReports } from '../../middlewares/multerFileConfig.js'

export const createReportRouter = ({ reportModel }) => {
  const reportRouter = Router()

  const reportController = new ReportController({ reportModel })

  reportRouter.get('/', reportController.getAll)
  reportRouter.get('/:id', reportController.getById)
  reportRouter.post('/', uploadReports.single('file'), reportController.create)
  reportRouter.delete('/:id', reportController.delete)
  reportRouter.put('/:id', reportController.update)

  return reportRouter
}
