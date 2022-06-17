import CategoryCard from '../components/categoryCard';
import Slideshow from '../components/slideshow';
import KurocoSearch from '../components/kurocoSearch';
import AnimatedText from '../components/animatedText';

export default function HomePage({data}){
    return(
        <>
            <div className='pageBg'> 
            <Slideshow data={data}/>
            <AnimatedText text="SushiPedia"/>
            <CategoryCard data={data}/>
            <KurocoSearch data={data}/>
            </div>
        </>
    );
}

export async function getStaticProps() {
  const res = await fetch('https://sushipedia.g.kuroco.app/rcms-api/3/fetchSushi');
  const results = await res.json();
  return {
    props: {
      data : results.list
    }
  }
}