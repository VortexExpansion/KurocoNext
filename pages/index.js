import { responseSymbol } from 'next/dist/server/web/spec-compliant/fetch-event';
import Link from 'next/link';
export default function index() {

    return (
      <>
      <div>
        This index page acts as a starting point for multiple websites for Gaurav.
      </div>
      <br></br>
        <div>
          For SushiPedia visit :{' '}
          <Link href="/homePage">
            <a className='text-teal-400'>SushiPedia HomePage !</a>
          </Link>
        </div>
      </>
    );
};

