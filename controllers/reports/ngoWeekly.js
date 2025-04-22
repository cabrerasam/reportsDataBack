import { validateNgoWeekly } from '../../schemas/reports/ngoWeekly.js'

export class NgoWeeklyController {
  constructor ({ ngoWeeklyModel }) {
    this.ngoWeeklyModel = ngoWeeklyModel
  }

  getAll = async (req, res) => {
    const ngoWeekly = await this.ngoWeeklyModel.getAll()
    res.status(201).json(ngoWeekly)
  }

  getById = async (req, res) => {
    const { id } = req.params
    const ngoWeekly = await this.ngoWeeklyModel.getById({ id })
    res.status(201).json(ngoWeekly)
  }

  create = async (req, res) => {
    req.body.linkNgoWeekly = req.file ? `/uploads/reports/${req.file.filename}` : 'ruta por defecto'
    const result = validateNgoWeekly(req.body)
    if (!result.success) {
      console.error(result.error.message)
      res.status(400).json({ error: JSON.parse(result.error.message) })
    }
    const newNgoWeekly = await this.ngoWeeklyModel.create({ input: result.data })
    res.status(201).json(newNgoWeekly)
  }

  delete = async (req, res) => {
    const { id } = req.params
    const result = await this.ngoWeeklyModel.delete({ id })
    if (result === false) {
      res.status(400).json({ error: JSON.parse(result.error.message) })
    }
    res.status(201).json('NGO Weekly deleted')
  }

  update = async (req, res) => {
    const { id } = req.params
    const result = validateNgoWeekly(req.body)
    if (!result.success) {
      res.status(400).json({ error: JSON.parse(result.error.message) })
    }
    const newNgoWeekly = await this.ngoWeeklyModel.update({ idNgoWeekly: id, input: result.data })
    res.status(201).json(newNgoWeekly)
  }
}
