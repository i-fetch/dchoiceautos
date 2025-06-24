'use client';

import React from 'react';
import { motion } from 'framer-motion';

const AnimatedDiv = ({ children, ...props }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedDiv;