import z from 'zod'

const issueSchema = z.object({
  issueReport: z.string(),
  tagsIssuesReport: z.string(),
  idReport: z.string()
})

const issueArraySchema = z.array(issueSchema)

export function validateIssue (object) {
  return issueSchema.safeParse(object)
}

export function validateIssuesArray (array) {
  return issueArraySchema.safeParse(array)
}
