'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function DashboardRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/studio/dashboard');
  }, [router]);

  return (
    <div className="h-screen flex items-center justify-center bg-black">
      <div className="relative w-12 h-12">
        <div className="absolute inset-0 border-4 border-[#4169E1]/20 rounded-full" />
        <div className="absolute inset-0 border-4 border-transparent border-t-[#4169E1] rounded-full animate-spin" />
      </div>
    </div>
  );
}
