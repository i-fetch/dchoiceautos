
import { redirect } from 'next/navigation';
import { getUser } from '@/lib/getUser';
import Dashboardnow from './Dashboard';

export default async function DashboardPage() {
  const user = await getUser();

  if (!user) {
    redirect('/login');
  }

  return <Dashboardnow user={user} onLogout={() => redirect('/login')} />;
}
