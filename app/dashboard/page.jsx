'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useForm } from 'react-hook-form';
import { useToast } from "@/hooks/use-toast";
import {
  Home,
  Heart,
  ShoppingCart,
  Car,
  User,
  LogOut,
  Menu,
  X,
  Plus,
  Edit,
  Trash,
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' },
};

const DashboardPage = () => {
  const { toast } = useToast();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [favorites, setFavorites] = useState([
    { id: 'fav1', name: 'BMW M5', image: '/cars/bmw-m5.jpg' },
    { id: 'fav2', name: 'Mercedes S-Class', image: '/cars/mercedes-sclass.jpg' },
  ]);
  const [orders, setOrders] = useState([
    { id: 'ord1', item: 'Brake Pads', date: '2025-05-20', total: '₦150,000' },
    { id: 'ord2', item: 'Oil Filter', date: '2025-05-15', total: '₦85,000' },
  ]);
  const [isFavoriteModalOpen, setIsFavoriteModalOpen] = useState(false);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [editFavorite, setEditFavorite] = useState(null);
  const [editOrder, setEditOrder] = useState(null);

  const favoriteForm = useForm();
  const orderForm = useForm();

  // Placeholder auth check
  const isAuthenticated = true; // Replace with actual auth logic
  if (!isAuthenticated) {
    window.location.href = '/login';
    return null;
  }

  // Favorites CRUD
  const handleFavoriteSubmit = (data) => {
    if (editFavorite) {
      setFavorites(favorites.map((fav) =>
        fav.id === editFavorite.id ? { ...fav, ...data } : fav
      ));
      toast({ title: 'Favorite Updated', description: `${data.name} updated.`, duration: 3000 });
    } else {
      const newFavorite = {
        id: `fav${Date.now()}`,
        name: data.name,
        image: data.image || '/cars/placeholder.jpg',
      };
      setFavorites([...favorites, newFavorite]);
      toast({ title: 'Favorite Added', description: `${data.name} added to favorites.`, duration: 3000 });
    }
    setIsFavoriteModalOpen(false);
    setEditFavorite(null);
    favoriteForm.reset();
  };

  const handleEditFavorite = (favorite) => {
    setEditFavorite(favorite);
    favoriteForm.reset(favorite);
    setIsFavoriteModalOpen(true);
  };

  const handleDeleteFavorite = (id) => {
    setFavorites(favorites.filter((fav) => fav.id !== id));
    toast({ title: 'Favorite Removed', description: 'Car removed from favorites.', duration: 3000 });
  };

  // Orders CRUD
  const handleOrderSubmit = (data) => {
    if (editOrder) {
      setOrders(orders.map((ord) =>
        ord.id === editOrder.id ? { ...ord, ...data, date: new Date().toISOString().split('T')[0] } : ord
      ));
      toast({ title: 'Order Updated', description: `${data.item} updated.`, duration: 3000 });
    } else {
      const newOrder = {
        id: `ord${Date.now()}`,
        item: data.item,
        date: new Date().toISOString().split('T')[0],
        total: data.total,
      };
      setOrders([...orders, newOrder]);
      toast({ title: 'Order Added', description: `${data.item} added to orders.`, duration: 3000 });
    }
    setIsOrderModalOpen(false);
    setEditOrder(null);
    orderForm.reset();
  };

  const handleEditOrder = (order) => {
    setEditOrder(order);
    orderForm.reset(order);
    setIsOrderModalOpen(true);
  };

  const handleDeleteOrder = (id) => {
    setOrders(orders.filter((ord) => ord.id !== id));
    toast({ title: 'Order Removed', description: 'Order removed.', duration: 3000 });
  };

  const sidebarItems = [
    { icon: Home, label: 'Dashboard', href: '/dashboard' },
    { icon: Heart, label: 'Favorites', href: '/dashboard#favorites' },
    { icon: ShoppingCart, label: 'Orders', href: '/dashboard#orders' },
    { icon: Car, label: 'Compare Cars', href: '/compare' },
    { icon: User, label: 'Profile', href: '/profile' },
    { icon: LogOut, label: 'Logout', href: '/login' },
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      <div className="flex">
        {/* Sidebar (Desktop) */}
        <motion.aside
          className="hidden md:block w-64 bg-slate-100 dark:bg-slate-800 h-screen p-4 fixed"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center mb-6">
            <h2 className="text-2xl font-bold text-white">AutoElite</h2>
          </div>
          <nav className="space-y-2">
            {sidebarItems.map((item, index) => (
              <Link key={index} href={item.href}>
                <Button
                  variant="ghost"
                  className="w-full justify-start text-white hover:bg-primary/10"
                >
                  <item.icon className="h-5 w-5 mr-2" />
                  {item.label}
                </Button>
              </Link>
            ))}
          </nav>
        </motion.aside>

        {/* Sidebar (Mobile) */}
        <Sheet open={isSidebarOpen} onOpenChange={setIsSidebarOpen}>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="md:hidden fixed top-4 left-4 z-50 bg-slate-100 dark:bg-slate-800 text-white"
            >
              <Menu className="h-6 w-6" />
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
              >
                <X className="h-6 w-6" />
              </Button>
            </div>
            <nav className="space-y-2">
              {sidebarItems.map((item, index) => (
                <Link key={index} href={item.href}>
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-white hover:bg-primary/10"
                    onClick={() => setIsSidebarOpen(false)}
                  >
                    <item.icon className="h-5 w-5 mr-2" />
                    {item.label}
                  </Button>
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>

        {/* Main Content */}
        <main className="flex-1 p-4 md:p-8 md:ml-64">
          <motion.div
            className="max-w-7xl mx-auto space-y-8"
            initial="initial"
            animate="animate"
            transition={{ staggerChildren: 0.2 }}
          >
            {/* Welcome Card */}
            <motion.div {...fadeUp}>
              <Card className="bg-slate-100 dark:bg-slate-800">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-white">
                    Welcome, John!
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Manage your favorite cars, orders, and compare vehicles with ease.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Quick Actions */}
            <motion.div {...fadeUp}>
              <Card className="bg-slate-100 dark:bg-slate-800">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-white">
                    Quick Actions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-4">
                    <Button asChild>
                      <Link href="/compare">Compare Favorites</Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <Link href="/cars">Browse Cars</Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <Link href="/spare-parts">Shop Parts</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Favorites Section */}
            <motion.div {...fadeUp} id="favorites">
              <Card className="bg-slate-100 dark:bg-slate-800">
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="text-xl font-bold text-white">
                    Favorite Cars
                  </CardTitle>
                  <Dialog open={isFavoriteModalOpen} onOpenChange={setIsFavoriteModalOpen}>
                    <DialogTrigger asChild>
                      <Button size="sm" onClick={() => setEditFavorite(null)}>
                        <Plus className="h-4 w-4 mr-2" />
                        Add Favorite
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="bg-slate-100 dark:bg-slate-800">
                      <DialogHeader>
                        <DialogTitle className="text-white">
                          {editFavorite ? 'Edit Favorite' : 'Add Favorite'}
                        </DialogTitle>
                      </DialogHeader>
                      <form onSubmit={favoriteForm.handleSubmit(handleFavoriteSubmit)} className="space-y-4">
                        <div>
                          <Label htmlFor="name" className="text-muted-foreground">Car Name</Label>
                          <Input
                            id="name"
                            {...favoriteForm.register('name', { required: 'Car name is required' })}
                            className="bg-slate-200 dark:bg-slate-700 text-white"
                          />
                          {favoriteForm.formState.errors.name && (
                            <p className="text-sm text-destructive mt-1">
                              {favoriteForm.formState.errors.name.message}
                            </p>
                          )}
                        </div>
                        <div>
                          <Label htmlFor="image" className="text-muted-foreground">Image URL (optional)</Label>
                          <Input
                            id="image"
                            {...favoriteForm.register('image')}
                            className="bg-slate-200 dark:bg-slate-700 text-white"
                          />
                        </div>
                        <div className="flex justify-end gap-2">
                          <Button
                            type="button"
                            variant="outline"
                            onClick={() => {
                              setIsFavoriteModalOpen(false);
                              setEditFavorite(null);
                              favoriteForm.reset();
                            }}
                          >
                            Cancel
                          </Button>
                          <Button type="submit">
                            {editFavorite ? 'Update' : 'Add'}
                          </Button>
                        </div>
                      </form>
                    </DialogContent>
                  </Dialog>
                </CardHeader>
                <CardContent>
                  {favorites.length === 0 ? (
                    <p className="text-muted-foreground">
                      No favorite cars yet.{' '}
                      <Link href="/cars" className="text-primary hover:underline">
                        Explore cars
                      </Link>
                      {' '}to add some!
                    </p>
                  ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {favorites.map((car) => (
                        <div
                          key={car.id}
                          className="flex items-center space-x-4 p-4 border rounded-lg"
                        >
                          <Image
                            src={car.image}
                            alt={car.name}
                            width={80}
                            height={60}
                            className="rounded"
                            placeholder="blur"
                            blurDataURL="/cars/placeholder.jpg"
                          />
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold text-white">{car.name}</h3>
                          </div>
                          <div className="flex gap-2">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => handleEditFavorite(car)}
                            >
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => handleDeleteFavorite(car.id)}
                            >
                              <Trash className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>

            {/* Orders Section */}
            <motion.div {...fadeUp} id="orders">
              <Card className="bg-slate-100 dark:bg-slate-800">
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="text-xl font-bold text-white">
                    Recent Orders
                  </CardTitle>
                  <Dialog open={isOrderModalOpen} onOpenChange={setIsOrderModalOpen}>
                    <DialogTrigger asChild>
                      <Button size="sm" onClick={() => setEditOrder(null)}>
                        <Plus className="h-4 w-4 mr-2" />
                        Add Order
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="bg-slate-100 dark:bg-slate-800">
                      <DialogHeader>
                        <DialogTitle className="text-white">
                          {editOrder ? 'Edit Order' : 'Add Order'}
                        </DialogTitle>
                      </DialogHeader>
                      <form onSubmit={orderForm.handleSubmit(handleOrderSubmit)} className="space-y-4">
                        <div>
                          <Label htmlFor="item" className="text-muted-foreground">Item Name</Label>
                          <Input
                            id="item"
                            {...orderForm.register('item', { required: 'Item name is required' })}
                            className="bg-slate-200 dark:bg-slate-700 text-white"
                          />
                          {orderForm.formState.errors.item && (
                            <p className="text-sm text-destructive mt-1">
                              {orderForm.formState.errors.item.message}
                            </p>
                          )}
                        </div>
                        <div>
                          <Label htmlFor="total" className="text-muted-foreground">Total (₦)</Label>
                          <Input
                            id="total"
                            type="text"
                            {...orderForm.register('total', {
                              required: 'Total is required',
                              pattern: { value: /^₦?\d+(,\d{3})*(\.\d+)?$/, message: 'Invalid total format' },
                            })}
                            className="bg-slate-200 dark:bg-slate-700 text-white"
                            placeholder="₦100,000"
                          />
                          {orderForm.formState.errors.total && (
                            <p className="text-sm text-destructive mt-1">
                              {orderForm.formState.errors.total.message}
                            </p>
                          )}
                        </div>
                        <div className="flex justify-end gap-2">
                          <Button
                            type="button"
                            variant="outline"
                            onClick={() => {
                              setIsOrderModalOpen(false);
                              setEditOrder(null);
                              orderForm.reset();
                            }}
                          >
                            Cancel
                          </Button>
                          <Button type="submit">
                            {editOrder ? 'Update' : 'Add'}
                          </Button>
                        </div>
                      </form>
                    </DialogContent>
                  </Dialog>
                </CardHeader>
                <CardContent>
                  {orders.length === 0 ? (
                    <p className="text-muted-foreground">
                      No recent orders.{' '}
                      <Link href="/spare-parts" className="text-primary hover:underline">
                        Shop parts
                      </Link>
                      {' '}to place an order!
                    </p>
                  ) : (
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="text-left text-muted-foreground">
                            <th className="p-2">Order ID</th>
                            <th className="p-2">Item</th>
                            <th className="p-2">Date</th>
                            <th className="p-2">Total</th>
                            <th className="p-2">Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {orders.map((order) => (
                            <tr key={order.id} className="border-t text-white">
                              <td className="p-2">{order.id}</td>
                              <td className="p-2">{order.item}</td>
                              <td className="p-2">{order.date}</td>
                              <td className="p-2">{order.total}</td>
                              <td className="p-2 flex gap-2">
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={() => handleEditOrder(order)}
                                >
                                  <Edit className="h-4 w-4" />
                                </Button>
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={() => handleDeleteOrder(order.id)}
                                >
                                  <Trash className="h-4 w-4" />
                                </Button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </main>
      </div>
    </div>
  );
};

export default DashboardPage;