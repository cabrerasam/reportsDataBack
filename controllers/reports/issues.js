import { validateIssue } from '../../schemas/reports/issues.js'

export class IssueController {
  constructor ({ issueModel }) {
    this.issueModel = issueModel
  }

  getAll = async (req, res) => {
    const issues = await this.issueModel.getAll()
    res.status(201).json(issues)
  }

  getById = async (req, res) => {
    const { id } = req.params
    const issues = await this.issueModel.getById({ id })
    res.status(201).json(issues)
  }

  create = async (req, res) => {
    const result = validateIssue(req.body)
    if (!result.success) {
      res.status(400).json({ error: JSON.parse(result.error.message) })
    }
    const newIssue = await this.issueModel.create({ input: result.data })
    res.status(201).json(newIssue)
  }

  delete = async (req, res) => {
    const { id } = req.params
    const result = await this.issueModel.delete({ id })
    if (result === false) {
      res.status(400).json({ error: JSON.parse(result.error.message) })
    }
    res.status(201).json('Issue deleted')
  }

  update = async (req, res) => {
    const { id } = req.params
    const result = validateIssue(req.body)
    if (!result.success) {
      res.status(400).json({ error: JSON.parse(result.error.message) })
    }
    const newIssue = await this.issueModel.update({ idIssueReport: id, input: result.data })
    res.status(201).json(newIssue)
  }
}
