import z from 'zod'

const sundaySchema = z.object({
  typeSunday: z.string(),
  prioritySunday: z.string(),
  confidentialitySunday: z.string(),
  numSunday: z.string(),
  dateSunday: z.string(),
  issueSunday: z.string(),
  linkSunday: z.string(),
  idUser: z.string()
})

export function validateSunday (object) {
  return sundaySchema.safeParse(object)
}

export function validatePartialSunday (object) {
  return sundaySchema.partial().safeParse(object)
}
