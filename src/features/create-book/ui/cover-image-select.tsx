import { type ChangeEvent } from 'react';
import type { ControllerRenderProps, FieldValues } from 'react-hook-form';
import { Controller } from 'react-hook-form';
import type { IControlledFieldProps } from '@/shared/ui/form/types';
import type { TFormControlledInputProps } from '@/shared/ui/form/controlled-input';
import { Field, FieldError, FieldLabel } from '@/shared/ui/kit/field';
import { Input } from '@/shared/ui/kit/input';
import { uploadCover } from '@/features/create-book/api/upload-cover';

export type TCoverImageSelect<T extends FieldValues> =
  IControlledFieldProps<T> & {
    label: string;
    className?: string;
    disabled?: boolean;
  };

export const CoverImageSelect = <T extends FieldValues>({
  name,
  control,
  label,
  className,
  disabled,
}: TFormControlledInputProps<T>) => {
  const upload = async (
    event: ChangeEvent<HTMLInputElement>,
    field: ControllerRenderProps<T, typeof name>,
  ) => {
    const input = event.currentTarget;
    const file = input.files?.[0];
    if (!file) {
      console.warn(`Could not find file`);
      return;
    }
    const path = `private/${file.name}`;
    try {
      await uploadCover(path, file);
      field.onChange(path);
      console.log(field.value);
    } catch (error) {
      console.error('Error uploading cover image:', error);
    }
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
            onChange={(e) => void upload(e, field)}
            disabled={disabled}
          />
          {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
        </Field>
      )}
    />
  );
};
