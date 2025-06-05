'use client';

import React from 'react';
import Sidebar from '@/components/SideBar/SideBar';
import { motion } from 'framer-motion';

const DashboardLayout = ({ children, onLogout }) => {
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
          {children}
        </motion.div>
      </main>
    </div>
  );
};

export default DashboardLayout;
