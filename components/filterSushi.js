import React, { Component, useEffect, useState } from 'react';
import { SushiCard } from './allSushi';

export default function FilterSushi({data}) {

    const [dataSushi, setDataSushi] = useState(data);
    const [isLoading, setIsLoading] = useState(false);
    const [err, setErr] = useState('');
    const [searchKey, setSearchKey] = useState('');

    function handleChange(e) {
                setSearchKey(e.target.value);
            }

    const handleClick = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const response = await fetch(`https://sushipedia.g.kuroco.app/rcms-api/3/fetchSushi?filter=subject%20icontains%20"${searchKey}"`, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error(`Error! status: ${response.status}`);
            }

            const result = await response.json();

            setDataSushi(result.list);
        } catch (err) {
            setErr(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    // console.log(dataSushi);

    return (
        <div>
            {err && <h2>{err}</h2>}
            <form onSubmit={handleClick}>
                <input
                    type="text"
                    value={searchKey}
                    onChange={handleChange}
                    placeholder="Search by Sushi Name"
                />
                <button>Submit</button>
            </form>

            {isLoading && <h2>Loading...</h2>}
        <SushiCard data={dataSushi}/>
        </div>
    );
}

