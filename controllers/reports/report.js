import { validateReport } from '../../schemas/reports/report.js'

export class ReportController {
  constructor ({ reportModel }) {
    this.reportModel = reportModel
  }

  getAll = async (req, res) => {
    const report = await this.reportModel.getAll()
    res.status(201).json(report)
  }

  getById = async (req, res) => {
    const { id } = req.params
    const report = await this.reportModel.getById({ id })
    res.status(201).json(report)
  }

  create = async (req, res) => {
    req.body.linkReport = req.file ? `/uploads/reports/${req.file.filename}` : 'ruta por defecto'
    const result = validateReport(req.body)
    if (!result.success) {
      res.status(400).json({ error: JSON.parse(result.error.message) })
    }
    const newreport = await this.reportModel.create({ input: result.data })
    res.status(201).json(newreport)
  }

  delete = async (req, res) => {
    const { id } = req.params
    const result = await this.reportModel.delete({ id })
    if (result === false) {
      res.status(400).json({ error: JSON.parse(result.error.message) })
    }
    res.status(201).json('report deleted')
  }

  update = async (req, res) => {
    const { id } = req.params
    const result = validateReport(req.body)
    if (!result.success) {
      res.status(400).json({ error: JSON.parse(result.error.message) })
    }
    const newreport = await this.reportModel.update({ idreport: id, input: result.data })
    res.status(201).json(newreport)
  }
}
