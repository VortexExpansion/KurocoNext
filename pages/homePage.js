var arraylen = 10;
const delay = 5500; 
import React, { Component, useEffect, useState } from 'react';

export function Import({src}){

    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(false)
    const [index, setIndex] = React.useState(0);
    const timeoutRef = React.useRef(null);
  
    useEffect(() => {
      setLoading(true)
      fetch('https://sushipedia.g.kuroco.app/rcms-api/3/groupAll')
        .then((res) => res.json())
        .then((data) => {
          setData(data)
          setLoading(false)
          console.log("reached here")
        })
    }, [])
  
    function resetTimeout() {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
      }  

  React.useEffect(() => {
    resetTimeout();
    console.log("Reached here now");
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === arraylen - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
        resetTimeout();
    };
  }, [index]);

  if (isLoading) return <p>Loading...</p>
  if (!data) return <p>No profile data</p>
  console.log(data)
  arraylen = data.list.length;
  console.log("Updated arraylen = ",arraylen);

  return(
    <>
      <div className="slideshow"> 
        <div className="slideshowSlider" style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
        {data.list.map((list,index)=> 
            <div key={index} className="slide">
                <img className="imageSlide" src={list.ext_2.url}></img>
            </div>
         )}
        </div>

        <div className="slideshowDots">
        {data.list.map((_, idx) => (
          <div key={idx} className={`slideshowDot${index === idx ? " active" : ""}`} onClick={() => {setIndex(idx);}}></div>
        ))}
      </div> 
      </div> 
    </>
  );
  
  }

function Slideshow() {
    return (
      <div className="slideshow">
        <div className="slideshowSlider">
        {colors.map((backgroundColor, index) => (
          <div className="slide" key={index} style={{ backgroundColor }} />
        ))}
        </div>
      </div>
    );
  }

export default function HomePage(){
    return(
        <>
            <Import/>
        </>
    );
}