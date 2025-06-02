'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Home, Car, User, LogOut, Menu, X } from 'lucide-react';
import Link from 'next/link';

const Sidebar = ({ onLogout }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const sidebarItems = [
    { icon: Home, label: 'Dashboard', href: '/dashboard' },
    { icon: Car, label: 'My Cars', href: '/dashboard/car-update' },
    { icon: Car, label: 'Spare Parts', href: '/dashboard/spare-parts' },
    { icon: User, label: 'Profile', href: '/profile' },
    { icon: LogOut, label: 'Logout', onClick: onLogout },
  ];

  return (
    <>
      {/* Desktop Sidebar */}
      <aside
        className="hidden md:block w-64 bg-slate-100 dark:bg-slate-800 h-screen p-4 fixed"
        aria-label="Sidebar Navigation"
      >
        <div className="flex items-center mb-6">
          <h2 className="text-2xl font-bold text-white">AutoElite</h2>
        </div>
        <nav className="space-y-2" role="navigation">
          {sidebarItems.map((item, index) =>
            item.href ? (
              <Link key={index} href={item.href} passHref legacyBehavior>
                <Button
                  as="a"
                  variant="ghost"
                  className="w-full justify-start text-white hover:bg-primary/10"
                >
                  <item.icon className="h-5 w-5 mr-2" aria-hidden="true" />
                  {item.label}
                </Button>
              </Link>
            ) : (
              <Button
                key={index}
                variant="ghost"
                className="w-full justify-start text-white hover:bg-primary/10"
                onClick={item.onClick}
              >
                <item.icon className="h-5 w-5 mr-2" aria-hidden="true" />
                {item.label}
              </Button>
            )
          )}
        </nav>
      </aside>

      {/* Mobile Sidebar */}
      <Sheet open={isSidebarOpen} onOpenChange={setIsSidebarOpen}>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="md:hidden fixed top-4 left-4 z-50 bg-slate-100 dark:bg-slate-800 text-white"
            aria-label="Open sidebar menu"
          >
            <Menu className="h-6 w-6" aria-hidden="true" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="bg-slate-100 dark:bg-slate-800 w-64 p-4">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white">AutoElite</h2>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsSidebarOpen(false)}
              className="text-white"
              aria-label="Close sidebar menu"
            >
              <X className="h-6 w-6" aria-hidden="true" />
            </Button>
          </div>
          <nav className="space-y-2" role="navigation">
            {sidebarItems.map((item, index) =>
              item.href ? (
                <Link key={index} href={item.href} passHref legacyBehavior>
                  <Button
                    as="a"
                    variant="ghost"
                    className="w-full justify-start text-white hover:bg-primary/10"
                    onClick={() => setIsSidebarOpen(false)}
                  >
                    <item.icon className="h-5 w-5 mr-2" aria-hidden="true" />
                    {item.label}
                  </Button>
                </Link>
              ) : (
                <Button
                  key={index}
                  variant="ghost"
                  className="w-full justify-start text-white hover:bg-primary/10"
                  onClick={() => {
                    item.onClick?.();
                    setIsSidebarOpen(false);
                  }}
                >
                  <item.icon className="h-5 w-5 mr-2" aria-hidden="true" />
                  {item.label}
                </Button>
              )
            )}
          </nav>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default Sidebar;
