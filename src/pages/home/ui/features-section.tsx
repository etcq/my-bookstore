import React from 'react';
import { storeFeatures } from '../model/features';

export const FeaturesSection = () => {
  return (
    <section className="py-14 dark:bg-stone-800 bg-stone-100">
      <div className="max-w-310 mx-auto px-4">
        <h2 className="text-4xl font-semibold text-center mb-10 text-amber-300">
          Why choose us?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {storeFeatures.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col items-center text-center gap-4 p-6 rounded-2xl dark:bg-stone-700 bg-white shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <span className="text-5xl">{feature.icon}</span>
              <h3 className="text-lg font-semibold">{feature.title}</h3>
              <p className="text-sm dark:text-stone-300 text-stone-500 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
