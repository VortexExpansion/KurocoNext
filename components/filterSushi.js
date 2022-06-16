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
            <br></br>
            <form className='group m-4 flex justify-center' onSubmit={handleClick}>
                <span className="mx-1 bg-white py-1 pl-3 pr-3 rounded-md ">
                <svg className="h-12 w-6 fill-slate-500" fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="50px" height="50px"><path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"/></svg>
                </span>
                <input
                    type="text"
                    size={100}
                    value={searchKey}
                    onChange={handleChange}
                    placeholder="Search by Sushi Name..."
                    className='placeholder:italic placeholder:text-slate-400 border rounded-md py-2 pl-9 pr-3 focus:outline focus:border-sky-500 '
                />
                <button className='mx-1 bg-sky-300 text-black hover:bg-sky-400 hover:text-white py-3 pl-6 pr-6 rounded-xl'>SUBMIT</button>
            </form>

            {isLoading && <h2 className='text-white pl-4 flex justify-center'>Fetching results...</h2>}
        <SushiCard data={dataSushi}/>
        </div>
    );
}

