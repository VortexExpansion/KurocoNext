import React, { Component, useEffect, useState } from 'react';
import {Card} from './card';

function Search({ data,className, id}) {

const [searchKey, setSearchKey] = useState('');
const filteredItems = data.list.filter(list =>
     list.ext_1.toLowerCase().includes(searchKey.toLowerCase()) ||
     list.contents_type_nm.toLowerCase().includes(searchKey.toLowerCase())
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
        <Card data = {filteredItems} className={className} id={id}/>
        </>
    );
}

export default function SearchAPI({api}){

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

  return(
    <>
    <Search data = {data} className="allCard" id="all"/>
    </>
  );
  }