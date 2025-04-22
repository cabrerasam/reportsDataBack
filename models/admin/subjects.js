import { pool } from '../../helpers/dataBaseConect.js'

export class AdminSubjectModel {
  static async getAll () {
    const result = await pool.query('SELECT id_audit_subject, create_audit_subject, action_audit_subject, table_audit_subject, last_audit_subject, new_audit_subject, id_user FROM audit_subjects')
    return result.rows
  }

  static async getById ({ id }) {
    const result = await pool.query('SELECT id_audit_subject, create_audit_subject, action_audit_subject, table_audit_subject, last_audit_subject, new_audit_subject, id_user FROM audit_subjects WHERE id_user = $1', [id])
    return result.rows
  }
}
