import { responseSymbol } from 'next/dist/server/web/spec-compliant/fetch-event';
import Link from 'next/link';

import React, { Component, useEffect, useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

function Card({source,text}){
  return(
    <div>
      <img src={source} alt="image1"/>
      <p className="legend">{text}</p>
    </div>
  );
}

export function Import({src}){

  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch('https://sushipedia.g.kuroco.app/rcms-api/3/groupAll')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }, [])

  if (isLoading) return <p>Loading...</p>
if (!data) return <p>No profile data</p>
console.log(data)

return(
  <div>
    {data.list.map((list)=> 
    {<Card
      source = {list.ext_2.url}
      text = "Default"
    />}
  // <div>
  //   <img key={list.ext_2.url} src={list.ext_2.url} alt="image1"/>
  //   <p className="legend">Image 1</p>
  // </div>
    )}
  </div>
);

}

export default class NextJsCarousel extends Component {
  
  render() {
      return (
        <>
          {/* <Import/> */}
          <div>
            <h2>Sushi Carousel</h2>
            <Carousel>
              {/* <Import/> */}
              <Card
                source = "images/1.jpeg"
                text = "Default"
              />
              <Card
                source = "images/1.jpeg"
                text = "Default"
              />
              <Card
                source = "images/1.jpeg"
                text = "Default"
              />
              {/* <Import
              src = "images/1.jpeg"
              />
                <div>
                    <img src="images/1.jpeg" alt="image1"/>
                    <p className="legend">Image 1</p>

                </div>
                <div>
                    <img src="images/2.jpeg" alt="image2" />
                    <p className="legend">Image 2</p>

                </div>
                <div>
                    <img src="images/2.jpeg" alt="image2" />
                    <p className="legend">Image 2</p>

                </div>
                <div>
                    <img src="images/2.jpeg" alt="image2" />
                    <p className="legend">Image 2</p>

                </div>

                <div>
                    <img src="images/3.jpeg" alt="image3"/>
                    <p className="legend">Image 3</p>

                </div>
                <div>
                    <img src="images/4.jpeg" alt="image4"/>
                    <p className="legend">Image 4</p>

                </div>
                <div>
                <Card
                source = "images/4.jpeg"
                text = "Default"
              />
                </div>
                <div>
                    <img src="images/4.jpeg" alt="image4"/>
                    <p className="legend">Image 4</p>

                </div>
                <div>
                    <img src="images/5.jpeg" alt="image5"/>
                    <p className="legend">Image 5</p>

                </div> */}
            </Carousel>
          </div>

          <div>
          Visit Sushi List page{' '}
                 <Link href="/sushiMain">
       <a>Sushi List!</a>
       </Link>
          </div>

          <div>
          Visit HomePage{' '}
                 <Link href="/homePage">
       <a>HomePage!</a>
       </Link>
          </div>
        </>
      );
  }
};

// async function asyncData({ $axios, app }) {
//   try {
//     const response = await $axios.$get(
//       process.env.BASE_URL + '/rcms-api/3/service/7'
//       )
//       console.log(response)
//       return { response }
//       } catch (e) {
//         console.log(e.message)
//         }
// }

// export default {
//   async asyncData({ $axios, app }) {
//     try {
//       const response = await $axios.$get(
//         process.env.BASE_URL + '/rcms-api/3/service/7'
//         )
//         console.log(response)
//         return { response }
//         } catch (e) {
//           console.log(e.message)
//           }
//   },
//   return(

//   ){}
// }



// export default function Homepage() {

//       // async asyncData({ $axios, app }) {
//       //   try {
//       //     const response = await $axios.$get(
//       //       process.env.BASE_URL + '/rcms-api/3/service/7'
//       //       )
//       //       console.log(response)
//       //       return { response }
//       //       } catch (e) {
//       //         console.log(e.message)
//       //         }
//       // }

//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');

//   const fullName = firstName + ' ' + lastName;

//   function handleFirstNameChange(e) {setFirstName(e.target.value);}

//   function handleLastNameChange(e) {setLastName(e.target.value);}

//   return (
//     <>
//       <h2>Let’s check you in</h2>
//       <hr></hr>
//       {/* <img src={response.details.ext_4.url} width="400"></img> */}
//       {/* <div>{{ response.details.ext_3 }}</div>
//       <div>{{ response.details.ext_5 }}</div>
//       <div>{{ response.details.ext_6 }}</div> */}
    
//       <label>
//         First name:{' '}
//         <input
//           value={firstName}
//           onChange={handleFirstNameChange}
//         />
//       </label>
//       <br></br>
//       <label>
//         Last name:{' '}
//         <input
//           value={lastName}
//           onChange={handleLastNameChange}
//         />
//       </label>
//       <p>
//         Your ticket will be issued to: <b>{fullName}</b>
//       </p>

//       Read about{' '}
//       <Link href="/sushi">
//       <a>Sushi!</a>
//       </Link>
//     </>
//   );
// }

