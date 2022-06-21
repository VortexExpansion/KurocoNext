import CategoryCard from '../components/categoryCard';
import Slideshow from '../components/slideshow';
import KurocoSearch from '../components/kurocoSearch';
import AnimatedText from '../components/animatedText';

export default function HomePage({data,tag}){
    return(
        <>
            <div className='pageBg'> 
            <Slideshow data={data}/>
            <AnimatedText text="SushiPedia"/>
            <CategoryCard data={data}/>
            <KurocoSearch data={data} tag={tag}/>
            </div>
        </>
    );
}

export async function getStaticProps() {
  const res = await fetch(process.env.BASE_URL+'/rcms-api/3/fetchSushi');
  const results = await res.json();

  const tagsData = await fetch(process.env.BASE_URL+'/rcms-api/3/tags')
  const tags = await tagsData.json();
  return {
    props: {
      data : results.list,
      tag : tags.list,
    },
  }
}