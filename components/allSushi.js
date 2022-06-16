import React, { Component, useEffect, useState } from 'react';

// export function SushiCard({data}) {
//   return (
//       <>
//           <br></br>
//           <div>
//               {data.map((sushi) => (
//                   <div className="allCard" key={sushi.topics_id}>
//                       <img src={sushi.ext_1.url} className="imagebg"></img>
//                       <h1>{sushi.ext_2}</h1>
//                       <h3>{sushi.ext_4}</h3>
//                       <h3>{sushi.ext_3}</h3>
//                       <div id="all">
//                           <h1>{sushi.contents_type_nm}</h1>
//                       </div>
//                   </div>
//               ))}
//               <hr></hr>
//           </div>
//       </>
//   );
// }

export function SushiCard({ data }) { // Using tailwind CSS
    return (
        <>
            <div >
                <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                    <div className=" grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                        {data.map((sushi) => (
                            <a key={sushi.topics_id} href="#" className=" group text-center border rounded-lg bg-gray-100 hover:bg-gray-200">
                                <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                                    <img src={sushi.ext_1.url} alt="image" className="w-full h-full object-center object-cover group-hover:opacity-75" />
                                </div>
                                <p className="mt-1 text-lg font-medium text-gray-900 group-hover:text-2xl">{sushi.ext_2}</p>
                                <h3 className="mt-4 text-sm text-gray-700">{sushi.ext_4}</h3>
                                <h3 className="mt-4 text-sm text-gray-700">{sushi.ext_3}</h3>
                                <p className="mt-1 text-lg font-medium text-gray-900">{sushi.contents_type_nm}</p>
                            </a>
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

            {/* <div className="flex justify-center">
            <span className="mx-1 bg-white py-1 pl-3 pr-3 rounded-md">
                <svg className="h-10 w-6 fill-slate-500" fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="50px" height="50px"><path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z" /></svg>
            </span>
            <input
                size={100}
                type="text"
                value={searchKey}
                onChange={handleSearchKeyChange}
                placeholder="Start typing a Sushi Name..."
                className='placeholder:italic placeholder:text-slate-400 border rounded-md py-2 pl-9 pr-3 focus:outline focus:border-sky-500 '
            />
            </div> */}
            <SushiCard data={filteredItems} />
        </>
    );
}