// 'use client';

// import React from 'react';
// import { useState } from 'react';
// import { motion } from 'framer-motion';
// import { Button } from '@/components/ui/button';
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
// import { useToast } from '@/components/ui/use-toast';
// import {
//   Home,
//   Heart,
//   ShoppingCart,
//   Car,
//   User,
//   LogOut,
//   Menu,
//   X,
// } from 'lucide-react';
// import Link from 'next/link';
// import Image from 'next/image';

// const fadeUp = {
//   initial: { opacity: 0, y: 40 },
//   animate: { opacity: 1, y: 0 },
//   transition: { duration: 0.6, ease: 'easeOut' },
// };

// const DashboardPage = () => {
//   const { toast } = useToast();
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [favorites, setFavorites] = useState([
//     { id: 1, name: 'BMW M5', image: '/cars/bmw-m5.jpg' },
//     { id: 2, name: 'Mercedes S-Class', image: '/cars/mercedes-sclass.jpg' },
//   ]);

//   const orders = [
//     { id: 'ORD001', date: '2025-05-20', total: '₦150,000' },
//     { id: 'ORD002', date: '2025-05-15', total: '₦85,000' },
//   ];

//   const handleRemoveFavorite = (id) => {
//     setFavorites(favorites.filter((car) => car.id !== id));
//     toast({
//       title: 'Removed from Favorites',
//       description: 'Car has been removed from your favorites.',
//       variant: 'default',
//       duration: 3000,
//     });
//   };

//   // Placeholder auth check
//   const isAuthenticated = true; // Replace with actual auth logic
//   if (!isAuthenticated) {
//     window.location.href = '/login';
//     return null;
//   }

//   const sidebarItems = [
//     { icon: Home, label: 'Dashboard', href: '/dashboard' },
//     { icon: Heart, label: 'Favorites', href: '/dashboard#favorites' },
//     { icon: ShoppingCart, label: 'Orders', href: '/dashboard#orders' },
//     { icon: Car, label: 'Compare Cars', href: '/compare' },
//     { icon: User, label: 'Profile', href: '/profile' },
//     { icon: LogOut, label: 'Logout', href: '/login' },
//   ];

//   return (
//     <div className="min-h-screen bg-slate-900">
//       <div className="flex">
//         {/* Sidebar (Desktop) */}
//         <motion.aside
//           className="hidden md:block w-64 bg-slate-100 dark:bg-slate-800 h-screen p-4 fixed"
//           initial={{ x: -50, opacity: 0 }}
//           animate={{ x: 0, opacity: 1 }}
//           transition={{ duration: 0.6 }}
//         >
//           <div className="flex items-center mb-6">
//             <h2 className="text-2xl font-bold text-white">AutoElite</h2>
//           </div>
//           <nav className="space-y-2">
//             {sidebarItems.map((item, index) => (
//               <Link key={index} href={item.href}>
//                 <Button
//                   variant="ghost"
//                   className="w-full justify-start text-white hover:bg-primary/10"
//                 >
//                   <item.icon className="h-5 w-5 mr-2" />
//                   {item.label}
//                 </Button>
//               </Link>
//             ))}
//           </nav>
//         </motion.aside>

//         {/* Sidebar (Mobile) */}
//         <Sheet open={isSidebarOpen} onOpenChange={setIsSidebarOpen}>
//           <SheetTrigger asChild>
//             <Button
//               variant="outline"
//               size="icon"
//               className="md:hidden fixed top-4 left-4 z-50 bg-slate-100 dark:bg-slate-800 text-white"
//             >
//               <Menu className="h-6 w-6" />
//             </Button>
//           </SheetTrigger>
//           <SheetContent side="left" className="bg-slate-100 dark:bg-slate-800 w-64 p-4">
//             <div className="flex items-center justify-between mb-6">
//               <h2 className="text-2xl font-bold text-white">AutoElite</h2>
//               <Button
//                 variant="ghost"
//                 size="icon"
//                 onClick={() => setIsSidebarOpen(false)}
//                 className="text-white"
//               >
//                 <X className="h-6 w-6" />
//               </Button>
//             </div>
//             <nav className="space-y-2">
//               {sidebarItems.map((item, index) => (
//                 <Link key={index} href={item.href}>
//                   <Button
//                     variant="ghost"
//                     className="w-full justify-start text-white hover:bg-primary/10"
//                     onClick={() => setIsSidebarOpen(false)}
//                   >
//                     <item.icon className="h-5 w-5 mr-2" />
//                     {item.label}
//                   </Button>
//                 </Link>
//               ))}
//             </nav>
//           </SheetContent>
//         </Sheet>

//         {/* Main Content */}
//         <main className="flex-1 p-4 md:p-8 md:ml-64">
//           <motion.div
//             className="max-w-7xl mx-auto space-y-8"
//             initial="initial"
//             animate="animate"
//             transition={{ staggerChildren: 0.2 }}
//           >
//             {/* Welcome Card */}
//             <motion.div {...fadeUp}>
//               <Card className="bg-slate-100 dark:bg-slate-800">
//                 <CardHeader>
//                   <CardTitle className="text-2xl font-bold text-white">
//                     Welcome, John!
//                   </CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <p className="text-muted-foreground">
//                     Explore your dashboard to manage your favorite cars, view orders, and compare vehicles.
//                   </p>
//                 </CardContent>
//               </Card>
//             </motion.div>

//             {/* Quick Actions */}
//             <motion.div {...fadeUp}>
//               <Card className="bg-slate-100 dark:bg-slate-800">
//                 <CardHeader>
//                   <CardTitle className="text-xl font-bold text-white">
//                     Quick Actions
//                   </CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <div className="flex flex-wrap gap-4">
//                     <Button asChild>
//                       <Link href="/compare">Compare Cars</Link>
//                     </Button>
//                     <Button variant="outline" asChild>
//                       <Link href="/cars">Browse Cars</Link>
//                     </Button>
//                     <Button variant="outline" asChild>
//                       <Link href="/spare-parts">Shop Parts</Link>
//                     </Button>
//                   </div>
//                 </CardContent>
//               </Card>
//             </motion.div>

//             {/* Favorites Section */}
//             <motion.div {...fadeUp} id="favorites">
//               <Card className="bg-slate-100 dark:bg-slate-800">
//                 <CardHeader>
//                   <CardTitle className="text-xl font-bold text-white">
//                     Favorite Cars
//                   </CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   {favorites.length === 0 ? (
//                     <p className="text-muted-foreground">
//                       No favorite cars yet.{' '}
//                       <Link href="/cars" className="text-primary hover:underline">
//                         Explore cars
//                       </Link>
//                       {' '}to add some!
//                     </p>
//                   ) : (
//                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                       {favorites.map((car) => (
//                         <div
//                           key={car.id}
//                           className="flex items-center space-x-4 p-4 border rounded-lg"
//                         >
//                           <Image
//                             src={car.image}
//                             alt={car.name}
//                             width={80}
//                             height={60}
//                             className="rounded"
//                             placeholder="blur"
//                             blurDataURL="/cars/placeholder.jpg"
//                           />
//                           <div className="flex-1">
//                             <h3 className="text-lg font-semibold text-white">{car.name}</h3>
//                           </div>
//                           <Button
//                             variant="outline"
//                             size="sm"
//                             onClick={() => handleRemoveFavorite(car.id)}
//                           >
//                             Remove
//                           </Button>
//                         </div>
//                       ))}
//                     </div>
//                   )}
//                 </CardContent>
//               </Card>
//             </motion.div>

//             {/* Recent Orders */}
//             <motion.div {...fadeUp} id="orders">
//               <Card className="bg-slate-100 dark:bg-slate-800">
//                 <CardHeader>
//                   <CardTitle className="text-xl font-bold text-white">
//                     Recent Orders
//                   </CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   {orders.length === 0 ? (
//                     <p className="text-muted-foreground">
//                       No recent orders.{' '}
//                       <Link href="/spare-parts" className="text-primary hover:underline">
//                         Shop parts
//                       </Link>
//                       {' '}to place an order!
//                     </p>
//                   ) : (
//                     <div className="overflow-x-auto">
//                       <table className="w-full">
//                         <thead>
//                           <tr className="text-left text-muted-foreground">
//                             <th className="p-2">Order ID</th>
//                             <th className="p-2">Date</th>
//                             <th className="p-2">Total</th>
//                           </tr>
//                         </thead>
//                         <tbody>
//                           {orders.map((order) => (
//                             <tr key={order.id} className="border-t text-white">
//                               <td className="p-2">{order.id}</td>
//                               <td className="p-2">{order.date}</td>
//                               <td className="p-2">{order.total}</td>
//                             </tr>
//                           ))}
//                         </tbody>
//                       </table>
//                     </div>
//                   )}
//                 </CardContent>
//               </Card>
//             </motion.div>
//           </motion.div>
//         </main>
//       </div>
//     </div>
//   );
// };

// export default DashboardPage;