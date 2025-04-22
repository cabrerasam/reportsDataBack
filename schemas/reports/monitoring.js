import z from 'zod'

const monitoringSchema = z.object({
  typeMonitoring: z.string(),
  priorityMonitoring: z.string(),
  confidentialityMonitoring: z.string(),
  numMonitoring: z.string(),
  dateMonitoring: z.string(),
  linkMonitoring: z.string(),
  idUser: z.string()
})

export function validateMonitoring (object) {
  return monitoringSchema.safeParse(object)
}

export function validatePartialMonitoring (object) {
  return monitoringSchema.partial().safeParse(object)
}
