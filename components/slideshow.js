var arraylen = 10;
const delay = 5500; 
import React, { Component, useEffect, useState } from 'react';

export default function SlideShow({data}){
    const [index, setIndex] = React.useState(0);
    const timeoutRef = React.useRef(null);
    arraylen = data.length;

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
            {data.map((sushi)=> 
                <div key={sushi.topics_id} className="slide">
                    <img className="imageSlide" src={sushi.ext_1.url}></img>
                    <div className="sliderText">
                        <h1 id="adjust">{sushi.ext_2} </h1>
                        <h3 id="adjust">{sushi.ext_4}</h3>
                    </div>
                </div>
             )}
            </div>
            <br></br>
            <div className="slideshowDots">
            {data.map((_, idx) => (
              <div key={idx} className={`slideshowDot${index === idx ? " active" : ""}`} onClick={() => {setIndex(idx);}}></div>
            ))}
          </div> 
          </div> 
        </>
      );
}