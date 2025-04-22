import { validateRole } from '../../schemas/users/roles.js'

export class RoleController {
  constructor ({ roleModel }) {
    this.roleModel = roleModel
  }

  getAll = async (req, res) => {
    const roles = await this.roleModel.getAll()
    res.json(roles)
  }

  getById = async (req, res) => {
    const { id } = req.params
    const role = await this.roleModel.getById({ id })
    if (role.length === 0) {
      return res.status(400).json({ message: 'Role not found' })
    }
    res.json(role)
  }

  create = async (req, res) => {
    const result = validateRole(req.body)
    if (!result.success) {
      return res.status(400).json({ error: JSON.parse(result.error.message) })
    }
    const newRole = await this.roleModel.create({ input: result.data })
    res.status(201).json(newRole)
  }

  delete = async (req, res) => {
    const { id } = req.params
    const result = await this.roleModel.delete({ id })
    if (result === false) {
      return res.status(400).json({ message: 'Role not found' })
    }
    res.json({ message: 'Role deleted' })
  }

  update = async (req, res) => {
    const { id } = req.params
    const result = validateRole(req.body)
    if (!result.success) {
      return res.status(400).json({ error: JSON.parse(result.error.message) })
    }
    const updateRole = await this.roleModel.update({ idRole: id, input: result.data })
    res.status(201).json(updateRole)
  }
}
