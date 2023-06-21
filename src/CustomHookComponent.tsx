import React, { useState, useEffect, useMemo } from 'react';

export interface Beverage {
    name: string;
    producerName: string;
    beverageName: string;
    beverageColor: string;
    beverageStyle: string;
    producerLocation: string;
    abv: number;
    ibu: number;
    logo: string;
    level: number;
}

function useFetch(url: string) {
    const [data, setData] = useState<Beverage[] | null>(null);
    const [done, setDone] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetch(url)
            .then((resp) => {
                if (!resp.ok) {
                    throw new Error(resp.statusText);
                }
                return resp.json();
            })
            .then((data: Beverage[]) => {
                setData(data);
                setDone(true);
            })
            .catch(error => setError(error.message));
    }, [url]);

    return { data, done, error };
}

function CustomHookComponent() {
    const { data, error } = useFetch("/hv-taplist.json");
    const portlandTaps = useMemo(() => (data || []).filter((bev) => bev.producerLocation.includes("Portland")), [data]);

    return (
        <div>
            {error && <div>Error: {error}</div>}
            {portlandTaps && portlandTaps.length > 5 && (
                <img src={portlandTaps[5].logo} alt="Beverage logo"/>
            )}
        </div>
    )
}

export default CustomHookComponent;
