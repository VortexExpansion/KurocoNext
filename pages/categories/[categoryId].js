import SushiList from "../../components/allSushi";

export function CategoryInfo({data}) {
  console.log(data)
  return (
    <div>
      <img src={data[0].contents_type_ext_col_01}></img>
      <h1>{data[0].contents_type_nm}</h1>
      <h3>{data[0].contents_type_ext_col_02}</h3>
      <hr></hr>
    </div>
  )
}

export default function Character({ category }) {
  return (
    <div>
      <CategoryInfo data={category} />
      <SushiList data={category} />
    </div>
  )
}

export async function getStaticProps({ params }) {
  const categoryId = params.categoryId
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
          categoryId: categoryId + ""
        }
      }
    }),
      fallback: false
    };
  } 