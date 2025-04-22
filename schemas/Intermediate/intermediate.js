import z from 'zod'

const intemediateSchema = z.object({
  idSubject: z.string(),
  idReport: z.string()
})

export function validateIntermediate (object) {
  return intemediateSchema.safeParse(object)
}
