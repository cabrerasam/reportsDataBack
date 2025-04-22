import z from 'zod'

const ngoWeeklySchema = z.object({
  numNgoWeekly: z.string(),
  dateNgoWeekly: z.string(),
  linkNgoWeekly: z.string(),
  idUser: z.string()
})

export function validateNgoWeekly (object) {
  return ngoWeeklySchema.safeParse(object)
}

export function validatePartialNgoWeekly (object) {
  return ngoWeeklySchema.partial().safeParse(object)
}
