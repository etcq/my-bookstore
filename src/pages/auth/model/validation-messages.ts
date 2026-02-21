export const ValidationMessages = {
  LENGTH: 'This field must be minimum 2 letters',
  EMAIL_INVALID: 'Please enter a valid email address.',
  PASSWORD_TOO_SHORT: 'Password must be at least 8 characters long.',
  PASSWORD_MISSING_DIGIT: 'Password must contain at least one digit.',
  PASSWORD_MISSING_UPPERCASE:
    'Password must contain at least one uppercase letter.',
  PASSWORD_MISSING_LOWERCASE:
    'Password must contain at least one lowercase letter.',
  PASSWORDS_DO_NOT_MATCH: 'Passwords do not match',
  REQUIRED: 'Field is required',
  WHITESPACE: 'Field must not contain spaces.',
  SPECIAL_CHAR:
    'Field must contain only letters (no special characters or numbers)',
  ZIP_INVALID: 'Invalid postal code',
  DATE_FUTURE: 'Date cannot be in the future',
  DATE_AGE: 'You must be at least 18 years old',
  GENDER: 'Please select a gender',
  DATE_INVALID: 'Invalid date format',
} as const;
