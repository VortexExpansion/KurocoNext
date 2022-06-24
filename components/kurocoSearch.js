import React, { Component, useEffect, useState } from 'react';
import { unstable_renderSubtreeIntoContainer } from 'react-dom';
import { SushiCard } from './sushiCard';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'

export default function KurocoSearch({ data, pageInfo, tag }) {

    const [dataSushi, setDataSushi] = useState(data);
    const [allSushi, setAllSushi] = useState(data);
    const [allPage, setAllPage] = useState(pageInfo);
    const [isLoading, setIsLoading] = useState(false);
    const [err, setErr] = useState('');
    const [searchKey, setSearchKey] = useState('');
    const [page, setPage] = useState(pageInfo);
    const [activeTag, setActiveTag] = useState(false);
    const [tagID, setTagID] = useState(0);
    const [currPageNo, setCurrPageNo] = useState(1);


    function handleChange(e) {
        setActiveTag(false);
        setSearchKey(e.target.value);
    }

    const handlePage = async (pageNumber) => {

        setCurrPageNo(pageNumber);
        try {
            var res;
            if (activeTag == true) {
                let [response] = await Promise.all([
                    fetch(`https://sushipedia.g.kuroco.app/rcms-api/3/fetchSushi?pageID=${pageNumber}&tag_id%5B%5D=${tagID}`),
                ]);
                res = await response.json();
            }
            else {
                let [response] = await Promise.all([
                    fetch(`https://sushipedia.g.kuroco.app/rcms-api/3/fetchSushi?pageID=${pageNumber}&filter=subject%20icontains%20"${searchKey}"`),
                ]);
                res = await response.json();
            }
            setDataSushi(res.list);
            setPage(res.pageInfo);

        } catch (err) {
            setErr(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    const handleTagClick = async (ID) => {
        setActiveTag(true);
        if (ID == 7) {
            setDataSushi(allSushi);
            setPage(allPage);
            setActiveTag(false);
        }
        else {
            try {
                let [response] = await Promise.all([
                    fetch(`https://sushipedia.g.kuroco.app/rcms-api/3/fetchSushi?tag_id%5B%5D=${ID}`)
                ]);

                var filteredData = await response.json();
                setDataSushi(filteredData.list);
                setPage(filteredData.pageInfo);
                setTagID(ID);

            } catch (err) {
                setErr(err.message);
            }
        }
    }

    const handleClick = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setActiveTag(false);

        try {
            let [response] = await Promise.all([
                fetch(`https://sushipedia.g.kuroco.app/rcms-api/3/fetchSushi?contents_type_nm=${searchKey}&filter=subject%20icontains%20"${searchKey}"`)
            ]);

            var results = await response.json();

            setDataSushi(results.list);
            setPage(results.pageInfo);
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

            {/* FILTER SEARCH */}
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

            {/* TAG SEARCH */}
            <div className='relative mx-20'>
                {tag.map((tag, item) => (
                    <button key={item} onClick={() => handleTagClick(tag.tag_id)} className="border border-indigo-500 m-1 py-2 rounded-full h-10 px-5 transition-colors duration-150 bg-white focus:bg-blue-500 focus:text-white hover:bg-blue-200">
                        {tag.tag_nm}
                    </button>
                ))}
            </div>

            <SushiCard data={dataSushi} />

            <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
                <div className="flex-1 flex justify-between sm:hidden">
                    <button
                        disabled={currPageNo <= 1}
                        onClick={() => handlePage(currPageNo-1)}
                        className="hover:bg-indigo-50 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white">
                        Previous
                    </button>
                    <button
                        disabled={currPageNo >= page.totalPageCnt}
                        onClick={() => handlePage(currPageNo+1)}
                        className="hover:bg-indigo-50  ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white ">
                        Next
                    </button>
                </div>
                <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                    <div>
                        <p className="text-sm text-gray-700">
                            Showing <span className="font-medium">{page.firstIndex}</span> to <span className="font-medium">{page.lastIndex}</span> of{' '}
                            <span className="font-medium">{page.totalCnt}</span> results
                        </p>
                    </div>
                    <div>
                        <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                            <button disabled={currPageNo <= 1} onClick={() => handlePage(currPageNo-1)} 
                            className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                                <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                            </button>

                            {[...Array(page.totalPageCnt).keys()].map((pageNo) => (
                                <button key={pageNo} onClick={() => handlePage(pageNo + 1)}
                                    className={`${currPageNo === pageNo+1?"z-10 bg-indigo-50 border-indigo-500 text-indigo-600":"bg-white border-gray-300 text-gray-500 hover:bg-gray-50"}relative inline-flex items-center px-4 py-2 border text-sm font-medium`}>
                                    {pageNo + 1}
                                </button>
                            ))}

                            <button disabled={currPageNo >= page.totalPageCnt} onClick={() => handlePage(currPageNo+1)}
                            className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                                <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                            </button>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
}

