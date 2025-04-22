import z from 'zod'

const speachSchema = z.object({
  speach: z.string(),
  titleSpeach: z.string(),
  dateSpeach: z.string(),
  idIndividual: z.string(),
  idUser: z.string()
})

export function validateSpeach (object) {
  return speachSchema.safeParse(object)
}
