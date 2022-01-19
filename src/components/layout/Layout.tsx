import * as React from 'react';

import Header from '@/components/layout/Header';

export default function Layout({ children }: { children: React.ReactNode }) {
  // Put Header or Footer Here
  return (
    <div className='bg-primary text-white'>
      <Header />
      {children}
    </div>
  );
}
