import { z } from 'zod';

export const createTodoSchema = z.object({
  description: z
    .string({
      required_error: 'Description is required',
    })
    .min(1, { message: 'Description cant be empy' }),
  completed: z.boolean().default(false).optional(),
});
