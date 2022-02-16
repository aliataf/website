import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface BgCircleProps {
  width?: string;
  height?: string;
  children?: ReactNode | ReactNode[];
  animate?: boolean;
}

export default function BgCircle({
  width = '24rem',
  height = '24rem',
  children,
  animate,
}: BgCircleProps) {
  return (
    <div className='relative' style={{ width, height }}>
      <motion.div
        className='bg-primary-light flex absolute -left-12 flex-col justify-center pl-28 rounded-full'
        style={{ width, height, scale: animate ? 0 : 1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    </div>
  );
}
