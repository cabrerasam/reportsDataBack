import z from 'zod'

const rolesSchema = z.object({
  nameRole: z.string()
})

export function validateRole (object) {
  return rolesSchema.safeParse(object)
}
