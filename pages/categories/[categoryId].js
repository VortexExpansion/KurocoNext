
import DynamicSearch from "../../components/dynamicSearch";
import CategoryBanner from '../../components/categoryBanner';

export default function CategoryPage({ category }) {
  return (
    <div className="categoryBg">
      <CategoryBanner category={category}/>
      <DynamicSearch data={category} />
    </div>
  )
}

export async function getStaticProps({ params }) {
  const categoryId = params.categoryId
  const results = await fetch(`https://sushipedia.g.kuroco.app/rcms-api/3/fetchSushi?filter=contents_type%20eq%20${categoryId}`).then(res => res.json());
  return {
    props: {
      category: results.list
    }
  }
}

export async function getStaticPaths() {
  const data = await fetch('https://sushipedia.g.kuroco.app/rcms-api/3/fetchSushi').then(res => res.json());
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