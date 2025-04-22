import { validateRegion } from '../../schemas/users/regions.js'

export class RegionController {
  constructor ({ regionModel }) {
    this.regionModel = regionModel
  }

  getAll = async (req, res) => {
    const regions = await this.regionModel.getAll()
    res.json(regions)
  }

  getById = async (req, res) => {
    const { id } = req.params
    const region = await this.regionModel.getById({ id })
    if (region.length === 0) {
      return res.status(400).json({ message: 'Region not found' })
    }
    return res.json(region)
  }

  create = async (req, res) => {
    const result = validateRegion(req.body)
    if (!result.success) {
      return res.status(400).json({ error: JSON.parse(result.error.message) })
    }
    const newRegion = await this.regionModel.create({ input: result.data })
    res.status(201).json(newRegion)
  }

  delete = async (req, res) => {
    const { id } = req.params
    const result = await this.regionModel.delete({ id })
    if (result === false) {
      return res.status(400).json({ message: 'Region not found' })
    }
    return res.json({ message: 'Region deleted' })
  }

  update = async (req, res) => {
    const { id } = req.params
    const result = validateRegion(req.body)
    if (!result.success) {
      return res.status(400).json({ error: JSON.parse(result.error.message) })
    }
    const updateRegion = await this.regionModel.update({ idRegion: id, input: result.data })
    return res.status(201).json(updateRegion)
  }
}
