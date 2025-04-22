import { validateWork } from '../../schemas/subjects/works.js'

export class WorkController {
  constructor ({ workModel }) {
    this.workModel = workModel
  }

  getAll = async (req, res) => {
    const works = await this.workModel.getAll()
    res.status(201).json(works)
  }

  create = async (req, res) => {
    const result = validateWork(req.body)
    if (!result.success) {
      res.status(400).json({ error: JSON.parse(result.error.message) })
    }
    const newWork = await this.workModel.create({ input: result.data })
    res.status(201).json(newWork)
  }

  delete = async (req, res) => {
    const { id } = req.params
    const result = await this.workModel.delete({ id })
    if (result === false) {
      res.status(400).json({ error: JSON.parse(result.error.message) })
    }
    res.status(201).json('Association deleted')
  }

  update = async (req, res) => {
    const { id } = req.params
    const result = validateWork(req.body)
    if (!result.success) {
      res.status(400).json({ error: JSON.parse(result.error.message) })
    }
    const newWork = await this.workModel.update({ idWork: id, input: result.data })
    res.status(201).json(newWork)
  }
}
