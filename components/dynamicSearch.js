import React, { Component, useCallback, useEffect, useState } from 'react';
import { SushiCard } from "./sushiCard";
import debounce from 'lodash.debounce';

export default function DynamicSearch({ data }) {

    const [searchKey, setSearchKey] = useState('');
    let filteredItems = data;

    if(searchKey!==""){
        filteredItems = data.filter(sushi =>
            sushi.subject.toLowerCase().includes(searchKey.toLowerCase()) ||
            sushi.contents_type_nm.toLowerCase().includes(searchKey.toLowerCase())
        );
    }
    
    const handleSearchKeyChange = event => {
        setSearchKey(event.target.value);
      };

    const debouncedChangeHandler = useCallback(debounce(handleSearchKeyChange, 300), []);  

    return (
        <>
            <br></br>
                <label htmlFor="default-search" className=" mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
                <div className="relative mx-20">
                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </div>
                    <input 
                    type="search" 
                    id="default-search" 
                    className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                    placeholder="Start typing a Sushi name..." 
                    required
                    onChange={debouncedChangeHandler}
                    />
                </div>
            <SushiCard data={filteredItems} />
        </>
    );
}