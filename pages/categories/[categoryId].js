export default function Character({ category }) {
    console.log("Here finally");
    console.log(category)
    return (
      <div>
        <img src={category.ext_2.url} alt="" />
        <div>
          <h1>{ category.ext_1 }</h1>
          <p>{ category.ext_3 }</p>
        </div>
      </div>
    )
  }
  
  export async function getStaticProps({params}) {
    const categoryId = params.categoryId
    console.log(categoryId);
    const results = await fetch(`https://sushipedia.g.kuroco.app/rcms-api/3/search/${categoryId}`).then(res => res.json());
    console.log(results);
    return {
      props: {
        category: results.details
      }
    }
  }

 export async function getStaticPaths() {
    const data = await fetch('https://sushipedia.g.kuroco.app/rcms-api/3/search').then(res => res.json());
    console.log(data);
    return {
      paths: data.list.map(category => {
        const categoryId = category.topics_id;
        return {
          params: {
            categoryId : categoryId+""
          }
        }
      }),
      // paths:[
      //   { params:{categoryId: '10'}},
      //   { params:{categoryId: '9'}},
      // ],
      fallback: false
    };
  } 