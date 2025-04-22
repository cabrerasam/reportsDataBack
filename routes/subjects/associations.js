import { Router } from 'express'
import { AssociationController } from '../../controllers/subjects/associations.js'

export const createAssociationRouter = ({ associationModel }) => {
  const associationRouter = Router()

  const associationController = new AssociationController({ associationModel })

  associationRouter.get('/', associationController.getAll)
  associationRouter.get('/:id', associationController.getById)
  associationRouter.post('/', associationController.create)
  associationRouter.delete('/:id', associationController.delete)
  associationRouter.put('/:id', associationController.update)

  return associationRouter
}
