import CategoryCard from '../components/category';
import Slideshow from '../components/slideshow';
import SushiList from '../components/allSushi';
import FilterSushi from '../components/filterSushi';

export default function HomePage({data}){
    return(
        <>
            <div className='pageBg'>

            <Slideshow data={data}/>
            <CategoryCard data={data}/>
            {/* <SushiList data={data}/> */}
            <FilterSushi data={data}/>
            
            </div>
        </>
    );
}

export async function getStaticProps() {
  const results = await fetch('https://sushipedia.g.kuroco.app/rcms-api/3/fetchSushi').then(res => res.json());
  console.log(results);
  return {
    props: {
      data : results.list
    }
  }
}