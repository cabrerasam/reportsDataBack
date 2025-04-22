import { validateSpeach } from '../../schemas/subjects/speach.js'

export class SpeachController {
  constructor ({ speachModel }) {
    this.speachModel = speachModel
  }

  getAll = async (req, res) => {
    const speachs = await this.speachModel.getAll()
    res.status(201).json(speachs)
  }

  getById = async (req, res) => {
    const { id } = req.params
    const speach = await this.speachModel.getById({ id })
    res.status(201).json(speach)
  }

  create = async (req, res) => {
    req.body.speach = req.file ? `/uploads/media/${req.file.filename}` : 'ruta por defecto'
    const result = validateSpeach(req.body)
    if (!result.success) {
      res.status(400).json({ error: JSON.parse(result.error.message) })
    }
    const newSpeach = await this.speachModel.create({ input: result.data })
    res.status(201).json(newSpeach)
  }

  delete = async (req, res) => {
    const { id } = req.params
    const result = await this.speachModel.delete({ id })
    if (result === false) {
      res.status(400).json({ error: JSON.parse(result.error.message) })
    }
    res.status(201).json('Association deleted')
  }

  update = async (req, res) => {
    const { id } = req.params
    const result = validateSpeach(req.body)
    if (!result.success) {
      res.status(400).json({ error: JSON.parse(result.error.message) })
    }
    const newAssociation = await this.speachModel.update({ idSpeach: id, input: result.data })
    res.status(201).json(newAssociation)
  }
}
