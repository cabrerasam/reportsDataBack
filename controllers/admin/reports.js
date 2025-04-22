export class AdminReportController {
  constructor ({ adminReportModel }) {
    this.adminReportModel = adminReportModel
  }

  getAll = async (req, res) => {
    const reports = await this.adminReportModel.getAll()
    res.json(reports)
  }

  getById = async (req, res) => {
    const { id } = req.params
    const report = await this.adminReportModel.getById({ id })
    res.json(report)
  }
}
