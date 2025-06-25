
import { redirect } from 'next/navigation';
import { getUser } from '@/lib/getUser';
import Dashboard from './Dashboard';

export default async function DashboardPage() {
  const user = await getUser();

  if (!user) {
    redirect('/login');
  }

  return <Dashboard user={user} onLogout={() => redirect('/login')} />;
}
