import React from 'react';
import { CreateBookForm } from '@/features/create-book/ui/create-book-form';

export const AdminPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl text-center mt-5 mb-10">Administration page</h2>
      <h4 className="text-2xl text-center">Create book</h4>
      <CreateBookForm />
    </div>
  );
};
