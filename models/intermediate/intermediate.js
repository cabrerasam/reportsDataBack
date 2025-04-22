import { pool } from '../../helpers/dataBaseConect.js'

export class IntermediateModel {
  // INDIVIDUALS
  // INDIVIDUALS DIARIES
  static async getIndividualDiaries () {
    try {
      const result = await pool.query('SELECT id_individual, id_diary FROM individuals_diaries')
      return result.rows
    } catch (e) {
      throw new Error('Error to get information')
    }
  }

  static async createIndividualDiaries ({ input }) {
    const { idSubject, idReport } = input

    try {
      const result = await pool.query('SELECT insert_individuals_diaries($1, $2)', [idSubject, idReport])
      return result.rows
    } catch (e) {
      throw new Error('Error to send information')
    }
  }

  static async deleteIndividualDiaries ({ id }) {
    try {
      const result = await pool.query('DELETE FROM individuals_diaries WHERE id_diary = $1', [id])
      return result.rows
    } catch (e) {
      throw new Error('Error to delete information')
    }
  }

  // INDIVIDUALS MONITORING
  static async getIndividualMonitoring () {
    try {
      const result = await pool.query('SELECT id_individual, id_monitoring FROM individuals_monitoring')
      return result.rows
    } catch (e) {
      throw new Error('Error to get information')
    }
  }

  static async createIndividualMonitoring ({ input }) {
    const { idSubject, idReport } = input

    try {
      const result = await pool.query('SELECT insert_individuals_monitoring($1, $2)', [idSubject, idReport])
      return result.rows
    } catch (e) {
      throw new Error('Error to send information')
    }
  }

  static async deleteIndividualMonitoring ({ id }) {
    try {
      const result = await pool.query('DELETE FROM individuals_monitoring WHERE id_monitoring = $1', [id])
      return result.rows
    } catch (e) {
      throw new Error('Error to delete information')
    }
  }

  // INDIVIDUALS ALERT
  static async getIndividualAlert () {
    try {
      const result = await pool.query('SELECT id_individual, id_alert FROM individuals_alerts')
      return result.rows
    } catch (e) {
      throw new Error('Error to get information')
    }
  }

  static async createIndividualAlert ({ input }) {
    const { idSubject, idReport } = input

    try {
      const result = await pool.query('SELECT insert_individuals_alerts($1, $2)', [idSubject, idReport])
      return result.rows
    } catch (e) {
      throw new Error('Error to send information')
    }
  }

  static async deleteIndividualAlert ({ id }) {
    try {
      const result = await pool.query('DELETE FROM individuals_alerts WHERE id_alert = $1', [id])
      return result.rows
    } catch (e) {
      throw new Error('Error to delete information')
    }
  }

  // INDIVIDUALS WEEKLY
  static async getIndividualWeekly () {
    try {
      const result = await pool.query('SELECT id_individual, id_weekly FROM individuals_weekly')
      return result.rows
    } catch (e) {
      throw new Error('Error to get information')
    }
  }

  static async createIndividualWeekly ({ input }) {
    const { idSubject, idReport } = input

    try {
      const result = await pool.query('SELECT insert_individuals_weekly($1, $2)', [idSubject, idReport])
      return result.rows
    } catch (e) {
      throw new Error('Error to send information')
    }
  }

  static async deleteIndividualWeekly ({ id }) {
    try {
      const result = await pool.query('DELETE FROM individuals_weekly WHERE id_weekly = $1', [id])
      return result.rows
    } catch (e) {
      throw new Error('Error to delete information')
    }
  }

  // INDIVIDUALS NGO WEEKLY
  static async getIndividualNgoWeekly () {
    try {
      const result = await pool.query('SELECT id_individual, id_ngo_weekly FROM individuals_ngo_weekly')
      return result.rows
    } catch (e) {
      throw new Error('Error to get information')
    }
  }

  static async createIndividualNgoWeekly ({ input }) {
    const { idSubject, idReport } = input

    try {
      const result = await pool.query('SELECT insert_individuals_ngo_weekly($1, $2)', [idSubject, idReport])
      return result.rows
    } catch (e) {
      throw new Error('Error to send information')
    }
  }

  static async deleteIndividualNgoWeekly ({ id }) {
    try {
      const result = await pool.query('DELETE FROM individuals_ngo_weekly WHERE id_ngo_weekly = $1', [id])
      return result.rows
    } catch (e) {
      throw new Error('Error to delete information')
    }
  }

  // INDIVIDUALS SUNDAY
  static async getIndividualSunday () {
    try {
      const result = await pool.query('SELECT id_individual, id_sunday FROM individuals_sundays')
      return result.rows
    } catch (e) {
      throw new Error('Error to get information')
    }
  }

  static async createIndividualSunday ({ input }) {
    const { idSubject, idReport } = input

    try {
      const result = await pool.query('SELECT insert_individuals_sundays($1, $2)', [idSubject, idReport])
      return result.rows
    } catch (e) {
      throw new Error('Error to send information')
    }
  }

  static async deleteIndividualSunday ({ id }) {
    try {
      const result = await pool.query('DELETE FROM individuals_sundays WHERE id_sunday = $1', [id])
      return result.rows
    } catch (e) {
      throw new Error('Error to delete information')
    }
  }

  // COLLECTIVES
  // COLLECTIVES DIARIES
  static async getCollectiveDiaries () {
    try {
      const result = await pool.query('SELECT id_collective, id_diary FROM collectives_diaries')
      return result.rows
    } catch (e) {
      throw new Error('Error to get information')
    }
  }

  static async createCollectiveDiaries ({ input }) {
    const { idSubject, idReport } = input

    try {
      const result = await pool.query('SELECT insert_collectives_diaries($1, $2)', [idSubject, idReport])
      return result.rows
    } catch (e) {
      throw new Error('Error to send information')
    }
  }

  static async deleteCollectiveDiaries ({ id }) {
    try {
      const result = await pool.query('DELETE FROM collectives_diaries WHERE id_diary = $1', [id])
      return result.rows
    } catch (e) {
      throw new Error('Error to delete information')
    }
  }

  // COLLECTIVES MONITORING

  static async getCollectiveMonitoring () {
    try {
      const result = await pool.query('SELECT id_collective, id_monitoring FROM collectives_monitoring')
      return result.rows
    } catch (e) {
      throw new Error('Error to get information')
    }
  }

  static async createCollectiveMonitoring ({ input }) {
    const { idSubject, idReport } = input

    try {
      const result = await pool.query('SELECT insert_collectives_monitoring($1, $2)', [idSubject, idReport])
      return result.rows
    } catch (e) {
      throw new Error('Error to send information')
    }
  }

  static async deleteCollectiveMonitoring ({ id }) {
    try {
      const result = await pool.query('DELETE FROM collectives_monitoring WHERE id_monitoring = $1', [id])
      return result.rows
    } catch (e) {
      throw new Error('Error to delete information')
    }
  }

  // COLLECTIVES ALERT

  static async getCollectiveAlert () {
    try {
      const result = await pool.query('SELECT id_collective, id_alert FROM collectives_alerts')
      return result.rows
    } catch (e) {
      throw new Error('Error to get information')
    }
  }

  static async createCollectiveAlert ({ input }) {
    const { idSubject, idReport } = input

    try {
      const result = await pool.query('SELECT insert_collectives_alerts($1, $2)', [idSubject, idReport])
      return result.rows
    } catch (e) {
      throw new Error('Error to send information')
    }
  }

  static async deleteCollectiveAlert ({ id }) {
    try {
      const result = await pool.query('DELETE FROM collectives_alerts WHERE id_alert = $1', [id])
      return result.rows
    } catch (e) {
      throw new Error('Error to delete information')
    }
  }

  // COLLECTIVES WEEKLY

  static async getCollectiveWeekly () {
    try {
      const result = await pool.query('SELECT id_collective, id_weekly FROM collectives_weekly')
      return result.rows
    } catch (e) {
      throw new Error('Error to get information')
    }
  }

  static async createCollectiveWeekly ({ input }) {
    const { idSubject, idReport } = input

    try {
      const result = await pool.query('SELECT insert_collectives_weekly($1, $2)', [idSubject, idReport])
      return result.rows
    } catch (e) {
      throw new Error('Error to send information')
    }
  }

  static async deleteCollectiveWeekly ({ id }) {
    try {
      const result = await pool.query('DELETE FROM collectives_weekly WHERE id_weekly = $1', [id])
      return result.rows
    } catch (e) {
      throw new Error('Error to delete information')
    }
  }

  // COLLECTIVES NGO WEEKLY

  static async getCollectiveNgoWeekly () {
    try {
      const result = await pool.query('SELECT id_collective, id_ngo_weekly FROM collectives_ngo_weekly')
      return result.rows
    } catch (e) {
      throw new Error('Error to get information')
    }
  }

  static async createCollectiveNgoWeekly ({ input }) {
    const { idSubject, idReport } = input

    try {
      const result = await pool.query('SELECT insert_collectives_ngo_weekly($1, $2)', [idSubject, idReport])
      return result.rows
    } catch (e) {
      throw new Error('Error to send information')
    }
  }

  static async deleteCollectiveNgoWeekly ({ id }) {
    try {
      const result = await pool.query('DELETE FROM collectives_ngo_weekly WHERE id_ngo_weekly = $1', [id])
      return result.rows
    } catch (e) {
      throw new Error('Error to delete information')
    }
  }

  // COLLECTIVES SUNDAY

  static async getCollectiveSunday () {
    try {
      const result = await pool.query('SELECT id_collective, id_sunday FROM collectives_sundays')
      return result.rows
    } catch (e) {
      throw new Error('Error to get information')
    }
  }

  static async createCollectiveSunday ({ input }) {
    const { idSubject, idReport } = input

    try {
      const result = await pool.query('SELECT insert_collectives_sundays($1, $2)', [idSubject, idReport])
      return result.rows
    } catch (e) {
      throw new Error('Error to send information')
    }
  }

  static async deleteCollectiveSunday ({ id }) {
    try {
      const result = await pool.query('DELETE FROM collectives_sundays WHERE id_sunday = $1', [id])
      return result.rows
    } catch (e) {
      throw new Error('Error to delete information')
    }
  }
}
