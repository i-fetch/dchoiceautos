'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Sidebar from '@/components/SideBar/SideBar';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Dashboardnow = ({ user }) => {
    const router = useRouter();

    const handleLogout = () => {
        // perform logout logic here if needed
        router.push('/login');
    };

    return (
        <div className="min-h-screen bg-background flex">
            <Sidebar onLogout={handleLogout} />
            <main className="flex-1 p-4 md:p-8 md:ml-64" aria-label="Main content area">
                <motion.div
                    className="max-w-7xl mx-auto space-y-8"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <Card className="bg-background dark:bg-slate-800 border border-border shadow">
                        <CardHeader>
                                                           uk,k                        <CardTitle className="text-2xl font-bold text-foreground">
                                Welcome, {user?.name?.split(' ')[0] || 'User'}!
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">
                                Manage your cars, spare parts, and profile from one place.
                            </p>
                        </CardContent>
                    </Card>
                    {/* other dashboard content */}
                </motion.div>
            </main>
        </div>
    );
};

export default Dashboardnow;
