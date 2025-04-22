import z from 'zod'

const loginSchema = z.object({
  userNick: z.string({
    invalid_type_error: 'nickname must be a string',
    required_error: 'nickname is required'
  }),
  userPassword: z.string({
    invalid_type_error: 'Password must be a string',
    required_error: 'Password is required'
  })
})

export function validateLogin (object) {
  return loginSchema.safeParse(object)
}
