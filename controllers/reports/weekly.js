import { validateWeekly } from '../../schemas/reports/weekly.js'

export class WeeklyController {
  constructor ({ weeklyModel }) {
    this.weeklyModel = weeklyModel
  }

  getAll = async (req, res) => {
    const weekly = await this.weeklyModel.getAll()
    res.status(201).json(weekly)
  }

  getById = async (req, res) => {
    const { id } = req.params
    const weekly = await this.weeklyModel.getById({ id })
    res.status(201).json(weekly)
  }

  create = async (req, res) => {
    req.body.linkWeekly = req.file ? `/uploads/reports/${req.file.filename}` : 'ruta por defecto'
    const result = validateWeekly(req.body)
    if (!result.success) {
      res.status(400).json({ error: JSON.parse(result.error.message) })
    }
    const newWeekly = await this.weeklyModel.create({ input: result.data })
    res.status(201).json(newWeekly)
  }

  delete = async (req, res) => {
    const { id } = req.params
    const result = await this.weeklyModel.delete({ id })
    if (result === false) {
      res.status(400).json({ error: JSON.parse(result.error.message) })
    }
    res.status(201).json('Weekly deleted')
  }

  update = async (req, res) => {
    const { id } = req.params
    const result = validateWeekly(req.body)
    if (!result.success) {
      res.status(400).json({ error: JSON.parse(result.error.message) })
    }
    const newWeekly = await this.weeklyModel.update({ idWeekly: id, input: result.data })
    res.status(201).json(newWeekly)
  }
}
