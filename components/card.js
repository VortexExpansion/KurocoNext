import React, { Component, useEffect, useState } from 'react';
const colors = ["#0088FE", "#00C49F", "#FFBB28"];

function Card({ data }) {
    return (
        <>
            <br></br>
            <div >
                {/* {colors.map((backgroundColor, index) => (
                    <div className="slideCard" key={index} style={{ backgroundColor }}>
                        <img src="images/1.jpeg" width="400"></img>
                        <h1>Sushi Title</h1>
                        <h3>Sushi info</h3>
                    </div>
                ))} */}

                {data.list.map((list, index) => (
                    <div className="slideCard bg" key={index}>
                    <img src={list.ext_2.url} className="imagebg"></img>
                    <h1>{list.ext_1}</h1>
                    <h3>{list.ext_3}</h3>
                </div>
                ))}
            </div>
        </>
    );
}

export default function CardAPI({ api }) {

    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(false)


    useEffect(() => {
        setLoading(true)
        fetch(api)
            .then((res) => res.json())
            .then((data) => {
                setData(data)
                setLoading(false)
            })
    }, [])

    if (isLoading) return <p>Loading...</p>
    if (!data) return <p>No profile data</p>

    console.log(data)

    return (<Card data={data} />);
}

