import type { Control, FieldPath, FieldValues } from 'react-hook-form';

export interface IControlledFieldProps<T extends FieldValues> {
  name: FieldPath<T>;
  control: Control<T>;
}
