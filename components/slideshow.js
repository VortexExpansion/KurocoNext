var arraylen = 10;
const delay = 5500; 
import React, { Component, useEffect, useState } from 'react';

function SlideShow({data}){
    const [index, setIndex] = React.useState(0);
    const timeoutRef = React.useRef(null);

    function resetTimeout() {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
      }
      
    React.useEffect(() => {
        resetTimeout();
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

    return(
        <>
          <div className="slideshow"> 
            <div className="slideshowSlider" style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
            {data.list.map((list,index)=> 
                <div key={index} className="slide">
                    <img className="imageSlide" src={list.ext_2.url}></img>
                    <div className="sliderText">
                        <h1 id="adjust1">{list.ext_1} </h1>
                        <h3 id="adjust2">{list.ext_3}</h3>
                    </div>
                </div>
             )}
            </div>
            <br></br>
            <div className="slideshowDots">
            {data.list.map((_, idx) => (
              <div key={idx} className={`slideshowDot${index === idx ? " active" : ""}`} onClick={() => {setIndex(idx);}}></div>
            ))}
          </div> 
          </div> 
        </>
      );
}

export default function SlideshowAPI({api}){

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
  arraylen = data.list.length;

  return(<SlideShow data = {data} />);
  }