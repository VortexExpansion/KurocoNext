import React, { Component, useEffect, useState } from 'react';
import {Card} from './card';

function Search({ data,className}) {

const [searchKey, setSearchKey] = useState('');


const filteredItems = data.list.filter(list =>
     list.ext_1.toLowerCase().includes(searchKey.toLowerCase())
    );

function handleSearchKeyChange(e) {
    setSearchKey(e.target.value);
  }

    
    return (
        <>
        <input
          value={searchKey}
          onChange={handleSearchKeyChange}
          placeholder="Seach here..."
        />

        <Card data = {filteredItems} className={className}/>
        </>
    );
}

function submitForm(answer) {
    // Pretend it's hitting the network.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let shouldError = answer.toLowerCase() !== 'lima'
        if (shouldError) {
          reject(new Error('Good guess but a wrong answer. Try again!'));
        } else {
          resolve();
        }
      }, 1500);
    });
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

  console.log("Search.js");
  console.log(data);

  return(
    <>
    <Search data = {data} className="allCard"/>
    </>
  );
  }