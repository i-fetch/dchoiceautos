'use client';

import React from 'react';
import Sidebar from '@/components/SideBar/SideBar';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Dashboardnow = ({ user, onLogout }) => {
    return (
        <div className="min-h-screen bg-slate-900 flex">
            <Sidebar onLogout={onLogout} />
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
                    {/* other dashboard content */}
                </motion.div>
            </main>
        </div>
    );
};

export default Dashboardnow;