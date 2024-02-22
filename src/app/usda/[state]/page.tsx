'use client';

import { usePathname, useParams } from 'next/navigation';

export default function UsdaState() {
    const pathName = usePathname();
    const params = useParams();
    const stateName = decodeURI(params.state.toString().replace('-', ' '));
    const stateNameCapitalized = stateName.replace(/\b\w/g, l => l.toUpperCase());

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="z-10 max-w-5xl w-full text-sm">
                <h1 className="text-6xl font-bold mb-8">{stateNameCapitalized}</h1>
                <h2 className="text-2xl font-bold">path: {pathName}</h2>
            </div>
        </main>
    );
}