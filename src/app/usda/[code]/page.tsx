'use client';

import { usePathname } from 'next/navigation';

export default function UsdaState() {
    const pathName = usePathname();

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="z-10 max-w-5xl w-full text-sm">
                <h1 className="text-6xl font-bold mb-8">State</h1>
                <h2 className="text-2xl font-bold">{pathName}</h2>
            </div>
        </main>
    );
}