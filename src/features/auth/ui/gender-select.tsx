import type { FieldValues } from 'react-hook-form';
import { Controller } from 'react-hook-form';
import { FieldError, FieldLegend, FieldSet } from '@/shared/ui/kit/field';
import { Label } from '@/shared/ui/kit/label';
import { RadioGroup, RadioGroupItem } from '@/shared/ui/kit/radio-group';
import type { IControlledFieldProps } from '@/shared/ui/form/types';

type TGenderSelectProps<T extends FieldValues> = IControlledFieldProps<T> & {
  className?: string;
  disabled?: boolean;
};

export function GenderSelect<T extends FieldValues>({
  name,
  control,
  className,
  disabled,
}: TGenderSelectProps<T>) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <FieldSet className={className ?? 'w-[48%]'}>
          <FieldLegend>Gender</FieldLegend>
          <RadioGroup
            name={field.name}
            value={field.value ?? ''}
            onValueChange={field.onChange}
            orientation="horizontal"
            className="flex flex-row justify-center gap-6"
          >
            {['male', 'female'].map((gender) => (
              <div key={gender} className="flex flex-row items-center">
                <RadioGroupItem
                  value={gender}
                  id={`form-rhf-radiogroup-${gender}`}
                  aria-invalid={fieldState.invalid}
                  disabled={disabled}
                />
                <Label
                  htmlFor={`form-rhf-radiogroup-${gender}`}
                  className="ml-3"
                >
                  {gender}
                </Label>
              </div>
            ))}
          </RadioGroup>
          {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
        </FieldSet>
      )}
    />
  );
}
