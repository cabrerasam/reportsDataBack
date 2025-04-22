import { Router } from 'express'
import { WorkController } from '../../controllers/subjects/works.js'

export const createWorkRouter = ({ workModel }) => {
  const workRouter = Router()

  const workController = new WorkController({ workModel })

  workRouter.get('/', workController.getAll)
  workRouter.post('/', workController.create)
  workRouter.delete('/:id', workController.delete)
  workRouter.put('/:id', workController.update)

  return workRouter
}
