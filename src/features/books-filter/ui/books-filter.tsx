'use client';

import { useState } from 'react';
import { Separator } from '@/shared/ui/kit/separator';
import { Card, CardContent } from '@/shared/ui/kit/card';
import { Button } from '@/shared/ui/kit/button';
import type { TBook } from '@/entities/book';
import { Slider } from '@/shared/ui/kit/slider';
import { Star } from 'lucide-react';
import { useBookListInformation } from '@/features/books-filter/model/use-booklist-information';
import { FILTER_PARAM_NAMES } from '@/features/books-filter/model/filter-params-names';
import { useFilterParams } from '@/features/books-filter/model/use-filter-params';

export const BooksFilter = ({ books }: { books: TBook[] | null }) => {
  const { categories, priceDiapason, ratingDiapason } = useBookListInformation({
    bookList: books,
  });
  const { params, updateFilterParam, updateRangeParam, resetFilterParams } =
    useFilterParams();

  const selectedCategory = params?.get(FILTER_PARAM_NAMES.categories) ?? 'all';
  const showInStockOnly = params?.get(FILTER_PARAM_NAMES.stockOnly) === 'true';

  const [priceRange, setPriceRange] = useState(() => [
    Number(params?.get(FILTER_PARAM_NAMES.priceFrom) ?? priceDiapason[0]),
    Number(params?.get(FILTER_PARAM_NAMES.priceTo) ?? priceDiapason[1]),
  ]);
  const [ratingRange, setRatingRange] = useState(() => [
    Number(params?.get(FILTER_PARAM_NAMES.ratingFrom) ?? ratingDiapason[0]),
    Number(params?.get(FILTER_PARAM_NAMES.ratingTo) ?? ratingDiapason[1]),
  ]);

  return (
    <aside className="w-full md:w-64 shrink-0">
      <Card>
        <CardContent className="p-6 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold">Filters</h3>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                resetFilterParams(() => {
                  setPriceRange(priceDiapason);
                  setRatingRange(ratingDiapason);
                });
              }}
              className="h-auto p-0 text-primary hover:text-primary"
            >
              Reset
            </Button>
          </div>
          <Separator />

          {/* categories */}
          <div className="space-y-3">
            <h4 className="text-sm font-medium">Category</h4>
            <div className="space-y-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    updateFilterParam(
                      FILTER_PARAM_NAMES.categories,
                      category === 'all' ? null : category,
                    );
                  }}
                  className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                    selectedCategory === category
                      ? 'bg-primary text-primary-foreground'
                      : 'hover:bg-muted'
                  }`}
                >
                  {category === 'all' ? 'All Categories' : category}
                </button>
              ))}
            </div>
          </div>
          <Separator />

          {/* rating */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-medium">Rating range</h4>
              <span className="text-sm text-muted-foreground">
                <span>
                  <Star className="size-4 fill-yellow-400 text-yellow-400 inline-block mr-1" />
                  {ratingRange[0]}
                </span>{' '}
                -{' '}
                <span>
                  <Star className="size-4 fill-yellow-400 text-yellow-400 inline-block mr-1" />
                  {ratingRange[1]}
                </span>
              </span>
            </div>
            <Slider
              min={0}
              max={10}
              step={1}
              value={ratingRange}
              onValueChange={setRatingRange}
              onValueCommit={(range) => {
                updateRangeParam(
                  FILTER_PARAM_NAMES.ratingFrom,
                  FILTER_PARAM_NAMES.ratingTo,
                  range,
                );
              }}
              className="py-4"
            />
          </div>
          <Separator />

          {/* Price */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-medium">Price Range</h4>
              <span className="text-sm text-muted-foreground">
                ${priceRange[0]} - ${priceRange[1]}
              </span>
            </div>
            <Slider
              min={0}
              max={100}
              step={1}
              value={priceRange}
              onValueChange={setPriceRange}
              onValueCommit={(range) => {
                updateRangeParam(
                  FILTER_PARAM_NAMES.priceFrom,
                  FILTER_PARAM_NAMES.priceTo,
                  range,
                );
              }}
              className="py-4"
            />
          </div>
          <Separator />

          {/* In stock */}
          <div className="space-y-3">
            <h4 className="text-sm font-medium">Availability</h4>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={showInStockOnly}
                onChange={(e) => {
                  updateFilterParam(
                    FILTER_PARAM_NAMES.stockOnly,
                    e.target.checked ? 'true' : null,
                  );
                }}
                className="w-4 h-4 rounded border-border"
              />
              <span className="text-sm">In Stock Only</span>
            </label>
          </div>
        </CardContent>
      </Card>
    </aside>
  );
};
