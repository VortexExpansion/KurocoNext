import React, { Component, useEffect, useState } from 'react';

export default function CategoryCard({ categories }) {
    console.log('Here');
    console.log(categories);
    const key = 'category_nm' //This is the category name in Kuroco;
    const categoriesList = [...new Map(categories.map(sushi => [sushi[key], sushi])).values()];

    return (
        <>
        <div><br></br><hr></hr></div>
            <div className="container mx-auto p-6 grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:gap-x-8">
                {categoriesList.map((category) => (
                    <div key={category.topics_category_id} className="group odd:bg-teal-100 even:bg-teal-200 hover:bg-emerald-400 hover:text-white rounded-xl text-center col-span-1 flex flex-col bg-white border-2 p-4">
                        <img src={category.ext_col_01+"?crop=16:9"} className="m-4 group-hover:opacity-90"></img>
                        <h1 className="mb-2 font-bold text-3xl group-hover:text-4xl">
                            {category.category_nm}
                        </h1>
                        <p className="text-md">{category.ext_col_02}</p>
                        <br></br>
                        <a href={"/categories/" + category.topics_category_id} className="m-4 mt-auto inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Read more
                            <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </a>
                    </div>
                ))}
            </div>
            <div><hr></hr></div>
        </>
    );
}