'use client';
import { createSupabaseBrowserClient } from '@/shared/lib/supabase/browser-client';

export const downloadCover = async (coverUrl: string) => {
  const client = createSupabaseBrowserClient();
  const { data, error } = await client.storage
    .from('covers')
    .download(coverUrl);
  if (error) {
    throw error;
  }
  return URL.createObjectURL(data);
};
