import { pool } from '../../helpers/dataBaseConect.js'

export class AlertModel {
  static async getAll () {
    try {
      const alerts = await pool.query('SELECT id_alert, type_alert, priority_alert, confidentiality_alert, num_alert, date_alert, issue_alert, link_alert, id_user FROM alerts')
      return alerts.rows
    } catch (e) {
      throw new Error('Error to send information')
    }
  }

  static async getById ({ id }) {
    try {
      const alert = await pool.query('SELECT id_alert, type_alert, priority_alert, confidentiality_alert, num_alert, date_alert, issue_alert, link_alert, id_user FROM alerts WHERE id_alert = $1', [id])
      return alert.rows
    } catch (e) {
      throw new Error('Error to send information')
    }
  }

  static async create ({ input }) {
    const {
      typeAlert,
      priorityAlert,
      confidentialityAlert,
      numAlert,
      dateAlert,
      issueAlert,
      linkAlert,
      idUser
    } = input

    const uuidResult = await pool.query('SELECT gen_random_uuid() uuid')
    const [{ uuid }] = uuidResult.rows

    try {
      await pool.query('SELECT create_alert($1, $2, $3, $4, $5, $6, $7, $8, $9)', [uuid, typeAlert, priorityAlert, confidentialityAlert, numAlert, dateAlert, issueAlert, linkAlert, idUser])
    } catch (e) {
      console.error('error', e)
      throw new Error('Error to send information')
    }
    const result = await pool.query('SELECT id_alert, type_alert, priority_alert, confidentiality_alert, num_alert, date_alert, issue_alert, link_alert, id_user FROM alerts WHERE id_alert = $1', [uuid])
    return result.rows
  }

  static async update ({ idAlert, input }) {
    const {
      typeAlert,
      priorityAlert,
      confidentialityAlert,
      numAlert,
      dateAlert,
      issueAlert,
      linkAlert,
      idUser
    } = input

    try {
      await pool.query('SELECT update_alert($1, $2, $3, $4, $5, $6, $7, $8, $9)', [idAlert, typeAlert, priorityAlert, confidentialityAlert, numAlert, dateAlert, issueAlert, linkAlert, idUser])
    } catch (e) {
      throw new Error('Error to send information')
    }
    const result = await pool.query('SELECT id_alert, type_alert, priority_alert, confidentiality_alert, num_alert, date_alert, issue_alert, link_alert, id_user FROM alerts WHERE id_alert = $1', [idAlert])
    return result.rows
  }

  static async delete ({ id }) {
    try {
      await pool.query('SELECT delete_alert($1)', [id])
    } catch (e) {
      throw new Error('Error to send information')
    }
  }
}
