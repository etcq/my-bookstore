import * as z from 'zod';
import { ValidationMessages } from '../validation-messages';
import { passwordSchema } from '@/pages/auth/model/schema/password.schema';

export type TRegistrationForm = z.infer<typeof registrationSchema>;

const minimumAge = 18;
const todayDate = new Date();
const validDate = new Date(
  todayDate.getFullYear() - minimumAge,
  todayDate.getMonth(),
  todayDate.getDate(),
);

const birthDateSchema = z
  .date({ message: ValidationMessages.DATE_INVALID })
  .refine((date) => date <= todayDate, {
    message: ValidationMessages.DATE_FUTURE,
  })
  .refine((date) => date <= validDate, {
    message: ValidationMessages.DATE_AGE,
  });

export const baseRegistrationSchema = z.object({
  username: z.string().min(2, { message: ValidationMessages.LENGTH }),
  email: z.email({ message: ValidationMessages.EMAIL_INVALID }),
  firstName: z.string().min(2, { message: ValidationMessages.LENGTH }),
  lastName: z.string().optional(),
  password: passwordSchema,
  confirmed: z.string().min(1, {
    message: ValidationMessages.REQUIRED,
  }),
  gender: z.enum(['male', 'female'], {
    message: ValidationMessages.GENDER,
  }),
  avatarUrl: z.string(),
  dateOfBirth: birthDateSchema.optional(),
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
