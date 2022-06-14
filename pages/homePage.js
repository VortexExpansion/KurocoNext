import CardAPI from '../components/card';
import SlideshowAPI from '../components/slideshow';
import SearchAPI from '../components/search';

export default function HomePage(){
    return(
        <>
            <SlideshowAPI api='https://sushipedia.g.kuroco.app/rcms-api/3/groupAll'/>
            <CardAPI api='https://sushipedia.g.kuroco.app/rcms-api/3/search'/>
            <SearchAPI api='https://sushipedia.g.kuroco.app/rcms-api/3/groupAll'/>
        </>
    );
}