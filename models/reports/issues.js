import { pool } from '../../helpers/dataBaseConect.js'

export class IssueModel {
  static async getAll () {
    try {
      const Issues = await pool.query('SELECT id_issues_report, issue_report, tags_issues_report FROM issues_report')
      return Issues.rows
    } catch (e) {
      throw new Error('Error to send information')
    }
  }

  static async create ({ input }) {
    // Si input es un array, procesar múltiples issues
    if (Array.isArray(input)) {
      const results = []
      for (const issue of input) {
        const {
          issueReport,
          tagsIssuesReport,
          idReport
        } = issue

        const uuidResult = await pool.query('SELECT gen_random_uuid() uuid')
        const [{ uuid }] = uuidResult.rows

        try {
          const result = await pool.query('SELECT create_issues_report($1, $2, $3, $4)', [uuid, issueReport, tagsIssuesReport, idReport])
          results.push(result.rows[0])
        } catch (e) {
          throw new Error(`Error creating issue: ${e.message}`)
        }
      }
      return results
    } else {
      // Mantener compatibilidad con objeto único
      const {
        issueReport,
        tags,
        idUser
      } = input

      const uuidResult = await pool.query('SELECT gen_random_uuid() uuid')
      const [{ uuid }] = uuidResult.rows

      try {
        const result = await pool.query('SELECT create_issues_report($1, $2, $3, $4)', [uuid, issueReport, tags, idUser])
        return result.rows
      } catch (e) {
        throw new Error('Error to send information')
      }
    }
  }

  static async update ({ idReport, input }) {
    const {
      issueReport,
      tags,
      idUser
    } = input
    try {
      await pool.query('SELECT update_issues_report($1, $2, $3, $4)', [idReport, issueReport, tags, idUser])
    } catch (e) {
      throw new Error('Error to send information')
    }
  }

  static async delete ({ idReport }) {
    try {
      await pool.query('SELECT delete_issues_report($1)', [idReport])
    } catch (e) {
      throw new Error('Error to send information')
    }
  }
}
