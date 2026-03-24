import { ProfilePage } from '@/pages/auth';
import { Suspense } from 'react';

export default function Page() {
  return (
    <Suspense fallback={null}>
      <ProfilePage />
    </Suspense>
  );
}
