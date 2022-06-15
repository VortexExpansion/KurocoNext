import SushiList from "../../components/allSushi";

export default function Character({ category }) {
    return (
      <div>
        <SushiList data = {category}/>
      </div>
    )
  }
  
  export async function getStaticProps({params}) {
    const categoryId = params.categoryId
    console.log(categoryId);
    const results = await fetch(`https://sushipedia.g.kuroco.app/rcms-api/3/fetchSushi?filter=contents_type%20eq%20${categoryId}`).then(res => res.json());
    console.log(results);
    return {
      props: {
        category: results.list
      }
    }
  }

 export async function getStaticPaths() {
    const data = await fetch('https://sushipedia.g.kuroco.app/rcms-api/3/fetchSushi').then(res => res.json());
    console.log(data);
    return {
      paths: data.list.map(category => {
        const categoryId = category.contents_type;
        return {
          params: {
            categoryId : categoryId+""
          }
        }
      }),
      fallback: false
    };
  } 