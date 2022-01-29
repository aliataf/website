import { ReactNode } from 'react';

interface BgCircleProps {
  width?: string;
  height?: string;
  children?: ReactNode | ReactNode[];
}

export default function BgCircle({
  width = '24rem',
  height = '24rem',
  children,
}: BgCircleProps) {
  return (
    <div className='relative' style={{ width, height }}>
      <div
        className='bg-primary-light flex absolute -left-12 flex-col justify-center pl-28 rounded-full'
        style={{ width, height }}
      >
        {children}
      </div>
    </div>
  );
}
