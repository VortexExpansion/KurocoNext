function sushi({posts,searchItems}) {
  console.log(posts.details)
  console.log(searchItems.list)
  return (
    <>
    <div>About</div>
    <br></br>

    {/*---------- SearchItems ------------*/}
    <div>
    <table>
  <thead>
    <tr>
      <th>Sushi</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    {searchItems.list.map((searchItems)=>(
      <>
      <tr>
        <td>{searchItems.ext_1}</td>
        <td>{searchItems.ext_3}</td>
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
    

      {/*---------- Directory ---------- */}
    <br></br>
    <div>{posts.details.subject}</div>
    {/* <ul> */}
      {posts.details.ext_1.map((post) => (
          <> 
        <img src={post.ext_1.url} width={800}></img>
            <ol>
                <div>{post.ext_2}</div>
                <div>{post.ext_3}</div>
                <div>{post.ext_4}</div>
            </ol>
        </>
      ))}
    {/* </ul> */}
    </>
    )
  }
  
  export async function getStaticProps() {
    // Call an external API endpoint to get posts
    const res = await fetch(process.env.BASE_URL + '/rcms-api/3/service/4')
    const posts = await res.json()

    const res2 = await fetch(process.env.BASE_URL + '/rcms-api/3/search')
    const searchItems = await res2.json()
    

    //Logs for terminal

    console.log(res)
    console.log(posts.details)
    console.log(posts)
    console.log("")
    console.log("Yaha se searchList")
    console.log(searchItems)
    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time

    
    return {
        props: {
            posts, searchItems,
          },
    }
  }
  export default sushi