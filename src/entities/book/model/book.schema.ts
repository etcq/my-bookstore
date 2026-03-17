import { z } from 'zod';
import { bookValidationMessages } from './book-validation-messages';

export const bookSchema = z.object({
  author: z
    .string()
    .trim()
    .min(2, { message: bookValidationMessages.LENGTH })
    .regex(/^[A-Za-z]+(?:\s+[A-Za-z]+)*$/, {
      message: bookValidationMessages.SPECIAL_CHAR,
    })
    .optional(),
  description: z
    .string()
    .min(2, { message: bookValidationMessages.REQUIRED })
    .optional(),
  genre: z
    .string()
    .min(2, { message: bookValidationMessages.LENGTH })
    .optional(),
  title: z.string().min(1, { message: bookValidationMessages.REQUIRED }),
  pageCount: z
    .number()
    .positive({ message: bookValidationMessages.POSITIVE_INPUT }),
  price: z
    .number()
    .positive({ message: bookValidationMessages.POSITIVE_INPUT })
    .min(0.01),
  rating: z
    .number()
    .positive({ message: bookValidationMessages.POSITIVE_INPUT })
    .optional(),
  cover: z.string().optional(),
});

export type TBookForm = z.infer<typeof bookSchema>;
