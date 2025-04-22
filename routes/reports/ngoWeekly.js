import { Router } from 'express'
import { NgoWeeklyController } from '../../controllers/reports/ngoWeekly.js'
import { uploadReports } from '../../middlewares/multerFileConfig.js'

export const createNgoWeeklyRouter = ({ ngoWeeklyModel }) => {
  const ngoWeeklyRouter = Router()

  const ngoWeeklyController = new NgoWeeklyController({ ngoWeeklyModel })

  ngoWeeklyRouter.get('/', ngoWeeklyController.getAll)
  ngoWeeklyRouter.get('/:id', ngoWeeklyController.getById)
  ngoWeeklyRouter.post('/', uploadReports.single('file'), ngoWeeklyController.create)
  ngoWeeklyRouter.delete('/:id', ngoWeeklyController.delete)
  ngoWeeklyRouter.put('/:id', ngoWeeklyController.update)

  return ngoWeeklyRouter
}
