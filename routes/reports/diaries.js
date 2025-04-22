import { Router } from 'express'
import { DiaryController } from '../../controllers/reports/diaries.js'
import { uploadReports } from '../../middlewares/multerFileConfig.js'

export const createDiaryRouter = ({ diaryModel }) => {
  const diaryRouter = Router()

  const diaryController = new DiaryController({ diaryModel })

  diaryRouter.get('/', diaryController.getAll)
  diaryRouter.get('/:id', diaryController.getById)
  diaryRouter.post('/', uploadReports.single('file'), diaryController.create)
  diaryRouter.delete('/:id', diaryController.delete)
  diaryRouter.put('/:id', diaryController.update)

  return diaryRouter
}
