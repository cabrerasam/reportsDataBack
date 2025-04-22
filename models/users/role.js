import { pool } from '../../helpers/dataBaseConect.js'

export class RoleModel {
  static async getAll () {
    try {
      const allRoles = await pool.query('SELECT id_role, create_role, name_role FROM roles')
      return allRoles.rows
    } catch (e) {
      throw new Error('Error to send information')
    }
  }

  static async getById ({ id }) {
    try {
      const role = await pool.query('SELECT id_role, create_role, name_role FROM roles WHERE id_role = $1', [id])
      return role.rows
    } catch (e) {
      throw new Error('Error to send information')
    }
  }

  static async create ({ input }) {
    const { nameRole } = input

    const uuidResult = await pool.query('SELECT gen_random_uuid() uuid')
    const [{ uuid }] = uuidResult.rows

    const idSuperUserResult = await pool.query('SELECT id FROM super_user')
    const [{ id }] = idSuperUserResult.rows
    try {
      await pool.query('SELECT create_role($1, $2, $3)', [uuid, nameRole, id])
    } catch (e) {
      throw new Error('Error to send information')
    }
    const result = await pool.query('SELECT id_role, name_role FROM roles WHERE id_role = $1', [uuid])
    return result.rows
  }

  static async update ({ idRole, input }) {
    const { nameRole } = input

    const idSuperUserResult = await pool.query('SELECT id FROM super_user')
    const [{ id }] = idSuperUserResult.rows
    try {
      await pool.query('SELECT update_role($1, $2, $3)', [idRole, nameRole, id])
    } catch (e) {
      throw new Error('Error to send information')
    }
    const result = await pool.query('SELECT id_role, name_role FROM roles WHERE id_role = $1', [idRole])
    return result.rows
  }

  static async delete ({ id }) {
    try {
      await pool.query('SELECT delete_role($1)', [id])
    } catch (e) {
      throw new Error('Error to send information')
    }
  }
}
