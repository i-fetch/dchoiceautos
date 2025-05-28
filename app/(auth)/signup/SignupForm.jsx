'use client';

import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Mail, Lock, User } from 'lucide-react';
import Link from 'next/link';

const RegisterForm = () => {
  const { toast } = useToast();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    setErrors({ ...errors, [e.target.id]: '' });
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.fullName || formData.fullName.length < 2) {
      newErrors.fullName = 'Full name must be at least 2 characters';
    }

    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }

    if (!formData.password || formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (!formData.confirmPassword || formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      toast({
        title: 'Sign Up Failed',
        description: 'Please fill in your.',
        variant: 'destructive',
        duration: 3000,
      });
      return;
    }

    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Registration failed');
      }

      toast({
        title: 'Sign Up Successful',
        description: 'Your account has been created!',
        variant: 'default',
        duration: 3000,
      });

      // Reset form
      setFormData({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
      setErrors({});
    } catch (error) {
      toast({
        title: 'Sign Up Failed',
        description: error.message || 'An error occurred during registration.',
        variant: 'destructive',
        duration: 3000,
      });
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const fieldVariants = {
    hidden: { opacity: 0, x: 8 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: 'easeOut' } },
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
            <CardTitle className="text-2xl font-bold text-center text-white">Sign Up</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <motion.div variants={fieldVariants}>
                <Label htmlFor="fullName" className="text-muted-foreground">Full Name</Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="fullName"
                    type="text"
                    placeholder="John Doe"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="pl-10 bg-slate-200 dark:bg-slate-700 text-white"
                  />
                </div>
                {errors.fullName && (
                  <p className="text-sm text-destructive mt-1">{errors.fullName}</p>
                )}
              </motion.div>

              <motion.div variants={fieldVariants}>
                <Label htmlFor="email" className="text-muted-foreground">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="pl-10 bg-slate-200 dark:bg-slate-700 text-white"
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
                    value={formData.password}
                    onChange={handleChange}
                    className="pl-10 bg-slate-200 dark:bg-slate-700 text-white"
                  />
                </div>
                {errors.password && (
                  <p className="text-sm text-destructive mt-1">{errors.password}</p>
                )}
              </motion.div>

              <motion.div variants={fieldVariants}>
                <Label htmlFor="confirmPassword" className="text-muted-foreground">Confirm Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="confirmPassword"
                    type="password"
                    placeholder="••••••••"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="pl-10 bg-slate-200 dark:bg-slate-700 text-white"
                  />
                </div>
                {errors.confirmPassword && (
                  <p className="text-sm text-destructive mt-1">{errors.confirmPassword}</p>
                )}
              </motion.div>

              <motion.div variants={fieldVariants}>
                <Button type="submit" className="w-full bg-primary">
                  Sign Up
                </Button>
              </motion.div>
            </form>

            <motion.div variants={fieldVariants} className="mt-4 text-center">
              <p className="text-sm text-muted-foreground">
                Already have an account?{' '}
                <Link href="/login" className="text-primary hover:underline">
                  Login
                </Link>
              </p>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default RegisterForm;