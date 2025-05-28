'use client';

import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from "@/hooks/use-toast";
import { Mail, Lock } from 'lucide-react';
import Link from 'next/link';

const LoginForm = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const fieldVariants = {
    hidden: { opacity: 0, x: 8 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: 'easeOut' } },
  };

  const validateForm = () => {
    const newErrors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!emailPattern.test(email)) {
      newErrors.email = 'Invalid email address';
    }

    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Simulated login success
      toast({
        title: 'Login Successful',
        description: 'Welcome back!',
        variant: 'default',
        duration: 3000,
      });
    } else {
      toast({
        title: 'Login Failed',
        description: 'Please check the fields and try again.',
        variant: 'destructive',
        duration: 3000,
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 px-4 py-12">
      <motion.div
        ref={ref}
        variants={cardVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="w-full max-w-md"
      >
        <Card className="bg-slate-100 dark:bg-slate-800">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center text-white">Login</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <motion.div variants={fieldVariants}>
                <Label htmlFor="email" className="text-muted-foreground">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    className="pl-10 bg-slate-200 dark:bg-slate-700 text-white"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                {errors.email && (
                  <p className="text-sm text-destructive mt-1">{errors.email}</p>
                )}
              </motion.div>

              <motion.div variants={fieldVariants}>
                <Label htmlFor="password" className="text-muted-foreground">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    className="pl-10 bg-slate-200 dark:bg-slate-700 text-white"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                {errors.password && (
                  <p className="text-sm text-destructive mt-1">{errors.password}</p>
                )}
              </motion.div>

              <motion.div variants={fieldVariants} className="flex justify-between items-center">
                <Link href="/auth/forgot-password" className="text-sm text-primary hover:underline">
                  Forgot Password?
                </Link>
              </motion.div>

              <motion.div variants={fieldVariants}>
                <Button type="submit" className="w-full bg-primary">
                  Login
                </Button>
              </motion.div>
            </form>

            <motion.div variants={fieldVariants} className="mt-4 text-center">
              <p className="text-sm text-muted-foreground">
                Don&apos;t have an account?{' '}
                <Link href="/signup" className="text-primary hover:underline">
                  Sign Up
                </Link>
              </p>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default LoginForm;
