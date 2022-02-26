import clsx from 'clsx';
import { ReactNode } from 'react';

interface BgCircleProps {
  width?: string;
  height?: string;
  children?: ReactNode | ReactNode[];
  animate?: boolean;
  doubleBorder?: boolean;
}

export default function BgCircle({
  width = '24rem',
  height = '24rem',
  children,
  animate,
  doubleBorder,
}: BgCircleProps) {
  return (
    <div className='relative' style={{ width, height }}>
      <div
        className={clsx(
          'bg-primary-light flex absolute -left-12 flex-col justify-center pl-28 rounded-full',
          { 'border-[44px] border-accent': doubleBorder }
        )}
        style={{ width, height, scale: animate ? 0 : 1 }}
      >
        {children}
      </div>
    </div>
  );
}
