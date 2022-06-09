import React, { useEffect, useState } from "react";

function sushiMain() {
    // Get()

    const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch('https://sushipedia.g.kuroco.app/rcms-api/3/search')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }, [])

  if (isLoading) return <p>Loading...</p>
  if (!data) return <p>No profile data</p>
  console.log(data)

  return (
    <>
    <div>
    <table>
          <thead>
            <tr>
              <th>Sushi</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {data.list.map((list) =>(
              <>
                <tr>
                 <td>{list.ext_1}</td>
                <td>{list.ext_3}</td>
              </tr>
              </>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td>Sum</td>
              <td>$180</td>
            </tr>
          </tfoot>
        </table>
    </div>
    </>
  )

  }

// async function Get(){
//     const response = await fetch('https://sushipedia.g.kuroco.app/rcms-api/3/service/4')
//     const searchItems = await response.json()

//     console.log(searchItems.details)
//  }  



 
  
  export default sushiMain