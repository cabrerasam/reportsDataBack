import { pool } from '../../helpers/dataBaseConect.js'

export class SpeachModel {
  static async getAll () {
    try {
      const allSpeachs = await pool.query('SELECT id_speach, title_speach, speach, date_speach, id_individual, id_user FROM speachs')
      return allSpeachs.rows
    } catch (e) {
      throw new Error('Error to send information')
    }
  }

  static async getById ({ id }) {
    try {
      const speach = await pool.query('SELECT id_speach, title_speach, speach, date_speach, id_individual, id_user FROM speachs WHERE id_speach = $1', [id])
      return speach.rows
    } catch (e) {
      throw new Error('Error to send information')
    }
  }

  static async create ({ input }) {
    const {
      titleSpeach,
      speach,
      dateSpeach,
      idIndividual,
      idUser
    } = input

    const uuidResult = await pool.query('SELECT gen_random_uuid() uuid')
    const [{ uuid }] = uuidResult.rows

    try {
      await pool.query('SELECT create_speach($1, $2, $3, $4, $5, $6)', [uuid, titleSpeach, speach, dateSpeach, idIndividual, idUser])
    } catch (e) {
      throw new Error('Error to send information')
    }
    const result = await pool.query('SELECT id_speach, title_speach, speach, date_speach, id_individual, id_user FROM speachs WHERE id_speach = $1', [uuid])
    return result.rows
  }

  static async update ({ idSpeach, input }) {
    const {
      titleSpeach,
      speach,
      dateSpeach,
      idIndividual,
      idUser
    } = input

    try {
      await pool.query('SELECT update_speach($1, $2, $3, $4, $5, $6)', [idSpeach, titleSpeach, speach, dateSpeach, idIndividual, idUser])
    } catch (e) {
      throw new Error('Error to send information')
    }
    const result = await pool.query('SELECT id_speach, title_speach, speach, date_speach, id_individual, id_user FROM speachs WHERE id_speach = $1', [idSpeach])
    return result.rows
  }

  static async delete ({ id }) {
    try {
      await pool.query('SELECT delete_speach($1)', [id])
    } catch (e) {
      throw new Error('Error to send information')
    }
  }
}
