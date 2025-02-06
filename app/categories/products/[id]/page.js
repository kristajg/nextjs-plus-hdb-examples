import Link from "next/link";
// import { getPokemon } from '@/app/actions';

export default async function Page() {
  // la dee da fetching data in a server component like normal
	// const pokemon = await fetch('https://pokeapi.co/api/v2/pokemon/')
  //   .then(res => res.json());
  
  // woo wee server action
//   const pokemon = await getPokemon();
// 	console.log('pokemon cool ', pokemon.results[0]);
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h3>Product Detail Page!</h3>
        <div>
          {/* <ul style={{ listStyle: 'none' }}>
            {pokemon.results.map(data => {
              return (
                <li key={`pokemon-${data.name}`}>
                  <Link href={`/products/${data.name}`}>
                    {data.name}
                  </Link>
                </li>
              )
            })}
          </ul> */}
        </div>
      </main>
    </div>
  );
}
