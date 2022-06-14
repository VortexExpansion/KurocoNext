import React, { Component, useEffect, useState } from 'react';

export function SushiCard({data}) {
  return (
      <>
          <br></br>
          <div>
              {data.map((sushi) => (
                  <div className="allCard" key={sushi.topics_id}>
                      <img src={sushi.ext_1.url} className="imagebg"></img>
                      <h1>{sushi.ext_2}</h1>
                      <h3>{sushi.ext_4}</h3>
                      <h3>{sushi.ext_3}</h3>
                      <div id="all">
                          <h1>{sushi.contents_type_nm}</h1>
                      </div>
                  </div>
              ))}
              <hr></hr>
          </div>
      </>
  );
}

export default function SushiList({data}) {

const [searchKey, setSearchKey] = useState('');
const filteredItems = data.filter(sushi =>
     sushi.subject.toLowerCase().includes(searchKey.toLowerCase()) ||
     sushi.contents_type_nm.toLowerCase().includes(searchKey.toLowerCase())
    );

function handleSearchKeyChange(e) {
    setSearchKey(e.target.value);
  }

    return (
        <>
        <input
          size={50}  
          value={searchKey}
          onChange={handleSearchKeyChange}
          placeholder="Seach by Sushi Name or Category"
        />
        <SushiCard data = {filteredItems}/>
        </>
    );
}