interface IBookDetailedParameterProps {
  label: string;
  value?: string | null;
}

export const BookDetailedParameter = ({
  label,
  value,
}: IBookDetailedParameterProps) => {
  return (
    <div className="rounded-md border border-border bg-background p-3">
      <span className="text-muted-foreground">{label}:</span>{' '}
      <span className="font-medium">{value ?? 'Not specified'}</span>
    </div>
  );
};
