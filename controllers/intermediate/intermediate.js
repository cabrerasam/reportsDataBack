import { validateIntermediate } from '../../schemas/Intermediate/intermediate.js'

export class IntermediateController {
  constructor ({ intermediateModel }) {
    this.intermediateModel = intermediateModel
  }

  // INDIVIDUALS

  // INDIVIDUAL DIARIES
  getIndividualDiaries = async (req, res) => {
    const individualDiaries = await this.intermediateModel.getIndividualDiaries()
    res.status(200).json(individualDiaries)
  }

  createIndividualDiaries = async (req, res) => {
    const result = validateIntermediate(req.body)
    if (!result.success) {
      return res.status(400).json({ error: JSON.parse(result.error.message) })
    }
    const newIndividualDiaries = await this.intermediateModel.createIndividualDiaries({ input: result.data })
    res.status(201).json(newIndividualDiaries)
  }

  deleteIndividualDiaries = async (req, res) => {
    const { id } = req.params
    await this.intermediateModel.deleteIndividualDiaries({ id })
    res.status(200).json({ message: 'Deleted' })
  }

  // INDIVIDUAL MONITORING
  getIndividualMonitoring = async (req, res) => {
    const individualMonitoring = await this.intermediateModel.getIndividualMonitoring()
    res.status(200).json(individualMonitoring)
  }

  createIndividualMonitoring = async (req, res) => {
    const result = validateIntermediate(req.body)
    if (!result.success) {
      return res.status(400).json({ error: JSON.parse(result.error.message) })
    }
    const newIndividualMonitoring = await this.intermediateModel.createIndividualMonitoring({ input: result.data })
    res.status(201).json(newIndividualMonitoring)
  }

  deleteIndividualMonitoring = async (req, res) => {
    const { id } = req.params
    await this.intermediateModel.deleteIndividualMonitoring({ id })
    res.status(200).json({ message: 'Deleted' })
  }

  // INDIVIDUAL ALERT
  getIndividualAlert = async (req, res) => {
    const individualAlert = await this.intermediateModel.getIndividualAlert()
    res.status(200).json(individualAlert)
  }

  createIndividualAlert = async (req, res) => {
    const result = validateIntermediate(req.body)
    if (!result.success) {
      return res.status(400).json({ error: JSON.parse(result.error.message) })
    }
    const newIndividualAlert = await this.intermediateModel.createIndividualAlert({ input: result.data })
    res.status(201).json(newIndividualAlert)
  }

  deleteIndividualAlert = async (req, res) => {
    const { id } = req.params
    await this.intermediateModel.deleteIndividualAlert({ id })
    res.status(200).json({ message: 'Deleted' })
  }

  // INDIVIDUAL WEEKLY

  getIndividualWeekly = async (req, res) => {
    const individualWeekly = await this.intermediateModel.getIndividualWeekly()
    res.status(200).json(individualWeekly)
  }

  createIndividualWeekly = async (req, res) => {
    const result = validateIntermediate(req.body)
    if (!result.success) {
      return res.status(400).json({ error: JSON.parse(result.error.message) })
    }
    const newIndividualWeekly = await this.intermediateModel.createIndividualWeekly({ input: result.data })
    res.status(201).json(newIndividualWeekly)
  }

  deleteIndividualWeekly = async (req, res) => {
    const { id } = req.params
    await this.intermediateModel.deleteIndividualWeekly({ id })
    res.status(200).json({ message: 'Deleted' })
  }

  // INDIVIDUAL NGO WEEKLY
  getIndividualNgoWeekly = async (req, res) => {
    const individualNgoWeekly = await this.intermediateModel.getIndividualNgoWeekly()
    res.status(200).json(individualNgoWeekly)
  }

  createIndividualNgoWeekly = async (req, res) => {
    const result = validateIntermediate(req.body)
    if (!result.success) {
      return res.status(400).json({ error: JSON.parse(result.error.message) })
    }
    const newIndividualNgoWeekly = await this.intermediateModel.createIndividualNgoWeekly({ input: result.data })
    res.status(201).json(newIndividualNgoWeekly)
  }

  deleteIndividualNgoWeekly = async (req, res) => {
    const { id } = req.params
    await this.intermediateModel.deleteIndividualNgoWeekly({ id })
    res.status(200).json({ message: 'Deleted' })
  }

  // INDIVIDUAL SUNDAY

  getIndividualSunday = async (req, res) => {
    const individualSunday = await this.intermediateModel.getIndividualSunday()
    res.status(200).json(individualSunday)
  }

  createIndividualSunday = async (req, res) => {
    const result = validateIntermediate(req.body)
    if (!result.success) {
      return res.status(400).json({ error: JSON.parse(result.error.message) })
    }
    const newIndividualSunday = await this.intermediateModel.createIndividualSunday({ input: result.data })
    res.status(201).json(newIndividualSunday)
  }

  deleteIndividualSunday = async (req, res) => {
    const { id } = req.params
    await this.intermediateModel.deleteIndividualSunday({ id })
    res.status(200).json({ message: 'Deleted' })
  }

  // COLLECTIVES

  // COLLECTIVE DIARIES

  getCollectiveDiaries = async (req, res) => {
    const collectiveDiaries = await this.intermediateModel.getCollectiveDiaries()
    res.status(200).json(collectiveDiaries)
  }

  createCollectiveDiaries = async (req, res) => {
    const result = validateIntermediate(req.body)
    if (!result.success) {
      return res.status(400).json({ error: JSON.parse(result.error.message) })
    }
    const newCollectiveDiaries = await this.intermediateModel.createCollectiveDiaries({ input: result.data })
    res.status(201).json(newCollectiveDiaries)
  }

  deleteCollectiveDiaries = async (req, res) => {
    const { id } = req.params
    await this.intermediateModel.deleteCollectiveDiaries({ id })
    res.status(200).json({ message: 'Deleted' })
  }

  // COLLECTIVE MONITORING

  getCollectiveMonitoring = async (req, res) => {
    const collectiveMonitoring = await this.intermediateModel.getCollectiveMonitoring()
    res.status(200).json(collectiveMonitoring)
  }

  createCollectiveMonitoring = async (req, res) => {
    const result = validateIntermediate(req.body)
    if (!result.success) {
      return res.status(400).json({ error: JSON.parse(result.error.message) })
    }
    const newCollectiveMonitoring = await this.intermediateModel.createCollectiveMonitoring({ input: result.data })
    res.status(201).json(newCollectiveMonitoring)
  }

  deleteCollectiveMonitoring = async (req, res) => {
    const { id } = req.params
    await this.intermediateModel.deleteCollectiveMonitoring({ id })
    res.status(200).json({ message: 'Deleted' })
  }

  // COLLECTIVE ALERT
  getCollectiveAlert = async (req, res) => {
    const collectiveAlert = await this.intermediateModel.getCollectiveAlert()
    res.status(200).json(collectiveAlert)
  }

  createCollectiveAlert = async (req, res) => {
    const result = validateIntermediate(req.body)
    if (!result.success) {
      return res.status(400).json({ error: JSON.parse(result.error.message) })
    }
    const newCollectiveAlert = await this.intermediateModel.createCollectiveAlert({ input: result.data })
    res.status(201).json(newCollectiveAlert)
  }

  deleteCollectiveAlert = async (req, res) => {
    const { id } = req.params
    await this.intermediateModel.deleteCollectiveAlert({ id })
    res.status(200).json({ message: 'Deleted' })
  }

  // COLLECTIVE WEEKLY

  getCollectiveWeekly = async (req, res) => {
    const collectiveWeekly = await this.intermediateModel.getCollectiveWeekly()
    res.status(200).json(collectiveWeekly)
  }

  createCollectiveWeekly = async (req, res) => {
    const result = validateIntermediate(req.body)
    if (!result.success) {
      return res.status(400).json({ error: JSON.parse(result.error.message) })
    }
    const newCollectiveWeekly = await this.intermediateModel.createCollectiveWeekly({ input: result.data })
    res.status(201).json(newCollectiveWeekly)
  }

  deleteCollectiveWeekly = async (req, res) => {
    const { id } = req.params
    await this.intermediateModel.deleteCollectiveWeekly({ id })
    res.status(200).json({ message: 'Deleted' })
  }

  // COLLECTIVE NGO WEEKLY

  getCollectiveNgoWeekly = async (req, res) => {
    const collectiveNgoWeekly = await this.intermediateModel.getCollectiveNgoWeekly()
    res.status(200).json(collectiveNgoWeekly)
  }

  createCollectiveNgoWeekly = async (req, res) => {
    const result = validateIntermediate(req.body)
    if (!result.success) {
      return res.status(400).json({ error: JSON.parse(result.error.message) })
    }
    const newCollectiveNgoWeekly = await this.intermediateModel.createCollectiveNgoWeekly({ input: result.data })
    res.status(201).json(newCollectiveNgoWeekly)
  }

  deleteCollectiveNgoWeekly = async (req, res) => {
    const { id } = req.params
    await this.intermediateModel.deleteCollectiveNgoWeekly({ id })
    res.status(200).json({ message: 'Deleted' })
  }

  // COLLECTIVE SUNDAY

  getCollectiveSunday = async (req, res) => {
    const collectiveSunday = await this.intermediateModel.getCollectiveSunday()
    res.status(200).json(collectiveSunday)
  }

  createCollectiveSunday = async (req, res) => {
    const result = validateIntermediate(req.body)
    if (!result.success) {
      return res.status(400).json({ error: JSON.parse(result.error.message) })
    }
    const newCollectiveSunday = await this.intermediateModel.createCollectiveSunday({ input: result.data })
    res.status(201).json(newCollectiveSunday)
  }

  deleteCollectiveSunday = async (req, res) => {
    const { id } = req.params
    await this.intermediateModel.deleteCollectiveSunday({ id })
    res.status(200).json({ message: 'Deleted' })
  }
}
