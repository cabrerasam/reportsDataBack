import z from 'zod'

const weeklySchema = z.object({
  numWeekly: z.string(),
  dateWeekly: z.string(),
  linkWeekly: z.string(),
  idUser: z.string()
})

export function validateWeekly (object) {
  return weeklySchema.safeParse(object)
}

export function validatePartialWeekly (object) {
  return weeklySchema.partial().safeParse(object)
}
