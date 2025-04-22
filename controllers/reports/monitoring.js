import { validateMonitoring } from '../../schemas/reports/monitoring.js'

export class MonitoringController {
  constructor ({ monitoringModel }) {
    this.monitoringModel = monitoringModel
  }

  getAll = async (req, res) => {
    const monitoring = await this.monitoringModel.getAll()
    res.status(201).json(monitoring)
  }

  getById = async (req, res) => {
    const { id } = req.params
    const monitoring = await this.monitoringModel.getById({ id })
    res.status(201).json(monitoring)
  }

  create = async (req, res) => {
    req.body.linkMonitoring = req.file ? `/uploads/reports/${req.file.filename}` : 'ruta por defecto'
    const result = validateMonitoring(req.body)
    if (!result.success) {
      res.status(400).json({ error: JSON.parse(result.error.message) })
    }
    const newMonitoring = await this.monitoringModel.create({ input: result.data })
    res.status(201).json(newMonitoring)
  }

  delete = async (req, res) => {
    const { id } = req.params
    const result = await this.monitoringModel.delete({ id })
    if (result === false) {
      res.status(400).json({ error: JSON.parse(result.error.message) })
    }
    res.status(201).json('Monitoring deleted')
  }

  update = async (req, res) => {
    const { id } = req.params
    const result = validateMonitoring(req.body)
    if (!result.success) {
      res.status(400).json({ error: JSON.parse(result.error.message) })
    }
    const newMonitoring = await this.monitoringModel.update({ idMonitoring: id, input: result.data })
    res.status(201).json(newMonitoring)
  }
}
