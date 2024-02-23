import { usePathname } from 'next/navigation';

export const getUsdaStateData = async (state: string) => {
    const res = await fetch(`https://api.ers.usda.gov/data/arms/surveydata?api_key=jKvoVGh59o0KwHwtqCLzXjHRbzGJ6JOAAInqpUkB&&year=2022&state=${state}&report&variable=igcfi`);
    const data = await res.json();

    return data;
}

const UsdaState = async (props: any) => {
    const state = props.params.state || 'All';
    const data = await getUsdaStateData(state);

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="z-10 max-w-5xl w-full text-sm">
                <h1 className="text-6xl font-bold mb-8">{state}</h1>
                    <h2 className="text-2xl font-bold">Data</h2>

                    {data && (
                        <pre>{JSON.stringify(data, null, "\t")}</pre>
                    )}
            </div>
        </main>
    );
}

export default UsdaState;