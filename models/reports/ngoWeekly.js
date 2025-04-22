import { pool } from '../../helpers/dataBaseConect.js'

export class NgoWeeklyModel {
  static async getAll () {
    try {
      const ngoWeekly = await pool.query('SELECT id_ngo_weekly, num_ngo_weekly, date_ngo_weekly, link_ngo_weekly, id_user FROM ngo_weekly')
      return ngoWeekly.rows
    } catch (e) {
      console.log('error', e)
      throw new Error('Error to send information')
    }
  }

  static async getById ({ id }) {
    try {
      const result = await pool.query('SELECT id_ngo_weekly, num_ngo_weekly, date_ngo_weekly, link_ngo_weekly, id_user FROM ngo_weekly WHERE id_ngo_weekly = $1', [id])
      return result.rows
    } catch (e) {
      throw new Error('Error to send information')
    }
  }

  static async create ({ input }) {
    const {
      numNgoWeekly,
      dateNgoWeekly,
      linkNgoWeekly,
      idUser
    } = input

    const uuidResult = await pool.query('SELECT gen_random_uuid() uuid')
    const [{ uuid }] = uuidResult.rows

    try {
      await pool.query('SELECT create_ngo_weekly($1, $2, $3, $4, $5)', [uuid, numNgoWeekly, dateNgoWeekly, linkNgoWeekly, idUser])
    } catch (e) {
      console.error('error', e)
      throw new Error('Error to send information')
    }
    const result = await pool.query('SELECT id_ngo_weekly, num_ngo_weekly, date_ngo_weekly, link_ngo_weekly, id_user FROM ngo_weekly WHERE id_ngo_weekly = $1', [uuid])
    return result.rows
  }

  static async update ({ idNgoWeekly, input }) {
    const {
      numNgoWeekly,
      dateNgoWeekly,
      linkNgoWeekly,
      idUser
    } = input

    try {
      await pool.query('SELECT update_ngo_weekly($1, $2, $3, $4, $5)', [idNgoWeekly, numNgoWeekly, dateNgoWeekly, linkNgoWeekly, idUser])
    } catch (e) {
      console.error('error', e)
      throw new Error('Error to send information')
    }
    const result = await pool.query('SELECT id_ngo_weekly, num_ngo_weekly, date_ngo_weekly, link_ngo_weekly, id_user FROM ngo_weekly WHERE id_ngo_weekly = $1', [idNgoWeekly])
    return result.rows
  }

  static async delete ({ id }) {
    try {
      await pool.query('SELECT delete_ngo_weekly($1)', [id])
    } catch (e) {
      throw new Error('Error to send information')
    }
  }
}
