import { validateAssociation } from '../../schemas/subjects/associations.js'

export class AssociationController {
  constructor ({ associationModel }) {
    this.associationModel = associationModel
  }

  getAll = async (req, res) => {
    const associations = await this.associationModel.getAll()
    res.status(201).json(associations)
  }

  getById = async (req, res) => {
    const { id } = req.params
    const association = await this.associationModel.getById({ id })
    res.status(201).json(association)
  }

  create = async (req, res) => {
    const result = validateAssociation(req.body)
    if (!result.success) {
      res.status(400).json({ error: JSON.parse(result.error.message) })
    }
    const newAssociation = await this.associationModel.create({ input: result.data })
    res.status(201).json(newAssociation)
  }

  delete = async (req, res) => {
    const { id } = req.params
    const result = await this.associationModel.delete({ id })
    if (result === false) {
      res.status(400).json({ error: JSON.parse(result.error.message) })
    }
    res.status(201).json('Association deleted')
  }

  update = async (req, res) => {
    const { id } = req.params
    const result = validateAssociation(req.body)
    if (!result.success) {
      res.status(400).json({ error: JSON.parse(result.error.message) })
    }
    const newAssociation = await this.associationModel.update({ idAssociation: id, input: result.data })
    res.status(201).json(newAssociation)
  }
}
