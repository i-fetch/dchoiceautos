'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Sidebar from '@/components/SideBar/SideBar';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import DashboardLayout from '@/components/DashboardLayout';

// Import your server action (example: getCurrentUser)
import { getUser } from '@/lib/getUser'; // Adjust path as needed

const DashboardPage = () => {
  const router = useRouter();
  const [user, setUser] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    // Call the server action to fetch user
    getUser().then((userData) => {
      if (!userData) {
        router.push('/login');
      } else {
        setUser(userData);
      }
      setLoading(false);
    });
  }, [router]);

  const handleLogout = () => {
    // Clear auth token/session here
    router.push('/login');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <span className="text-lg text-muted-foreground">Loading...</span>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 flex">
      <Sidebar onLogout={handleLogout} />
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
                Welcome, {user?.name?.split(' ')[0] || 'User'}!
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
