import type { FieldValues } from 'react-hook-form';
import { Controller } from 'react-hook-form';
import { Field, FieldError, FieldLabel } from '../kit/field';
import { Input } from '../kit/input';
import type { IControlledFieldProps } from './types';

export type TFormControlledInputProps<T extends FieldValues> =
  IControlledFieldProps<T> & {
    label: string;
    type?: string;
    step?: number;
    className?: string;
    disabled?: boolean;
  };

export function FormControlledInput<T extends FieldValues>({
  name,
  control,
  label,
  type = 'text',
  step = 1,
  className,
  disabled,
}: TFormControlledInputProps<T>) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <Field className={className}>
          <FieldLabel>{label}</FieldLabel>
          <Input
            {...field}
            type={type}
            value={field.value ?? ''}
            step={step}
            onChange={(event) => {
              field.onChange(
                type === 'number'
                  ? event.target.value.length > 0
                    ? +event.target.value
                    : undefined
                  : event.target.value,
              );
            }}
            disabled={disabled}
          />
          {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
        </Field>
      )}
    />
  );
}
