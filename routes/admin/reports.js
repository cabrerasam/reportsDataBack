import { Router } from 'express'
import { AdminReportController } from '../../controllers/admin/reports.js'

export const createAdminReportRouter = ({ adminReportModel }) => {
  const adminReportRouter = new Router()
  const adminReportController = new AdminReportController({ adminReportModel })

  adminReportRouter.get('/', adminReportController.getAll)
  adminReportRouter.get('/:id', adminReportController.getById)

  return adminReportRouter
}
