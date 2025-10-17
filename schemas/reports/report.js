import z from 'zod'

const reportSchema = z.object({
  areaReport: z.string(),
  typeReport: z.string(),
  priorityReport: z.string(),
  confidentialityReport: z.string(),
  numReport: z.string(),
  dateReport: z.string(),
  linkReport: z.string(),
  idUser: z.string()
})

export function validateReport (object) {
  return reportSchema.safeParse(object)
}
