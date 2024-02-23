import { usePathname } from 'next/navigation';

export const getUsdaStateData = async (state: string) => {
    const res = await fetch(`https://api.ers.usda.gov/data/arms/surveydata?api_key=jKvoVGh59o0KwHwtqCLzXjHRbzGJ6JOAAInqpUkB&&year=2022&state=${state}&report=Farm%20Business%20Income%20Statement&variable=igcfi`);
    const data = await res.json();

    return data;
}

const UsdaState = async (props: any) => {
    const state = props.params.state.replace('-', ' ') || 'All';
    const data = await getUsdaStateData(state);

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="z-10 max-w-5xl w-full text-sm">
                <h1 className="text-6xl font-bold mb-8">{state}</h1>
                    {data ? (
                    <><h2 className="text-2xl font-bold">Data Summary</h2><table className="w-full">
                        <thead>
                            <tr>
                                <th>Year</th>
                                <th>State</th>
                                <th>Report</th>
                                <th>Farm Type</th>
                                <th>Estimate</th>
                                <th>Median</th>
                                <th>Statistic</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.data.map((item: any) => (
                                <tr key={item.id}>
                                    <td>{item.year}</td>
                                    <td>{item.state}</td>
                                    <td>{item.report}</td>
                                    <td>{item.farmtype}</td>
                                    <td>{item.estimate}</td>
                                    <td>{item.median}</td>
                                    <td>{item.statistic}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table></>) : (
                        <h2 className="text-2xl font-bold">No Data Found</h2>
                    )}

                    {data && (
                        <pre className='text-xs'>{JSON.stringify(data, null, "\t")}</pre>
                    )}
            </div>
        </main>
    );
}

export default UsdaState;