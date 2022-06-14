import React, { Component, useEffect, useState } from 'react';
const colors = ["#0088FE", "#00C49F", "#FFBB28"];

export function Card({ data, className, id }) {
    return (
        <>
            <br></br>
            <div>
                {data.map((list, index) => (
                    <div className={className} key={index}>
                        <img src={list.ext_2.url} className="imagebg"></img>
                        <h1>{list.ext_1}</h1>
                        <h3>{list.ext_3}</h3>
                        <div id={id}>
                            <h1>{list.contents_type_nm}</h1>
                        </div>
                    </div>
                ))}
                <hr></hr>
            </div>
        </>
    );
}


