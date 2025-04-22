import { Router } from 'express'
import { WeeklyController } from '../../controllers/reports/weekly.js'
import { uploadReports } from '../../middlewares/multerFileConfig.js'

export const createWeeklyRouter = ({ weeklyModel }) => {
  const weeklyRouter = Router()

  const weeklyController = new WeeklyController({ weeklyModel })

  weeklyRouter.get('/', weeklyController.getAll)
  weeklyRouter.get('/:id', weeklyController.getById)
  weeklyRouter.post('/', uploadReports.single('file'), weeklyController.create)
  weeklyRouter.delete('/:id', weeklyController.delete)
  weeklyRouter.put('/:id', weeklyController.update)

  return weeklyRouter
}
