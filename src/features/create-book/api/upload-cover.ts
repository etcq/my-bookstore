'use server';

import { createSupabaseServerClient } from '@/shared/lib/supabase/server-client';

export const uploadCover = async (path: string, file: Blob | undefined) => {
  const client = await createSupabaseServerClient();

  if (!file) {
    throw new Error('No file provided');
  }

  if (!path || path.length < 1) {
    throw new Error('No path provided');
  }

  const { error } = await client.storage.from('covers').upload(path, file, {
    cacheControl: '3600',
    upsert: false,
  });

  if (error) throw error;
};
