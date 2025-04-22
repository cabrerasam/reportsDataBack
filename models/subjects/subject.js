import { pool } from '../../helpers/dataBaseConect.js'

export class SubjectModel {
  static async getSubject () {
    try {
      const result = await pool.query('SELECT id_subject, id_association FROM subjects_associations')
      return result.rows
    } catch (e) {
      throw new Error('Error to get information')
    }
  }

  static async createSubject ({ input }) {
    const { idSubject, idAssociation } = input

    try {
      const result = await pool.query('SELECT insert_subjects_associations($1, $2)', [idSubject, idAssociation])
      return result.rows
    } catch (e) {
      throw new Error('Error to send information')
    }
  }

  static async deleteSubject ({ id }) {
    try {
      const result = await pool.query('DELETE FROM subjects_associations WHERE id_subject = $1', [id])
      return result.rows
    } catch (e) {
      throw new Error('Error to delete information')
    }
  }
}
