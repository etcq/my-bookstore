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
}

export function DateSelect<T extends FieldValues>({
  name,
  control,
}: IDateSelectProps<T>) {
  const [open, setOpen] = useState(false);

  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <div className="w-[48%]">
          <div className="flex flex-col gap-3">
            <Label htmlFor="date">Date of birth</Label>
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  id="date"
                  className="justify-between font-normal"
                >
                  {field.value
                    ? (field.value as Date).toLocaleDateString()
                    : 'Select date'}
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
                    field.onChange(date);
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
