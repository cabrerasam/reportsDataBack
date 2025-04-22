import { pool } from '../../helpers/dataBaseConect.js'

export class AssociationModel {
  static async getAll () {
    try {
      const allAssociations = await pool.query('SELECT id_association, association, id_user FROM associations')
      return allAssociations.rows
    } catch (e) {
      throw new Error('Error to send information')
    }
  }

  static async getById ({ id }) {
    try {
      const association = await pool.query('SELECT id_association, association, id_user FROM associations WHERE id_association = $1', [id])
      return association.rows
    } catch (e) {
      throw new Error('Error to send information')
    }
  }

  static async create ({ input }) {
    const {
      association,
      idUser
    } = input

    const uuidResult = await pool.query('SELECT gen_random_uuid() uuid')
    const [{ uuid }] = uuidResult.rows
    try {
      await pool.query('SELECT create_association($1, $2, $3)', [uuid, association, idUser])
    } catch (e) {
      throw new Error('Error to send information')
    }
    const result = await pool.query('SELECT id_association, association, id_user FROM associations WHERE id_association = $1', [uuid])
    return result.rows
  }

  static async update ({ idAssociation, input }) {
    const {
      association,
      idUser
    } = input

    try {
      await pool.query('SELECT update_association($1, $2, $3)', [idAssociation, association, idUser])
    } catch (e) {
      throw new Error('Error to send information')
    }
    const result = await pool.query('SELECT id_association, association, id_user FROM associations WHERE id_association = $1', [idAssociation])
    return result.rows
  }

  static async delete ({ id }) {
    try {
      await pool.query('SELECT delete_association($1)', [id])
    } catch (e) {
      throw new Error('Error to send information')
    }
  }
}
