import type { Database } from '@/shared/lib/supabase/types';

export type TUserData = Database['public']['Tables']['profiles']['Row'];
