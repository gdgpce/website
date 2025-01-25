'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Loading from './Loading';

export default function LoadingOverlay() {
    const [isAnimating, setAnimating] = useState(true); // Start with loading animation on initial load
    const pathname = usePathname();

    useEffect(() => {
        // Handle initial load
        const timeout = setTimeout(() => setAnimating(false), 6000); // Show animation for 6 seconds on initial load

        return () => clearTimeout(timeout); // Clean up timeout on unmount
    }, []);

    useEffect(() => {
        // Handle route changes
        if (!isAnimating) {
            setAnimating(true);
            const timeout = setTimeout(() => setAnimating(false), 3000); // Show animation for 6 seconds on route change

            return () => clearTimeout(timeout); // Clean up timeout on unmount
        }
    }, [pathname]);

    return isAnimating ? <Loading /> : null;
}
