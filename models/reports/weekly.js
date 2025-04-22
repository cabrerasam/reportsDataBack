import { pool } from '../../helpers/dataBaseConect.js'

export class WeeklyModel {
  static async getAll () {
    try {
      const weekly = await pool.query('SELECT id_weekly, num_weekly, date_weekly, link_weekly, id_user FROM weekly')
      return weekly.rows
    } catch (e) {
      throw new Error('Error to send information')
    }
  }

  static async getById ({ id }) {
    try {
      const result = await pool.query('SELECT id_weekly, num_weekly, date_weekly, link_weekly, id_user FROM weekly WHERE id_weekly = $1', [id])
      return result.rows
    } catch (e) {
      throw new Error('Error to send information')
    }
  }

  static async create ({ input }) {
    const {
      numWeekly,
      dateWeekly,
      linkWeekly,
      idUser
    } = input

    const uuidResult = await pool.query('SELECT gen_random_uuid() uuid')
    const [{ uuid }] = uuidResult.rows

    try {
      await pool.query('SELECT create_weekly($1, $2, $3, $4, $5)', [uuid, numWeekly, dateWeekly, linkWeekly, idUser])
    } catch (e) {
      console.error('error', e)
      throw new Error('Error to send information')
    }
    const result = await pool.query('SELECT id_weekly, num_weekly, date_weekly, link_weekly, id_user FROM weekly WHERE id_weekly = $1', [uuid])
    return result.rows
  }

  static async update ({ idWeekly, input }) {
    const {
      numWeekly,
      dateWeekly,
      linkWeekly,
      idUser
    } = input

    try {
      await pool.query('SELECT update_weekly($1, $2, $3, $4, $5)', [idWeekly, numWeekly, dateWeekly, linkWeekly, idUser])
    } catch (e) {
      throw new Error('Error to send information')
    }
    const result = await pool.query('SELECT id_weekly, num_weekly, date_weekly, link_weekly, id_user FROM weekly WHERE id_weekly = $1', [idWeekly])
    return result.rows
  }

  static async delete ({ id }) {
    try {
      await pool.query('SELECT delete_weekly($1)', [id])
    } catch (e) {
      throw new Error('Error to send information')
    }
  }
}
