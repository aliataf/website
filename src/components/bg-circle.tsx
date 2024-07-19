import { ReactNode } from 'react';

interface BgCircleProps {
  readonly children?: ReactNode;
  readonly className: string;
}

export function BgCircle({ children, className }: BgCircleProps) {
  return (
    <div
      className={`bg-primary-light -translate-x-12 justify-center pl-10 md:pl-28 rounded-full w-[14rem] md:w-[24rem] h-[14rem] md:h-[24rem] ${className}`}
    >
      {children}
    </div>
  );
}
