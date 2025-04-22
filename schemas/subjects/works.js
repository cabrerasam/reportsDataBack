import z from 'zod'

const workSchema = z.object({
  work: z.string(),
  idIndividual: z.string(),
  idUser: z.string()
})

export function validateWork (object) {
  return workSchema.safeParse(object)
}
