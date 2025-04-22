import { pool } from '../../helpers/dataBaseConect.js'

export class WorkModel {
  static async getAll () {
    try {
      const allWorks = await pool.query('SELECT id_work, work, id_individual, id_user FROM works')
      return allWorks.rows
    } catch (e) {
      throw new Error('Error to send information')
    }
  }

  static async create ({ input }) {
    const {
      work,
      idIndividual,
      idUser
    } = input

    const uuidResult = await pool.query('SELECT gen_random_uuid() uuid')
    const [{ uuid }] = uuidResult.rows

    try {
      await pool.query('SELECT create_work($1, $2, $3, $4)', [uuid, work, idIndividual, idUser])
    } catch (e) {
      throw new Error('Error to send information')
    }
    const result = await pool.query('SELECT id_work, work, id_individual, id_user FROM works WHERE id_work = $1', [uuid])
    return result.rows
  }

  static async update ({ idWork, input }) {
    const {
      work,
      idIndividual,
      idUser
    } = input

    try {
      await pool.query('SELECT update_work($1, $2, $3, $4)', [idWork, work, idIndividual, idUser])
    } catch (e) {
      throw new Error('Error to send information')
    }
    const result = await pool.query('SELECT id_work, work, id_individual, id_user FROM works WHERE id_work = $1', [idWork])
    return result.rows
  }

  static async delete ({ id }) {
    try {
      await pool.query('SELECT delete_work($1)', [id])
    } catch (e) {
      throw new Error('Error to send information')
    }
  }
}
