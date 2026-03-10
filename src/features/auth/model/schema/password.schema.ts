import * as z from 'zod';
import { ValidationMessages } from '../validation-messages';
import type { ZodString } from 'zod';

export const passwordSchema: ZodString = z
  .string()
  .min(1, {
    message: ValidationMessages.REQUIRED,
  })
  .regex(/^\S*$/, {
    message: ValidationMessages.WHITESPACE,
  })
  .min(8, {
    message: ValidationMessages.PASSWORD_TOO_SHORT,
  })
  .regex(/[a-z]/, {
    message: ValidationMessages.PASSWORD_MISSING_LOWERCASE,
  })
  .regex(/[A-Z]/, {
    message: ValidationMessages.PASSWORD_MISSING_UPPERCASE,
  })
  .regex(/\d/, {
    message: ValidationMessages.PASSWORD_MISSING_DIGIT,
  })
  .regex(/^\S*$/, {
    message: ValidationMessages.WHITESPACE,
  });
