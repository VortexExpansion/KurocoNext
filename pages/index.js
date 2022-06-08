import { responseSymbol } from 'next/dist/server/web/spec-compliant/fetch-event';
import { useState } from 'react';
import Link from 'next/link';

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



export default function Homepage() {

      // async asyncData({ $axios, app }) {
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

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const fullName = firstName + ' ' + lastName;

  function handleFirstNameChange(e) {setFirstName(e.target.value);}

  function handleLastNameChange(e) {setLastName(e.target.value);}

  return (
    <>
      <h2>Let’s check you in</h2>
      <hr></hr>
      {/* <img src={response.details.ext_4.url} width="400"></img> */}
      {/* <div>{{ response.details.ext_3 }}</div>
      <div>{{ response.details.ext_5 }}</div>
      <div>{{ response.details.ext_6 }}</div> */}
    
      <label>
        First name:{' '}
        <input
          value={firstName}
          onChange={handleFirstNameChange}
        />
      </label>
      <br></br>
      <label>
        Last name:{' '}
        <input
          value={lastName}
          onChange={handleLastNameChange}
        />
      </label>
      <p>
        Your ticket will be issued to: <b>{fullName}</b>
      </p>

      Read about{' '}
      <Link href="/sushi">
      <a>Sushi!</a>
      </Link>
    </>
  );
}

