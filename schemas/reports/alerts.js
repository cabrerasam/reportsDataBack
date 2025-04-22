import z from 'zod'

const alertSchema = z.object({
  typeAlert: z.string(),
  priorityAlert: z.string(),
  confidentialityAlert: z.string(),
  numAlert: z.string(),
  dateAlert: z.string(),
  issueAlert: z.string(),
  linkAlert: z.string(),
  idUser: z.string()
})

export function validateAlert (object) {
  return alertSchema.safeParse(object)
}

export function validatePartialAlert (object) {
  return alertSchema.partial().safeParse(object)
}
