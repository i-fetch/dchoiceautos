'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import Sidebar from '@/components/SideBar/SideBar';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const DashboardPage = () => {
  const router = useRouter();
  const { data: session, status } = useSession();

  React.useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login');
    }
  }, [status, router]);

  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-900">
        <span className="text-lg text-muted-foreground">Loading...</span>
      </div>
    );
  }

  if (!session?.user) return null;

  return (
    <div className="min-h-screen bg-slate-900 flex">
      <Sidebar onLogout={() => router.push('/login')} />
      <main className="flex-1 p-4 md:p-8 md:ml-64" aria-label="Main content area">
        <motion.div
          className="max-w-7xl mx-auto space-y-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Card className="bg-slate-100 dark:bg-slate-800">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white">
                Welcome, {session.user.name?.split(' ')[0] || 'User'}!
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Manage your cars, spare parts, and profile from one place.
              </p>
            </CardContent>
          </Card>
          {/* other content */}
        </motion.div>
      </main>
    </div>
  );
};

export default DashboardPage;
