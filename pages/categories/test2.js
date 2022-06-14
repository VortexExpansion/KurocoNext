export default function Character({ character }) {
    console.log(character)
    return (
      <div>
        {/* <img src={character.photoUrl} alt="" />
        <div>
          <h1>{ character.name }</h1>
          <p>Affiliation: { character.affiliation }</p>
        </div> */}
      </div>
    )
  }
  
  export async function getStaticProps() {
    const results = await fetch('https://sushipedia.g.kuroco.app/rcms-api/3/search').then(res => res.json());
    console.log(results);
    return {
      props: {
        character: results.list
      }
    }
  }