import { pool } from '../../helpers/dataBaseConect.js'

export class AdminReportModel {
  static async getAll () {
    const result = await pool.query('SELECT id_audit_report, create_audit_report, action_audit_report, table_audit_report, last_audit_report, new_audit_report, id_user FROM audit_reports')
    return result.rows
  }

  static async getById ({ id }) {
    const result = await pool.query('SELECT id_audit_report, create_audit_report, action_audit_report, table_audit_report, last_audit_report, new_audit_report, id_user FROM audit_reports WHERE id_user = $1', [id])
    return result.rows
  }
}
