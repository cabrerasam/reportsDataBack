import { pool } from '../../helpers/dataBaseConect.js'

export class SundayModel {
  static async getAll () {
    try {
      const sundays = await pool.query('SELECT id_sunday, type_sunday, priority_sunday, confidentiality_sunday, num_sunday, date_sunday, issue_sunday, link_sunday, id_user FROM sundays')
      return sundays.rows
    } catch (e) {
      throw new Error('Error to send information')
    }
  }

  static async getById ({ id }) {
    try {
      const result = await pool.query('SELECT id_sunday, type_sunday, priority_sunday, confidentiality_sunday, num_sunday, date_sunday, issue_sunday, link_sunday, id_user FROM sundays WHERE id_sunday = $1', [id])
      return result.rows
    } catch (e) {
      throw new Error('Error to send information')
    }
  }

  static async create ({ input }) {
    const {
      typeSunday,
      prioritySunday,
      confidentialitySunday,
      numSunday,
      dateSunday,
      issueSunday,
      linkSunday,
      idUser
    } = input

    const uuidResult = await pool.query('SELECT gen_random_uuid() uuid')
    const [{ uuid }] = uuidResult.rows

    try {
      await pool.query('SELECT create_sunday($1, $2, $3, $4, $5, $6, $7, $8, $9)', [uuid, typeSunday, prioritySunday, confidentialitySunday, numSunday, dateSunday, issueSunday, linkSunday, idUser])
    } catch (e) {
      throw new Error('Error to send information')
    }
    const result = await pool.query('SELECT id_sunday, type_sunday, priority_sunday, confidentiality_sunday, num_sunday, date_sunday, issue_sunday, link_sunday, id_user FROM sundays WHERE id_sunday = $1', [uuid])
    return result.rows
  }

  static async update ({ idSunday, input }) {
    const {
      typeSunday,
      prioritySunday,
      confidentialitySunday,
      numSunday,
      dateSunday,
      issueSunday,
      linkSunday,
      idUser
    } = input

    try {
      await pool.query('SELECT update_sunday($1, $2, $3, $4, $5, $6, $7, $8, $9)', [idSunday, typeSunday, prioritySunday, confidentialitySunday, numSunday, dateSunday, issueSunday, linkSunday, idUser])
    } catch (e) {
      throw new Error('Error to send information')
    }
    const result = await pool.query('SELECT id_sunday, type_sunday, priority_sunday, confidentiality_sunday, num_sunday, date_sunday, issue_sunday, link_sunday, id_user FROM sundays WHERE id_sunday = $1', [idSunday])
    return result.rows
  }

  static async delete ({ id }) {
    try {
      await pool.query('SELECT delete_sunday($1)', [id])
    } catch (e) {
      throw new Error('Error to send information')
    }
  }
}
