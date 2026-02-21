import type { FieldValues } from 'react-hook-form';
import { Controller } from 'react-hook-form';
import { Field, FieldError, FieldLabel } from '../kit/field';
import { Input } from '../kit/input';
import type { IControlledFieldProps } from './types';

export type TFormControlledInputProps<T extends FieldValues> =
  IControlledFieldProps<T> & {
    label: string;
    type?: string;
    className?: string;
  };

export function FormControlledInput<T extends FieldValues>({
  name,
  control,
  label,
  type,
  className,
}: TFormControlledInputProps<T>) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <Field className={className}>
          <FieldLabel>{label}</FieldLabel>
          <Input {...field} type={type ?? 'text'} />
          {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
        </Field>
      )}
    />
  );
}
