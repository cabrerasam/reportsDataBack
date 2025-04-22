import { Router } from 'express'
import { SubjectController } from '../../controllers/subjects/subjects.js'

export const createSubjectRouter = ({ subjectModel }) => {
  const subjectRouter = Router()

  const subjectController = new SubjectController({ subjectModel })

  subjectRouter.get('/', subjectController.getSubject)
  subjectRouter.post('/', subjectController.createSubject)
  subjectRouter.delete('/:id', subjectController.deleteSubject)

  return subjectRouter
}
