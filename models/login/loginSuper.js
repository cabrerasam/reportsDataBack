import { pool } from '../../helpers/dataBaseConect.js'

export class LoginSuperModel {
  static async login ({ input }) {
    const { userNick, userPassword } = input

    try {
      const result = await pool.query('SELECT validate_super_user($1, $2)', [userNick, userPassword])
      return result.rows
    } catch (e) {
      throw new Error('Error to send information')
    }
  }
}
