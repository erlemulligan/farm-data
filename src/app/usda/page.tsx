import Image from "next/image";
import Button from '@/app/ui/Button';

export default async function UsdaSurveyStates() {
    const res = await fetch('https://api.ers.usda.gov/data/arms/state?api_key=jKvoVGh59o0KwHwtqCLzXjHRbzGJ6JOAAInqpUkB');
    const data = await res.json();

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="z-10 max-w-5xl w-full text-sm">
                <h1 className="text-6xl font-bold mb-8">USDA Survey States</h1>
                {data.data.map((state: any) => (
                    <div key={state.id} className="flex items-center justify-between p-4 border-b border-gray-200">
                        <h2 className="text-2xl font-bold">{state.name}</h2>
                        <Button href={`/usda/${state.name === 'All survey states' ? 'all' : state.name.toLowerCase().replace(' ', '-').trim()}`} target="_self">
                            View
                        </Button>
                    </div>
                ))}
            </div>
        </main>
    );
}