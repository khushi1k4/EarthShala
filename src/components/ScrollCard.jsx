import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const ScrollCard = ({ children, className, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100, rotate: 15 }}
      animate={isInView ? { opacity: 1, y: 0, rotate: 0 } : {}}
      transition={{ duration: 1.5, ease: 'easeOut', delay: 0.2 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};



export default ScrollCard;
