import { validateSubject } from '../../schemas/subjects/subjects.js'

export class SubjectController {
  constructor ({ subjectModel }) {
    this.subjectModel = subjectModel
  }

  getSubject = async (req, res) => {
    const subjectAssociation = await this.subjectModel.getSubject()
    res.status(200).json(subjectAssociation)
  }

  createSubject = async (req, res) => {
    const result = validateSubject(req.body)
    if (!result.success) {
      return res.status(400).json({ error: JSON.parse(result.error.message) })
    }
    const newSubjectAssociation = await this.subjectModel.createSubject({ input: result.data })
    res.status(201).json(newSubjectAssociation)
  }

  deleteSubject = async (req, res) => {
    const { id } = req.params
    await this.subjectModel.deleteSubject({ id })
    res.status(200).json({ message: 'Deleted' })
  }
}
