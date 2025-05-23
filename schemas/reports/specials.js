import z from 'zod'

const specialSchema = z.object({
  typeSpecial: z.string(),
  prioritySpecial: z.string(),
  confidentialitySpecial: z.string(),
  numSpecial: z.string(),
  dateSpecial: z.string(),
  issueSpecial: z.string(),
  linkSpecial: z.string(),
  idUser: z.string()
})

export function validateSpecial (object) {
  return specialSchema.safeParse(object)
}

export function validatePartialSpecial (object) {
  return specialSchema.partial().safeParse(object)
}
