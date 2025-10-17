import { pool } from '../../helpers/dataBaseConect.js'

export class ReportModel {
  static async getAll () {
    try {
      const Report = await pool.query('SELECT id_report, area_report, type_report, priority_report, confidentiality_report, num_report, date_report, link_report, id_user FROM reports')
      return Report.rows
    } catch (e) {
      throw new Error('Error to send information')
    }
  }

  static async getById ({ id }) {
    try {
      const result = await pool.query('SELECT id_report, area_report, type_report, priority_report, confidentiality_report, num_report, date_report, link_report, id_user FROM reports WHERE id_report = $1', [id])
      return result.rows
    } catch (e) {
      throw new Error('Error to send information')
    }
  }

  static async create ({ input }) {
    const {
      areaReport,
      typeReport,
      priorityReport,
      confidentialityReport,
      numReport,
      dateReport,
      linkReport,
      idUser
    } = input

    const uuidResult = await pool.query('SELECT gen_random_uuid() uuid')
    const [{ uuid }] = uuidResult.rows

    try {
      const result = await pool.query('SELECT create_report($1, $2, $3, $4, $5, $6, $7, $8, $9)', [uuid, areaReport, typeReport, priorityReport, confidentialityReport, numReport, dateReport, linkReport, idUser])
      return result.rows
    } catch (e) {
      throw new Error('Error to send information')
    }
  }

  static async update ({ idReport, input }) {
    const {
      areaReport,
      typeReport,
      priorityReport,
      confidentialityReport,
      numReport,
      dateReport,
      linkReport,
      idUser
    } = input

    try {
      await pool.query('SELECT update_report($1, $2, $3, $4, $5, $6, $7, $8, $9)', [idReport, areaReport, typeReport, priorityReport, confidentialityReport, numReport, dateReport, linkReport, idUser])
    } catch (e) {
      throw new Error('Error to send information')
    }
    const result = await pool.query('SELECT id_report, area_report, type_report, priority_report, confidentiality_report, num_report, date_report, link_report, id_user FROM Report WHERE id_report = $1', [idReport])
    return result.rows
  }

  static async delete ({ id }) {
    try {
      await pool.query('SELECT delete_report($1)', [id])
    } catch (e) {
      throw new Error('Error to send information')
    }
  }
}
