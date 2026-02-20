import React from 'react';
import Link from 'next/link';
import { ROUTES } from '@/shared/routes';
import { bookGenres } from '../model/genres';

export const GenresSection = () => {
  return (
    <section className="py-14 px-4 max-w-310 mx-auto">
      <h2 className="text-4xl font-semibold text-center mb-10 text-amber-300">
        Browse by Genre
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
        {bookGenres.map((genre) => (
          <Link href={ROUTES.CATALOG} key={genre.name}>
            <div
              className={`${genre.color} rounded-2xl p-6 flex flex-col items-center gap-3 cursor-pointer hover:scale-105 transition-transform duration-200 shadow-sm`}
            >
              <span className="text-4xl">{genre.emoji}</span>
              <span className="text-sm font-medium">{genre.name}</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};
