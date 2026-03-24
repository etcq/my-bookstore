'use client';
import { createSupabaseBrowserClient } from '@/shared/lib/supabase/browser-client';

export const downloadCover = async (coverUrl: string | null) => {
  const client = createSupabaseBrowserClient();
  if (!coverUrl) {
    throw new Error('covers url does not exist');
  }
  const { data, error } = await client.storage
    .from('covers')
    .download(coverUrl);
  if (error) {
    throw error;
  }
  return URL.createObjectURL(data);
};
