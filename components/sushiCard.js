import React, { Component, useEffect, useState } from 'react';

export function SushiCard({ data }) { // Using tailwind CSS
    return (
        <>
            <div >
                <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                    <div className=" grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                        {data.map((sushi,item) => (
                            <div key={item} className=" group text-center border rounded-lg bg-gray-100 hover:bg-gray-200">
                                <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                                    <img src={sushi.ext_1.url+"?crop=2:3"} alt="image" className="w-full h-full object-center object-cover group-hover:opacity-75" />
                                </div>
                                <p className="bg-teal-400 mt-1 text-lg font-medium text-gray-900 group-hover:text-2xl">{sushi.ext_2}</p>
                                <h3 className="mt-4 text-sm text-gray-700">{sushi.ext_4}</h3>
                                <h3 className="mt-4 text-sm text-gray-700">{sushi.ext_3}</h3>
                                <p className="mt-auto text-lg font-medium text-gray-900">{sushi.contents_type_nm}</p>

                                {/* Tags */}
                                <div className="flex flex-wrap justify-center space-x-2">
                                {sushi.tags.map((tag,tagItem)=> (
                                    <span key={tagItem} className="m-1 px-4 py-2 rounded-full text-gray-500 bg-gray-200 font-semibold text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease">
                                        {tag.tag_nm}
                                    </span>
                                ))}
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </>
    );
}