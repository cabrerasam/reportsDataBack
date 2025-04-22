import z from 'zod'

const regionsSchema = z.object({
  nameRegion: z.string()
})

export function validateRegion (object) {
  return regionsSchema.safeParse(object)
}
