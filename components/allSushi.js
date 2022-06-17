import React, { Component, useEffect, useState } from 'react';

export function SushiCard({ data }) { // Using tailwind CSS
    return (
        <>
            <div >
                <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                    <div className=" grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                        {data.map((sushi) => (
                            <div key={sushi.topics_id} className=" group text-center border rounded-lg bg-gray-100 hover:bg-gray-200">
                                <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                                    <img src={sushi.ext_1.url+"?crop=2:3"} alt="image" className="w-full h-full object-center object-cover group-hover:opacity-75" />
                                </div>
                                <p className="bg-teal-400 mt-1 text-lg font-medium text-gray-900 group-hover:text-2xl">{sushi.ext_2}</p>
                                <h3 className="mt-4 text-sm text-gray-700">{sushi.ext_4}</h3>
                                <h3 className="mt-4 text-sm text-gray-700">{sushi.ext_3}</h3>
                                <p className="mt-auto text-lg font-medium text-gray-900">{sushi.contents_type_nm}</p>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </>
    );
}

export default function SushiList({ data }) {

    const [searchKey, setSearchKey] = useState('');
    const filteredItems = data.filter(sushi =>
        sushi.subject.toLowerCase().includes(searchKey.toLowerCase()) ||
        sushi.contents_type_nm.toLowerCase().includes(searchKey.toLowerCase())
    );

    function handleSearchKeyChange(e) {
        setSearchKey(e.target.value);
    }

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
                    value={searchKey}
                    onChange={handleSearchKeyChange}
                    />
                </div>
            <SushiCard data={filteredItems} />
        </>
    );
}