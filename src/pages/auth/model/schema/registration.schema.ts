import * as z from 'zod';
import { ValidationMessages } from '../validation-messages';
import { passwordSchema } from '@/pages/auth/model/schema/password.schema';
import { userInformationSchema } from './user-information.schema';

export type TRegistrationForm = z.infer<typeof registrationSchema>;

export const baseRegistrationSchema = userInformationSchema.extend({
  password: passwordSchema,
  confirmed: z.string().min(1, {
    message: ValidationMessages.REQUIRED,
  }),
});

export const registrationSchema = baseRegistrationSchema.refine(
  (data) => data.password === data.confirmed,
  {
    path: ['confirmed'],
    message: ValidationMessages.PASSWORDS_DO_NOT_MATCH,
    when(payload) {
      return baseRegistrationSchema
        .pick({ password: true, confirmed: true })
        .safeParse(payload.value).success;
    },
  },
);
