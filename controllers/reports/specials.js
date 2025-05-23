import { validateSpecial } from '../../schemas/reports/specials.js'

export class SpecialController {
  constructor ({ specialModel }) {
    this.specialModel = specialModel
  }

  getAll = async (req, res) => {
    const diaries = await this.specialModel.getAll()
    res.status(201).json(diaries)
  }

  getById = async (req, res) => {
    const { id } = req.params
    const special = await this.specialModel.getById({ id })
    res.status(201).json(special)
  }

  create = async (req, res) => {
    req.body.linkSpecial = req.file ? `/uploads/reports/${req.file.filename}` : 'ruta por defecto'
    const result = validateSpecial(req.body)
    if (!result.success) {
      console.error(result.error)
      res.status(400).json({ error: JSON.parse(result.error.message) })
    }
    const newSpecial = await this.specialModel.create({ input: result.data })
    res.status(201).json(newSpecial)
  }

  delete = async (req, res) => {
    const { id } = req.params
    const result = await this.specialModel.delete({ id })
    if (result === false) {
      res.status(400).json({ error: JSON.parse(result.error.message) })
    }
    res.status(201).json('Special deleted')
  }

  update = async (req, res) => {
    const { id } = req.params
    const result = validateSpecial(req.body)
    if (!result.success) {
      res.status(400).json({ error: JSON.parse(result.error.message) })
    }
    const newSpecial = await this.specialModel.update({ idSpecial: id, input: result.data })
    res.status(201).json(newSpecial)
  }
}
