import { pool } from '../../helpers/dataBaseConect.js'

export class DiaryModel {
  static async getAll () {
    try {
      const diaries = await pool.query('SELECT id_diary, type_diary, priority_diary, confidentiality_diary, num_diary, date_diary, issue_diary, link_diary, id_user FROM diaries')
      return diaries.rows
    } catch (e) {
      throw new Error('Error to send information')
    }
  }

  static async getById ({ id }) {
    try {
      const result = await pool.query('SELECT id_diary, type_diary, priority_diary, confidentiality_diary, num_diary, date_diary, issue_diary, link_diary, id_user FROM diaries WHERE id_diary = $1', [id])
      return result.rows
    } catch (e) {
      throw new Error('Error to send information')
    }
  }

  static async create ({ input }) {
    const {
      typeDiary,
      priorityDiary,
      confidentialityDiary,
      numDiary,
      dateDiary,
      issueDiary,
      linkDiary,
      idUser
    } = input

    const uuidResult = await pool.query('SELECT gen_random_uuid() uuid')
    const [{ uuid }] = uuidResult.rows

    try {
      await pool.query('SELECT create_diary($1, $2, $3, $4, $5, $6, $7, $8, $9)', [uuid, typeDiary, priorityDiary, confidentialityDiary, numDiary, dateDiary, issueDiary, linkDiary, idUser])
    } catch (e) {
      throw new Error('Error to send information')
    }
    const result = await pool.query('SELECT id_diary, type_diary, priority_diary, confidentiality_diary, num_diary, date_diary, issue_diary, link_diary, id_user FROM diaries WHERE id_diary = $1', [uuid])
    return result.rows
  }

  static async update ({ idDiary, input }) {
    const {
      typeDiary,
      priorityDiary,
      confidentialityDiary,
      numDiary,
      dateDiary,
      issueDiary,
      linkDiary,
      idUser
    } = input

    try {
      await pool.query('SELECT update_diary($1, $2, $3, $4, $5, $6, $7, $8, $9)', [idDiary, typeDiary, priorityDiary, confidentialityDiary, numDiary, dateDiary, issueDiary, linkDiary, idUser])
    } catch (e) {
      throw new Error('Error to send information')
    }
    const result = await pool.query('SELECT id_diary, type_diary, priority_diary, confidentiality_diary, num_diary, date_diary, issue_diary, link_diary, id_user FROM diaries WHERE id_diary = $1', [idDiary])
    return result.rows
  }

  static async delete ({ id }) {
    try {
      await pool.query('SELECT delete_diary($1)', [id])
    } catch (e) {
      throw new Error('Error to send information')
    }
  }
}
