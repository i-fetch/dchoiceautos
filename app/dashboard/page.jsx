'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Sidebar from '@/components/Sidebar'; // Adjust path accordingly
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import DashboardLayout from '@/components/DashboardLayout';

const DashboardPage = () => {
  const router = useRouter();

  // Replace with your real auth logic & user fetching
  const isAuthenticated = true;
  const user = { name: 'John Doe' };

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, router]);

  const handleLogout = () => {
    // Clear auth token/session here
    router.push('/login');
  };

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
                Welcome, {user.name?.split(' ')[0]}!
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
