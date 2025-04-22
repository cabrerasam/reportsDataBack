import { Router } from 'express'
import { UserController } from '../../controllers/users/users.js'

export const createUserRouter = ({ userModel }) => {
  const userRouter = new Router()

  const userController = new UserController({ userModel })

  userRouter.get('/', userController.getAll)
  userRouter.get('/:id', userController.getById)
  userRouter.post('/', userController.create)
  userRouter.put('/:id', userController.update)
  userRouter.delete('/:id', userController.delete)

  return userRouter
}
