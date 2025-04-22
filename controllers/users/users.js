import { validateUser } from '../../schemas/users/users.js'

export class UserController {
  constructor ({ userModel }) {
    this.userModel = userModel
  }

  getAll = async (req, res) => {
    const users = await this.userModel.getAll()
    res.json(users)
  }

  getById = async (req, res) => {
    const { id } = req.params
    const user = await this.userModel.getById({ id })
    if (user.length === 0) {
      return res.status(400).json({ message: 'User not found' })
    }
    res.json(user)
  }

  create = async (req, res) => {
    const result = validateUser(req.body)
    if (!result.success) {
      return res.status(400).json({ error: JSON.parse(result.error.message) })
    }
    const newUser = await this.userModel.create({ input: result.data })
    res.status(201).json(newUser)
  }

  delete = async (req, res) => {
    const { id } = req.params
    const result = await this.userModel.delete({ id })
    if (result === false) {
      return res.status(400).json({ message: 'User not found' })
    }
    res.json({ message: 'User deleted' })
  }

  update = async (req, res) => {
    const { id } = req.params
    const result = validateUser(req.body)
    if (!result.success) {
      return res.status(400).json({ error: JSON.parse(result.error.message) })
    }
    const updateUser = await this.userModel.update({ idUser: id, input: result.data })
    res.status(201).json(updateUser)
  }
}
