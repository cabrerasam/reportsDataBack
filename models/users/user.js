import { pool } from '../../helpers/dataBaseConect.js'

export class UserModel {
  static async getAll () {
    try {
      const allUsers = await pool.query('SELECT id_user, user_name, user_nick, id_area, id_role, id_region, id_super_user FROM users')
      return allUsers.rows
    } catch (e) {
      throw new Error('Error to send information')
    }
  }

  static async getById ({ id }) {
    try {
      const user = await pool.query('SELECT id_user, user_name, user_nick, id_area, id_role, id_region, id_super_user FROM users WHERE id_user = $1', [id])
      return user.rows
    } catch (e) {
      throw new Error('Error to send information')
    }
  }

  static async create ({ input }) {
    const {
      userName,
      userNick,
      passwordUser,
      idArea,
      idRole,
      idRegion
    } = input

    const uuidResult = await pool.query('SELECT gen_random_uuid() uuid')
    const [{ uuid }] = uuidResult.rows

    const idSuperUserResult = await pool.query('SELECT id FROM super_user')
    const [{ id }] = idSuperUserResult.rows

    try {
      await pool.query('SELECT create_user($1, $2, $3, $4, $5, $6, $7, $8)', [uuid, userName, userNick, passwordUser, idArea, idRole, idRegion, id])
    } catch (e) {
      throw new Error('Error to send information')
    }
    const result = await pool.query('SELECT id_user, user_name, user_nick, id_area, id_role, id_region, id_super_user FROM users WHERE id_user = $1', [uuid])
    return result.rows
  }

  static async update ({ idUser, input }) {
    const {
      userName,
      userNick,
      passwordUser,
      idArea,
      idRole,
      idRegion
    } = input

    const idSuperUserResult = await pool.query('SELECT id FROM super_user')
    const [{ id }] = idSuperUserResult.rows

    try {
      await pool.query('SELECT update_user($1, $2, $3, $4, $5, $6, $7, $8)', [idUser, userName, userNick, passwordUser, idArea, idRole, idRegion, id])
    } catch (e) {
      throw new Error('Error to send information')
    }
    const result = await pool.query('SELECT id_user, user_name, user_nick, id_area, id_role, id_region, id_super_user FROM users WHERE id_user = $1', [idUser])
    return result.rows
  }

  static async delete ({ id }) {
    try {
      await pool.query('SELECT delete_user($1)', [id])
    } catch (e) {
      console.error(e)
      throw new Error('Error to send information')
    }
  }
}
