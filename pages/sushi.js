function sushi({posts}) {
  console.log(posts.details)
  return (
    <>
    <div>About</div>
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
    console.log(res)
    console.log(posts.details)
    console.log(posts)
    console.log("")
    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time

    
    return {
        props: {
            posts,
          },
    }
  }
  export default sushi