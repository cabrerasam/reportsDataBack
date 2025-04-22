import { pool } from '../../helpers/dataBaseConect.js'

export class CollectiveModel {
  static async getAll () {
    try {
      const allCollectives = await pool.query('SELECT id_collective, name_collective, logo_collective, origin_collective, type_collective, headquarters_collective, description_collective, mission_collective, vision_collective, network_collective, inf_area_collective, financing_collective, personal_collective, id_user FROM collectives')
      return allCollectives.rows
    } catch (e) {
      throw new Error('Error to send information')
    }
  }

  static async getById ({ id }) {
    try {
      const collective = await pool.query('SELECT id_collective, name_collective, logo_collective, origin_collective, type_collective, headquarters_collective, description_collective, mission_collective, vision_collective, network_collective, inf_area_collective, financing_collective, personal_collective, id_user FROM collectives WHERE id_collective = $1', [id])
      return collective.rows
    } catch (e) {
      throw new Error('Error to send information')
    }
  }

  static async create ({ input }) {
    const {
      nameCollective,
      logoCollective,
      originCollective,
      typeCollective,
      headquartersCollective,
      descriptionCollective,
      missionCollective,
      visionCollective,
      networkCollective,
      infAreaCollective,
      financingCollective,
      personalCollective,
      idUser
    } = input

    const uuidResult = await pool.query('SELECT gen_random_uuid() uuid')
    const [{ uuid }] = uuidResult.rows

    try {
      await pool.query('SELECT create_collective($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)', [uuid, nameCollective, logoCollective, originCollective, typeCollective, headquartersCollective, descriptionCollective, missionCollective, visionCollective, networkCollective, infAreaCollective, financingCollective, personalCollective, idUser])
    } catch (e) {
      throw new Error('Error to send information')
    }

    const result = await pool.query('SELECT id_collective, name_collective, logo_collective, origin_collective, type_collective, headquarters_collective, description_collective, mission_collective, vision_collective, network_collective, inf_area_collective, financing_collective, personal_collective, id_user FROM collectives WHERE id_collective = $1', [uuid])
    return result.rows
  }

  static async update ({ idCollective, input }) {
    const {
      nameCollective,
      logoCollective,
      originCollective,
      typeCollective,
      headquartersCollective,
      descriptionCollective,
      missionCollective,
      visionCollective,
      networkCollective,
      infAreaCollective,
      financingCollective,
      personalCollective,
      idUser
    } = input

    try {
      await pool.query('SELECT update_collective($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)', [idCollective, nameCollective, logoCollective, originCollective, typeCollective, headquartersCollective, descriptionCollective, missionCollective, visionCollective, networkCollective, infAreaCollective, financingCollective, personalCollective, idUser])
    } catch (e) {
      throw new Error('Error to send information')
    }

    const result = await pool.query('SELECT id_collective, name_collective, logo_collective, origin_collective, type_collective, headquarters_collective, description_collective, mission_collective, vision_collective, network_collective, inf_area_collective, financing_collective, personal_collective, id_user FROM collectives WHERE id_collective = $1', [idCollective])
    return result.rows
  }

  static async delete ({ id }) {
    try {
      await pool.query('SELECT delete_collective($1)', [id])
    } catch (e) {
      throw new Error('Error to send information')
    }
  }
}
