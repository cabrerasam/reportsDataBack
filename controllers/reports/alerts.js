import { validateAlert } from '../../schemas/reports/alerts.js'

export class AlertController {
  constructor ({ alertModel }) {
    this.alertModel = alertModel
  }

  getAll = async (req, res) => {
    const alerts = await this.alertModel.getAll()
    res.status(201).json(alerts)
  }

  getById = async (req, res) => {
    const { id } = req.params
    const alert = await this.alertModel.getById({ id })
    res.status(201).json(alert)
  }

  create = async (req, res) => {
    req.body.linkAlert = req.file ? `/uploads/reports/${req.file.filename}` : 'ruta por defecto'
    const result = validateAlert(req.body)
    if (!result.success) {
      res.status(400).json({ error: JSON.parse(result.error.message) })
    }
    const newAlert = await this.alertModel.create({ input: result.data })
    res.status(201).json(newAlert)
  }

  delete = async (req, res) => {
    const { id } = req.params
    const result = await this.alertModel.delete({ id })
    if (result === false) {
      res.status(400).json({ error: JSON.parse(result.error.message) })
    }
    res.status(201).json('Sunday deleted')
  }

  update = async (req, res) => {
    const { id } = req.params
    const result = validateAlert(req.body)
    if (!result.success) {
      res.status(400).json({ error: JSON.parse(result.error.message) })
    }
    const newAlert = await this.alertModel.update({ idAlert: id, input: result.data })
    res.status(201).json(newAlert)
  }
}
