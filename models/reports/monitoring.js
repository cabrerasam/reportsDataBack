import { pool } from '../../helpers/dataBaseConect.js'

export class MonitoringModel {
  static async getAll () {
    try {
      const monitoring = await pool.query('SELECT id_monitoring, type_monitoring, priority_monitoring, confidentiality_monitoring, num_monitoring, date_monitoring, link_monitoring, id_user FROM monitoring')
      return monitoring.rows
    } catch (e) {
      throw new Error('Error to send information')
    }
  }

  static async getById ({ id }) {
    try {
      const result = await pool.query('SELECT id_monitoring, type_monitoring, priority_monitoring, confidentiality_monitoring, num_monitoring, date_monitoring, link_monitoring, id_user FROM monitoring WHERE id_monitoring = $1', [id])
      return result.rows
    } catch (e) {
      throw new Error('Error to send information')
    }
  }

  static async create ({ input }) {
    const {
      typeMonitoring,
      priorityMonitoring,
      confidentialityMonitoring,
      numMonitoring,
      dateMonitoring,
      linkMonitoring,
      idUser
    } = input

    const uuidResult = await pool.query('SELECT gen_random_uuid() uuid')
    const [{ uuid }] = uuidResult.rows

    try {
      const result = await pool.query('SELECT create_monitoring($1, $2, $3, $4, $5, $6, $7, $8)', [uuid, typeMonitoring, priorityMonitoring, confidentialityMonitoring, numMonitoring, dateMonitoring, linkMonitoring, idUser])
      return result.rows
    } catch (e) {
      console.error('error', e)
      throw new Error('Error to send information')
    }
  }

  static async update ({ idMonitoring, input }) {
    const {
      typeMonitoring,
      priorityMonitoring,
      confidentialityMonitoring,
      numMonitoring,
      dateMonitoring,
      linkMonitoring,
      idUser
    } = input

    try {
      await pool.query('SELECT update_monitoring($1, $2, $3, $4, $5, $6, $7, $8)', [idMonitoring, typeMonitoring, priorityMonitoring, confidentialityMonitoring, numMonitoring, dateMonitoring, linkMonitoring, idUser])
    } catch (e) {
      throw new Error('Error to send information')
    }
    const result = await pool.query('SELECT id_monitoring, type_monitoring, priority_monitoring, confidentiality_monitoring, num_monitoring, date_monitoring, link_monitoring, id_user FROM monitoring WHERE id_monitoring = $1', [idMonitoring])
    return result.rows
  }

  static async delete ({ id }) {
    try {
      await pool.query('SELECT delete_monitoring($1)', [id])
    } catch (e) {
      throw new Error('Error to send information')
    }
  }
}
