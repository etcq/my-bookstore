import { type ChangeEvent } from 'react';
import type { ControllerRenderProps, FieldValues } from 'react-hook-form';
import { Controller } from 'react-hook-form';
import type { IControlledFieldProps } from '@/shared/ui/form/types';
import { Field, FieldError, FieldLabel, Input } from '@/shared/ui/kit';

export type TCoverImageSelect<T extends FieldValues> =
  IControlledFieldProps<T> & {
    label: string;
    className?: string;
    disabled?: boolean;
    onFileSelect?: (file: File | null) => void;
  };

export const CoverImageSelect = <T extends FieldValues>({
  name,
  control,
  label,
  className,
  disabled,
  onFileSelect,
}: TCoverImageSelect<T>) => {
  const handleChange = (
    event: ChangeEvent<HTMLInputElement>,
    field: ControllerRenderProps<T, typeof name>,
  ) => {
    const input = event.currentTarget;
    const file = input.files?.[0] ?? null;
    onFileSelect?.(file);
    field.onChange(file?.name ?? '');
  };

  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <Field className={className}>
          <FieldLabel>{label}</FieldLabel>
          <Input
            type="file"
            name={field.name}
            ref={field.ref}
            onBlur={field.onBlur}
            onChange={(e) => {
              handleChange(e, field);
            }}
            disabled={disabled}
          />
          {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
        </Field>
      )}
    />
  );
};
