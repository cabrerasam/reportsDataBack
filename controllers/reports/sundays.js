import { validateSunday } from '../../schemas/reports/sundays.js'

export class SundayController {
  constructor ({ sundayModel }) {
    this.sundayModel = sundayModel
  }

  getAll = async (req, res) => {
    const sundays = await this.sundayModel.getAll()
    res.status(201).json(sundays)
  }

  getById = async (req, res) => {
    const { id } = req.params
    const sunday = await this.sundayModel.getById({ id })
    res.status(201).json(sunday)
  }

  create = async (req, res) => {
    req.body.linkSunday = req.file ? `/uploads/reports/${req.file.filename}` : 'ruta por defecto'
    const result = validateSunday(req.body)
    if (!result.success) {
      res.status(400).json({ error: JSON.parse(result.error.message) })
    }
    const newSunday = await this.sundayModel.create({ input: result.data })
    res.status(201).json(newSunday)
  }

  delete = async (req, res) => {
    const { id } = req.params
    const result = await this.sundayModel.delete({ id })
    if (result === false) {
      res.status(400).json({ error: JSON.parse(result.error.message) })
    }
    res.status(201).json('Sunday deleted')
  }

  update = async (req, res) => {
    const { id } = req.params
    const result = validateSunday(req.body)
    if (!result.success) {
      res.status(400).json({ error: JSON.parse(result.error.message) })
    }
    const newSunday = await this.sundayModel.update({ idSunday: id, input: result.data })
    res.status(201).json(newSunday)
  }
}
