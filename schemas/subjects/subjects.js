import z from 'zod'

const subjectSchema = z.object({
  idSubject: z.string(),
  idAssociation: z.string()
})

export function validateSubject (object) {
  return subjectSchema.safeParse(object)
}
