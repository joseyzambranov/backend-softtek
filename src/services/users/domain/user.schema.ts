import { z } from 'zod';

export const userSchema = z.object({
    name: z.string({ required_error: 'Nombre de usuario es requerido' }),
});

export interface User {
  id: number;
  name: string;
  status: 0 | 1;
  created_at: Date;
  updated_at: Date;
}

export const validateUserInput = (body: any) => {
  return userSchema.parseAsync(body);
};

export const validatePartialUserInput = (body: any) => {
  return userSchema.partial().parseAsync(body);
};