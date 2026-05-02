import Link from 'next/link';
import { Button } from '@/shared/ui/kit';
import { ROUTES } from '@/shared/routes';
import { Meie_Script } from 'next/font/google';
import { storeStats } from '../model/stats';

const meieScript = Meie_Script({
  subsets: ['latin'],
  weight: '400',
});

export const StatsSection = () => {
  return (
    <section
      className="relative overflow-hidden min-h-150 flex items-center
        bg-linear-to-br from-stone-900 via-stone-800 to-amber-950"
    >
      <div
        className="absolute -top-20 -right-20 w-105 h-105 rounded-full
          bg-amber-400 opacity-10 blur-3xl pointer-events-none"
      />
      <div
        className="absolute -bottom-15 -left-15 w-[320px] h-80 rounded-full
          bg-amber-300 opacity-10 blur-3xl pointer-events-none"
      />
      <div className="max-w-310 mx-auto px-8 py-24 z-10 relative">
        <h1
          className={`text-[88px] leading-none text-white ${meieScript.className} uppercase`}
        >
          Page <span className="text-amber-300">&</span> co
        </h1>

        <p className="mt-5 text-stone-300 text-xl max-w-lg leading-relaxed">
          Discover your next favorite book. Curated collections, unbeatable
          prices, delivered right to your door.
        </p>

        <div className="mt-10 flex gap-4 flex-wrap">
          <Link href={ROUTES.CATALOG}>
            <Button
              className="h-13 px-8 text-base font-semibold bg-amber-400 hover:bg-amber-300 text-stone-900
                  rounded-xl shadow-lg shadow-amber-400/30 hover:shadow-amber-300/40 transition-all duration-200
                  hover:cursor-pointer hover:scale-105"
            >
              Browse catalog
            </Button>
          </Link>
          <Link href={ROUTES.CATALOG}>
            <Button
              variant="outline"
              className="h-13 px-8 text-base font-semibold border-stone-500 text-stone-900 dark:text-stone-200
                  hover:bg-stone-700 hover:text-white dark:hover:bg-stone-200 dark:hover:text-stone-900 rounded-xl transition-all duration-200
                  hover:cursor-pointer"
            >
              New releases →
            </Button>
          </Link>
        </div>

        <div className="mt-14 flex gap-10 flex-wrap">
          {storeStats.map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl font-bold text-amber-300">{stat.value}</p>
              <p className="text-sm text-stone-400 mt-0.5">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
