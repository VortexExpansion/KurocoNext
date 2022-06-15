import React, { Component, useEffect, useState } from 'react';

export default function CategoryCard({data}) {

    const key = 'contents_type_nm' //This is the category name in Kuroco;
    const categoriesList = [...new Map(data.map(sushi =>[sushi[key], sushi])).values()];

    return (
        <>
            <br></br>
            <div>
                {categoriesList.map((category) => (
                    <div className="wrapthis slideCard" key={category.contents_type}>
                        <a href={"/categories/"+category.contents_type}></a>
                        <img src={category.contents_type_ext_col_01} className="imagebg"></img>
                        <h1>{category.contents_type_nm}</h1>
                        <h3>{category.contents_type_ext_col_02}</h3>
                    </div>
                ))}
                <hr></hr>
            </div>
        </>
    );
}