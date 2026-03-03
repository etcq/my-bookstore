import { getUserInfo } from '@/entities/user';
import { ProfilePage } from '@/pages/auth';

export default async function Page() {
  const userInfo = await getUserInfo();
  return <ProfilePage userData={userInfo} />;
}
