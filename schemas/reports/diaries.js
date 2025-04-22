import z from 'zod'

const diarySchema = z.object({
  typeDiary: z.string(),
  priorityDiary: z.string(),
  confidentialityDiary: z.string(),
  numDiary: z.string(),
  dateDiary: z.string(),
  issueDiary: z.string(),
  linkDiary: z.string(),
  idUser: z.string()
})

export function validateDiary (object) {
  return diarySchema.safeParse(object)
}

export function validatePartialDiary (object) {
  return diarySchema.partial().safeParse(object)
}
