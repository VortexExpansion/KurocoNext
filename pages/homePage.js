import CategoryCard from '../components/categoryCard';
import Slideshow from '../components/slideshow';
import KurocoSearch from '../components/kurocoSearch';
import AnimatedText from '../components/animatedText';
import { SlideShowData, FetchSushiData, TagsData, CategoriesData, title } from '../components/imports';

export default function HomePage({data, pageInfo, tag,categories,slideShowData}){
    return(
        <>
            <div className='pageBg'> 
            <Slideshow data={slideShowData}/>
            <AnimatedText text={title}/>
            <CategoryCard categories={categories}/>
            <KurocoSearch data={data} pageInfo={pageInfo} tag={tag}/>
            </div>
        </>
    );
}

export async function getStaticProps() {
  const results = await FetchSushiData()
  const tags = await TagsData()
  const categories = await CategoriesData()
  const slideShowData = await SlideShowData()
  return {
    props: {
      data : results.list,
      pageInfo : results.pageInfo,
      tag : tags.list,
      categories : categories.list,
      slideShowData : slideShowData.list
    },
  }
}