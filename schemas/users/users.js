import z from 'zod'

const usersSchema = z.object({
  userName: z.string({
    invalid_type_error: 'User name must be a string',
    required_error: 'Name user is required'
  }),
  userNick: z.string({
    invalid_type_error: 'User nick must be a string',
    required_error: 'Nick for user is required'
  }),
  passwordUser: z.string({
    invalid_type_error: 'User password must be a string',
    required_error: 'Password for user is required'
  }),
  idArea: z.string(),
  idRole: z.string(),
  idRegion: z.string()
})

export function validateUser (object) {
  return usersSchema.safeParse(object)
}

export function validatePartialUser (object) {
  return usersSchema.partial().safeParse(object)
}
