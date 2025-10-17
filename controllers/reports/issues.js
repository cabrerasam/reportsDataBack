import { validateIssue, validateIssuesArray } from '../../schemas/reports/issues.js'

export class IssueController {
  constructor ({ issueModel }) {
    this.issueModel = issueModel
  }

  getAll = async (req, res) => {
    const issues = await this.issueModel.getAll()
    res.status(201).json(issues)
  }

  create = async (req, res) => {
    // Verificar si el body es un array
    if (Array.isArray(req.body)) {
      const result = validateIssuesArray(req.body)
      if (!result.success) {
        return res.status(400).json({ error: JSON.parse(result.error.message) })
      }
      const newIssues = await this.issueModel.create({ input: result.data })
      return res.status(201).json(newIssues)
    } else {
      // Mantener compatibilidad con objeto único
      const result = validateIssue(req.body)
      if (!result.success) {
        return res.status(400).json({ error: JSON.parse(result.error.message) })
      }
      const newIssue = await this.issueModel.create({ input: result.data })
      return res.status(201).json(newIssue)
    }
  }

  update = async (req, res) => {
    const { id } = req.params
    const result = validateIssue(req.body)
    if (!result.success) {
      res.status(400).json({ error: JSON.parse(result.error.message) })
    }
    const newIssue = await this.issueModel.update({ idReport: id, input: result.data })
    res.status(201).json(newIssue)
  }

  delete = async (req, res) => {
    const { id } = req.params
    const result = await this.issueModel.delete({ idReport: id })
    if (result === false) {
      res.status(400).json({ error: JSON.parse(result.error.message) })
    }
    res.status(201).json('Issue deleted')
  }
}
