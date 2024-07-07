import clsx from 'clsx';
import { ReactNode } from 'react';

interface BgCircleProps {
  readonly children?: ReactNode;
  readonly doubleBorder?: boolean;
  readonly className: string;
}

export function BgCircle({ children, doubleBorder, className }: BgCircleProps) {
  return (
    <div
      className={clsx(
        'bg-primary-light -translate-x-12 justify-center pl-10 md:pl-28 rounded-full',
        { 'border-[44px] border-accent': doubleBorder },
        'w-[14rem] md:w-[24rem] h-[14rem] md:h-[24rem]',
        className,
      )}
    >
      {children}
    </div>
  );
}
