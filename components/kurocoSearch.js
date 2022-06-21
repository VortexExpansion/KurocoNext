import React, { Component, useEffect, useState } from 'react';
import { unstable_renderSubtreeIntoContainer } from 'react-dom';
import { SushiCard } from './sushiCard';

export default function KurocoSearch({ data }) {

    const [dataSushi, setDataSushi] = useState(data);
    const [isLoading, setIsLoading] = useState(false);
    const [err, setErr] = useState('');
    const [searchKey, setSearchKey] = useState('');
    var result;

    function handleChange(e) {
        setSearchKey(e.target.value);
    }

    function arrayUnique(array) {
        var a = array.concat();
        for(var i=0; i<a.length; ++i) {
            for(var j=i+1; j<a.length; ++j) {
                if(a[i] === a[j])
                    a.splice(j--, 1);
            }
        }
    
        return a;
    }

    const handleClick = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            let [responseSubject, responseCategory] = await Promise.all([
                fetch(`https://sushipedia.g.kuroco.app/rcms-api/3/fetchSushi?filter=subject%20icontains%20"${searchKey}"`),
                fetch(`https://sushipedia.g.kuroco.app/rcms-api/3/fetchSushi?contents_type_nm=${searchKey}`)
            ]);

            var subject = await responseSubject.json();
            var category = await responseCategory.json();

            var searchResults = subject.list.concat(category.list);
            var refinedResults = [... new Set(searchResults.map(JSON.stringify))].map(JSON.parse)

            setDataSushi(refinedResults);
        } catch (err) {
            setErr(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div>
            {err && <h2>{err}</h2>}
            <br></br>

            <form noValidate onSubmit={handleClick}>
                <label htmlFor="default-search" className=" mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
                <div className="relative mx-20">
                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </div>
                    <input 
                    type="search" 
                    id="default-search" 
                    className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                    placeholder="Search by Sushi name, Category..." 
                    required
                    value={searchKey}
                    onChange={handleChange}
                    />
                        <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                </div>
            </form>
            <br></br>
            {isLoading && <h2 className='text-white pl-4 flex justify-center text-lg'>Fetching results...</h2>}
            <SushiCard data={dataSushi} />
        </div>
    );
}

