import * as z from 'zod';
import { ValidationMessages } from '../validation-messages';
import { passwordSchema } from '@/pages/auth/model/schema/password.schema';

export type TLoginForm = z.infer<typeof loginSchema>;

export const loginSchema = z.object({
  email: z.email({ message: ValidationMessages.EMAIL_INVALID }),
  password: passwordSchema,
});
