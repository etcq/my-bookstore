import { z } from 'zod';
import { ValidationMessages } from '../validation-messages';

const minimumAge = 18;
const todayDate = new Date();
const validDate = new Date(
  todayDate.getFullYear() - minimumAge,
  todayDate.getMonth(),
  todayDate.getDate(),
);

const birthDateSchema = z
  .string({ message: ValidationMessages.DATE_INVALID })
  .refine((date) => new Date(date) <= todayDate, {
    message: ValidationMessages.DATE_FUTURE,
  })
  .refine((date) => new Date(date) <= validDate, {
    message: ValidationMessages.DATE_AGE,
  });

export const userInformationSchema = z.object({
  email: z.email({ message: ValidationMessages.EMAIL_INVALID }),
  username: z.string().min(2, { message: ValidationMessages.LENGTH }),
  firstName: z.string().min(2, { message: ValidationMessages.LENGTH }),
  lastName: z.string().optional(),
  gender: z.enum(['male', 'female'], {
    message: ValidationMessages.GENDER,
  }),
  dateOfBirth: birthDateSchema.optional(),
});

export type TUserInformationForm = z.infer<typeof userInformationSchema>;
