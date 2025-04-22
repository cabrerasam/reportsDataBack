import z from 'zod'

const areasSchema = z.object({
  nameArea: z.string()
})

export function validateArea (object) {
  return areasSchema.safeParse(object)
}
