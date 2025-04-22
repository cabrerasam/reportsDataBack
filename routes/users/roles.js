import { Router } from 'express'
import { RoleController } from '../../controllers/users/roles.js'

export const createRoleRouter = ({ roleModel }) => {
  const roleRouter = Router()

  const roleController = new RoleController({ roleModel })

  roleRouter.get('/', roleController.getAll)
  roleRouter.get('/:id', roleController.getById)
  roleRouter.post('/', roleController.create)
  roleRouter.delete('/:id', roleController.delete)
  roleRouter.put('/:id', roleController.update)

  return roleRouter
}
