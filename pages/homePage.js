import CategoryCard from '../components/category';
import Slideshow from '../components/slideshow';
import SushiList from '../components/allSushi';
import FilterSushi from '../components/filterSushi';
import AnimatedText from '../components/animatedText';

export default function HomePage({data}){
    return(
        <>
            <div className='pageBg'> 
            <Slideshow data={data}/>
            <AnimatedText text="SushiPedia"/>
            <CategoryCard data={data}/>
            {/* <SushiList data={data}/> */}
            <FilterSushi data={data}/>
            
            </div>
        </>
    );
}

export async function getStaticProps() {
  const res = await fetch('https://sushipedia.g.kuroco.app/rcms-api/3/fetchSushi');
  const results = await res.json();
  console.log(results);
  return {
    props: {
      data : results.list
    }
  }
}