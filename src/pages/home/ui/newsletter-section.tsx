'use client';
import { Button } from '@/shared/ui/kit/button';
import React, { useState } from 'react';

export const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
    <section className="py-16 px-4">
      <div className="max-w-xl mx-auto text-center">
        <span className="text-5xl">✉️</span>
        <h2 className="text-4xl font-semibold mt-4 mb-3 text-amber-300">
          Stay in the loop
        </h2>
        <p className="dark:text-stone-300 text-stone-500 mb-8 text-sm">
          Subscribe to our newsletter and be the first to know about new
          arrivals, exclusive deals, and author events.
        </p>
        {submitted ? (
          <div className="text-green-500 text-lg py-4">
            🎉 Thank you for subscribing!
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 justify-center"
          >
            <input
              type="email"
              value={email}
              onChange={handleChange}
              placeholder="Enter your email..."
              required
              className="flex-1 h-11 rounded-lg pl-2 border dark:border-stone-600 border-stone-300 dark:bg-stone-800 bg-white focus:outline-none focus:ring-2 focus:ring-amber-300 text-sm"
            />
            <Button
              type="submit"
              className="h-11 bg-amber-300 hover:bg-amber-400 text-stone-900 font-semibold transition-colors cursor-pointer text-sm"
            >
              Subscribe
            </Button>
          </form>
        )}
      </div>
    </section>
  );
};
