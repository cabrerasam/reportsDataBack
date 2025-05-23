import { pool } from '../../helpers/dataBaseConect.js'

export class SpecialModel {
  static async getAll () {
    try {
      const specials = await pool.query('SELECT id_special, type_special, priority_special, confidentiality_special, num_special, date_special, link_special, id_user FROM specials')
      return specials.rows
    } catch (e) {
      throw new Error('Error to send information')
    }
  }

  static async getById ({ id }) {
    try {
      const result = await pool.query('SELECT id_special, type_special, priority_special, confidentiality_special, num_special, date_special, link_special, id_user FROM specials WHERE id_special = $1', [id])
      return result.rows
    } catch (e) {
      throw new Error('Error to send information')
    }
  }

  static async create ({ input }) {
    const {
      typeSpecial,
      prioritySpecial,
      confidentialitySpecial,
      numSpecial,
      dateSpecial,
      linkSpecial,
      idUser
    } = input

    const uuidResult = await pool.query('SELECT gen_random_uuid() uuid')
    const [{ uuid }] = uuidResult.rows

    try {
      await pool.query('SELECT create_special($1, $2, $3, $4, $5, $6, $7, $8, $9)', [uuid, typeSpecial, prioritySpecial, confidentialitySpecial, numSpecial, dateSpecial, linkSpecial, idUser])
    } catch (e) {
      throw new Error('Error to send information')
    }
    const result = await pool.query('SELECT id_special, type_special, priority_special, confidentiality_special, num_special, date_special, link_special, id_user FROM specials WHERE id_special = $1', [uuid])
    return result.rows
  }

  static async update ({ idSpecial, input }) {
    const {
      typeSpecial,
      prioritySpecial,
      confidentialitySpecial,
      numSpecial,
      dateSpecial,
      issueSpecial,
      linkSpecial,
      idUser
    } = input

    try {
      await pool.query('SELECT update_special($1, $2, $3, $4, $5, $6, $7, $8, $9)', [idSpecial, typeSpecial, prioritySpecial, confidentialitySpecial, numSpecial, dateSpecial, issueSpecial, linkSpecial, idUser])
    } catch (e) {
      throw new Error('Error to send information')
    }
    const result = await pool.query('SELECT id_special, type_special, priority_special, confidentiality_special, num_special, date_special, link_special, id_user FROM specials WHERE id_special = $1', [idSpecial])
    return result.rows
  }

  static async delete ({ id }) {
    try {
      await pool.query('SELECT delete_special($1)', [id])
    } catch (e) {
      throw new Error('Error to send information')
    }
  }
}
