// src/components/Analytics.tsx
'use client';
import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

type AnalyticsProps = { gaId?: string };

export default function Analytics({ gaId }: AnalyticsProps): null {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const GA = gaId || process.env.NEXT_PUBLIC_GA_ID;
    if (!GA) return;
    const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '');
    window.gtag?.('config', GA, { page_path: url });
  }, [gaId, pathname, searchParams]);

  return null;
}