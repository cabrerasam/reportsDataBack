import { validateCollective } from '../../schemas/subjects/collectives.js'

export class CollectiveController {
  constructor ({ collectiveModel }) {
    this.collectiveModel = collectiveModel
  }

  getAll = async (req, res) => {
    const collectives = await this.collectiveModel.getAll()
    res.json(collectives)
  }

  getById = async (req, res) => {
    const { id } = req.params
    const collective = await this.collectiveModel.getById({ id })
    res.json(collective)
  }

  create = async (req, res) => {
    req.body.logoCollective = req.file ? `/uploads/photos/${req.file.filename}` : 'ruta por defecto'
    const result = validateCollective(req.body)
    if (!result.success) {
      console.error(result.error)
      return res.status(400).json({ error: JSON.parse(result.error.message) })
    }
    const newCollective = await this.collectiveModel.create({ input: result.data })
    res.status(201).json(newCollective)
  }

  delete = async (req, res) => {
    const { id } = req.params
    const result = await this.collectiveModel.delete({ id })
    if (result === false) {
      res.status(400).json({ error: JSON.parse(result.error.message) })
    }
    res.status(201).json('Collective deleted')
  }

  update = async (req, res) => {
    const { id } = req.params
    const result = validateCollective(req.body)
    if (!result.success) {
      res.status(400).json({ error: JSON.parse(result.error.message) })
    }
    const newCollective = await this.collectiveModel.update({ idCollective: id, input: result.data })
    res.status(201).json(newCollective)
  }
}
