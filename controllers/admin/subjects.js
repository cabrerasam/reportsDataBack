export class AdminSubjectController {
  constructor ({ adminSubjectModel }) {
    this.adminSubjectModel = adminSubjectModel
  }

  getAll = async (req, res) => {
    const subjects = await this.adminSubjectModel.getAll()
    res.json(subjects)
  }

  getById = async (req, res) => {
    const { id } = req.params
    const subject = await this.adminSubjectModel.getById({ id })
    res.json(subject)
  }
}
