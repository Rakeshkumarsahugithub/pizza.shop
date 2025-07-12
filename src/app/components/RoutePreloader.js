"use client";
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function RoutePreloader() {
  const router = useRouter();

  useEffect(() => {
    // Preload all routes on component mount
    const preloadRoutes = () => {
      // Preload all main routes
      router.prefetch('/');
      router.prefetch('/specials');
      router.prefetch('/about');
      router.prefetch('/contact');
    };

    // Preload routes after a short delay to not block initial render
    const timer = setTimeout(preloadRoutes, 1000);
    
    return () => clearTimeout(timer);
  }, [router]);

  return null; // This component doesn't render anything
} 