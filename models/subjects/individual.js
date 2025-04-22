import { pool } from '../../helpers/dataBaseConect.js'

export class IndividualModel {
  static async getAll () {
    try {
      const allIndividuals = await pool.query('SELECT id_individual, name_individual, nationality_individual, birthdate_individual, place_birth_individual, gender_individual, marital_status_individual, photo_individual, party_individual, work_individual, education_individual, email_individual, phone_individual, networks_individual, id_user FROM individuals')
      return allIndividuals.rows
    } catch (e) {
      throw new Error('Error to send information')
    }
  }

  static async getById ({ id }) {
    try {
      const individual = await pool.query('SELECT id_individual, name_individual, nationality_individual, birthdate_individual, place_birth_individual, gender_individual, marital_status_individual, photo_individual, party_individual, work_individual, education_individual, email_individual, phone_individual, networks_individual, id_user FROM individuals WHERE id_individual = $1', [id])
      return individual.rows
    } catch (e) {
      throw new Error('Error to send information')
    }
  }

  static async create ({ input }) {
    const {
      nameIndividual,
      nationalityIndividual,
      birthDateIndividual,
      placeBirthIndividual,
      genderIndividual,
      maritalIndividual,
      photoIndividual,
      partyIndividual,
      workIndividual,
      educationIndividual,
      emailIndividual,
      phoneIndividual,
      networksIndividual,
      idUser
    } = input

    const uuidResult = await pool.query('SELECT gen_random_uuid() uuid')
    const [{ uuid }] = uuidResult.rows

    try {
      await pool.query('SELECT create_individual($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15)', [uuid, nameIndividual, nationalityIndividual, birthDateIndividual, placeBirthIndividual, genderIndividual, maritalIndividual, photoIndividual, partyIndividual, workIndividual, educationIndividual, emailIndividual, phoneIndividual, networksIndividual, idUser])
    } catch (e) {
      throw new Error('Error to send information')
    }
    const result = await pool.query('SELECT id_individual, name_individual, nationality_individual, birthdate_individual, place_birth_individual, gender_individual, marital_status_individual, photo_individual, party_individual, work_individual, education_individual, email_individual, phone_individual, networks_individual, id_user FROM individuals WHERE id_individual = $1', [uuid])
    return result.rows
  }

  static async update ({ idIndividual, input }) {
    const {
      nameIndividual,
      nationalityIndividual,
      birthDateIndividual,
      placeBirthIndividual,
      genderIndividual,
      maritalIndividual,
      photoIndividual,
      partyIndividual,
      workIndividual,
      educationIndividual,
      emailIndividual,
      phoneIndividual,
      networksIndividual,
      idUser
    } = input

    try {
      await pool.query('SELECT update_individual($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15)', [idIndividual, nameIndividual, nationalityIndividual, birthDateIndividual, placeBirthIndividual, genderIndividual, maritalIndividual, photoIndividual, partyIndividual, workIndividual, educationIndividual, emailIndividual, phoneIndividual, networksIndividual, idUser])
    } catch (e) {
      console.error(e)
      throw new Error('Error to send information')
    }
    const result = await pool.query('SELECT id_individual, name_individual, nationality_individual, birthdate_individual, place_birth_individual, gender_individual, marital_status_individual, photo_individual, party_individual, work_individual, education_individual, email_individual, phone_individual, networks_individual, id_user FROM individuals WHERE id_individual = $1', [idIndividual])
    return result.rows
  }

  static async delete ({ id }) {
    try {
      await pool.query('SELECT delete_individual($1)', [id])
    } catch (e) {
      throw new Error('Error to send information')
    }
  }
}
