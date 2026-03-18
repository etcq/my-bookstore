import React from 'react';

const Star = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <path d="M12 2.5l2.98 6.04 6.67.97-4.83 4.7 1.14 6.64L12 17.98 6.04 20.85l1.14-6.64-4.83-4.7 6.67-.97L12 2.5z" />
  </svg>
);

export const RatingStars = ({ rating }: { rating: number | null }) => {
  const maxStars = 10;
  const safeRating =
    typeof rating === 'number' && Number.isFinite(rating)
      ? Math.min(Math.max(rating, 0), maxStars)
      : 0;

  return (
    <div
      className="flex items-center gap-1"
      aria-label={`Rating ${String(safeRating)} out of ${String(maxStars)}`}
    >
      {Array.from({ length: maxStars }, (_, i) => {
        const fill = Math.max(0, Math.min(1, safeRating - i));
        return (
          <span key={i} className="relative inline-block h-4 w-4">
            <Star className="h-4 w-4 text-muted-foreground/30 fill-current" />
            <span
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${String(fill * 100)}%` }}
            >
              <Star className="h-4 w-4 text-yellow-500 fill-current" />
            </span>
          </span>
        );
      })}
    </div>
  );
};
