import { Router } from 'express'
import { AdminSubjectController } from '../../controllers/admin/subjects.js'

export const createAdminSubjectRouter = ({ adminSubjectModel }) => {
  const adminSubjectRouter = new Router()
  const adminSubjectController = new AdminSubjectController({ adminSubjectModel })

  adminSubjectRouter.get('/', adminSubjectController.getAll)
  adminSubjectRouter.get('/:id', adminSubjectController.getById)

  return adminSubjectRouter
}
