'use client';

import React, { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { motion, useInView } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Mail, Lock } from 'lucide-react';
import { signIn } from 'next-auth/react';
import { toast } from 'sonner';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const router = useRouter();

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
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      toast({
        title: 'Login Failed',
        description: 'Please check the fields and try again.',
        variant: 'destructive',
        duration: 3000,
      });
      return;
    }

    setLoading(true);

    // Sign in with next-auth credentials provider
    const res = await signIn('credentials', {
      redirect: false,
      email,
      password,
    });

    if (res.error) {
      toast({
        title: 'Login Failed',
        description: res.error || 'Invalid credentials.',
        variant: 'destructive',
      });
    } else if (res.ok) {
      toast({
        title: 'Login Successful',
        description: 'Welcome back!',
      });
      router.push('/dashboard'); // Update to your post-login page
    }

    setLoading(false);
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
            <CardTitle className="text-2xl font-bold text-center text-slate-900 dark:text-white">
              Login
            </CardTitle>
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
                    placeholder="autoparts@gmail.com"
                    className="pl-10 bg-slate-200 dark:bg-slate-700 text-white"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="email"
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
                    placeholder="thegoodstuff"
                    className="pl-10 bg-slate-200 dark:bg-slate-700 text-white"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="current-password"
                  />
                </div>
                {errors.password && (
                  <p className="text-sm text-destructive mt-1">{errors.password}</p>
                )}
              </motion.div>


              <motion.div variants={fieldVariants}>
                <Button type="submit" className="w-full bg-primary" disabled={loading}>
                  {loading ? 'Logging in...' : 'Login'}
                </Button>
              </motion.div>
            </form>


          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default LoginForm;
