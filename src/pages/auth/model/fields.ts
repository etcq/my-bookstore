import type { TLoginForm } from './schema/login.schema';
import type { TRegistrationForm } from './schema/registration.schema';

interface ILoginField {
  name: keyof TLoginForm;
  label: string;
  type?: string;
}

interface IPasswordField {
  name: keyof Pick<TRegistrationForm, 'password' | 'confirmed'>;
  label: string;
  type: 'password';
}

interface IRegistrationFields {
  name: keyof TRegistrationForm;
  label: string;
  type?: string;
}

export const loginFields: ILoginField[] = [
  { name: 'email', label: 'Email' },
  { name: 'password', label: 'Password', type: 'password' },
];

export const passwordFields: IPasswordField[] = [
  { name: 'password', label: 'Password', type: 'password' },
  { name: 'confirmed', label: 'Confirm password', type: 'password' },
];

export const registrationFields: IRegistrationFields[] = [
  { name: 'username', label: 'Username' },
  { name: 'email', label: 'Email', type: 'email' },
  { name: 'firstName', label: 'Name' },
  { name: 'lastName', label: 'Second name' },
];
