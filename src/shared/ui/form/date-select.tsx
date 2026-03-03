import { ChevronDownIcon } from 'lucide-react';
import { useState } from 'react';
import type { Control, FieldPath, FieldValues } from 'react-hook-form';
import { Controller } from 'react-hook-form';
import { Button } from '@/shared/ui/kit/button';
import { Calendar } from '@/shared/ui/kit/calendar';
import { Label } from '@/shared/ui/kit/label';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/shared/ui/kit/popover';
import { FieldError } from '../kit/field';

export interface IDateSelectProps<T extends FieldValues> {
  name: FieldPath<T>;
  control: Control<T>;
  className?: string;
  disabled?: boolean;
}

export function DateSelect<T extends FieldValues>({
  name,
  control,
  className,
  disabled,
}: IDateSelectProps<T>) {
  const [open, setOpen] = useState(false);

  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <div className={className ?? 'w-[48%]'}>
          <div className="flex flex-col gap-3">
            <Label htmlFor="date">Date of birth</Label>
            <Popover
              open={disabled ? false : open}
              onOpenChange={disabled ? undefined : setOpen}
            >
              <PopoverTrigger asChild>
                <Button
                  type="button"
                  variant="outline"
                  id="date"
                  className="justify-between font-normal"
                  disabled={disabled}
                >
                  {field.value ?? 'Select date'}
                  <ChevronDownIcon />
                </Button>
              </PopoverTrigger>
              <PopoverContent
                className="w-auto overflow-hidden p-0"
                align="start"
              >
                <Calendar
                  mode="single"
                  selected={field.value}
                  captionLayout="dropdown"
                  onSelect={(date) => {
                    field.onChange(date?.toISOString().split('T')[0]);
                    setOpen(false);
                  }}
                />
              </PopoverContent>
            </Popover>
          </div>
          {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
        </div>
      )}
    />
  );
}
