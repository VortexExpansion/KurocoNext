import React, { Component, useEffect, useState } from 'react';

export default function CategoryCard({ data }) {

    const key = 'contents_type_nm' //This is the category name in Kuroco;
    const categoriesList = [...new Map(data.map(sushi => [sushi[key], sushi])).values()];

    return (
        <>
            {/* <br></br>
            <div>
                {categoriesList.map((category) => (
                    <div className=" wrapthis text-center relative inline-block group m-2 p-6 space-y-3 odd:bg-teal-100 even:bg-teal-200 rounded-xl max-w-md hover:bg-teal-400" key={category.contents_type}>
                        <a className='absolute' href={"/categories/" + category.contents_type}></a>
                        <img src={category.contents_type_ext_col_01} className="mx-auto "></img>
                        <h1 className='text-3xl font-medium text-black group-hover:text-white'>{category.contents_type_nm}</h1>
                        <h3 className='text-slate-500 group-hover:text-white'>{category.contents_type_ext_col_02}</h3>
                    </div>
                ))}
                <hr></hr>
            </div> */}

        <div><br></br><hr></hr></div>
            <div class="container mx-auto p-6 grid grid-cols-3 gap-8">
                {categoriesList.map((category) => (
                    <div class="group odd:bg-teal-100 even:bg-teal-200 hover:bg-emerald-400 hover:text-white rounded-xl text-center col-span-1 flex flex-col bg-white border-2 p-4">
                        <img src={category.contents_type_ext_col_01} className="m-4 group-hover:opacity-90"></img>
                        <h1 class="mb-2 font-bold text-3xl group-hover:text-4xl">
                            {category.contents_type_nm}
                        </h1>
                        <p class="text-md">{category.contents_type_ext_col_02}</p>
                        <br></br>
                        <a href={"/categories/" + category.contents_type} class="m-4 mt-auto inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Read more
                            <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </a>
                    </div>
                ))}
            </div>
            <div><hr></hr></div>
        </>
    );
}