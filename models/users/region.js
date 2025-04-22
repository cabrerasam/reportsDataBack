import { pool } from '../../helpers/dataBaseConect.js'

export class RegionModel {
  static async getAll () {
    try {
      const allRegions = await pool.query('SELECT id_region, create_region, name_region FROM regions')
      return allRegions.rows
    } catch (e) {
      throw new Error('Error to send information')
    }
  }

  static async getById ({ id }) {
    try {
      const region = await pool.query('SELECT id_region, name_region FROM regions WHERE id_region = $1', [id])
      return region.rows
    } catch (e) {
      throw new Error('Error to send information')
    }
  }

  static async create ({ input }) {
    const { nameRegion } = input

    const uuidResult = await pool.query('SELECT gen_random_uuid() uuid')
    const [{ uuid }] = uuidResult.rows

    const idSuperUserResult = await pool.query('SELECT id FROM super_user')
    const [{ id }] = idSuperUserResult.rows
    try {
      await pool.query('SELECT create_region($1, $2, $3)', [uuid, nameRegion, id])
    } catch (e) {
      throw new Error('Error to send information')
    }
    const result = await pool.query('SELECT id_region, name_region FROM regions WHERE id_region = $1', [uuid])
    return result.rows
  }

  static async update ({ idRegion, input }) {
    const { nameRegion } = input

    const idSuperUserResult = await pool.query('SELECT id FROM super_user')
    const [{ id }] = idSuperUserResult.rows
    try {
      await pool.query('SELECT update_region($1, $2, $3)', [idRegion, nameRegion, id])
    } catch (e) {
      throw new Error('Error to send information')
    }
    const result = await pool.query('SELECT id_region, name_region FROM regions WHERE id_region = $1', [idRegion])
    return result.rows
  }

  static async delete ({ id }) {
    try {
      await pool.query('SELECT delete_region($1)', [id])
    } catch (e) {
      throw new Error('Error to send information')
    }
  }
}
