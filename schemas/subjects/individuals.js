import z from 'zod'

const individualSchema = z.object({
  nameIndividual: z.string({
    invalid_type_error: 'Name individual must be a string',
    required_error: 'Name indivudual is required'
  }),
  nationalityIndividual: z.string({
    invalid_type_error: 'Nationality individual must be a string',
    required_error: 'Nationality indivudual is required'
  }),
  birthDateIndividual: z.string(),
  placeBirthIndividual: z.string(),
  genderIndividual: z.string(),
  maritalIndividual: z.string(),
  photoIndividual: z.string(),
  partyIndividual: z.string(),
  workIndividual: z.string(),
  educationIndividual: z.string(),
  emailIndividual: z.string().email(),
  phoneIndividual: z.string(),
  networksIndividual: z.string(),
  idUser: z.string()
})

export function validateIndividual (object) {
  return individualSchema.safeParse(object)
}

export function validatePartialIndividual (object) {
  return individualSchema.partial().safeParse(object)
}
