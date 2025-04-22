import z from 'zod'

const issueSchema = z.object({
  issueReport: z.string(),
  intensityIssue: z.string(),
  idReport: z.string()
})

export function validateIssue (object) {
  return issueSchema.safeParse(object)
}
