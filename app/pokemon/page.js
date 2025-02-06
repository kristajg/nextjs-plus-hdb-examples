'use client';

import Link from "next/link";
import { getSinglePokemon } from '@/app/actions';
import { useState } from 'react';
import SearchForm from '@/app/components/SearchForm.js';

export default function Page() {
  const [pokemon, changePokemon] = useState({});
  const [text, setText] = useState({});
  // function handleSearch(FormData){
  //   'use server';
  //   console.log('formdata...? ', FormData);
  //   // const result = await getSinglePokemon(FormData.get('search-text').trim());
  //   // console.log('result! ', result)
  //   // return result;
  // i frigged up. localstorage is not on the server ya doinkus
  //   // localStorage.setItem('pokemon-result', result);
  // }

  function handleSearch(e) {
    e.preventDefault();
    // I can call a server action in a client component!
    getSinglePokemon(text.trim())
      .then(data => {
        changePokemon({ ...data });
      });
  }

  console.log('main page render')
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h3>Pokemon Server Action Page</h3>
        <div>
          <div style={{ height: 100 }}>
            {Object.keys(pokemon).length !== 0 && (
              <Link href={`/pokemon/${pokemon.name}`}>
                Pokemon: {pokemon.name}
                <div>
                  <img src={pokemon.sprites.front_default} />
                </div>
              </Link>
            )}
          </div>
          <SearchForm handleSearchAction={handleSearch} handleSetText={setText} />
          {/* <ul style={{ listStyle: 'none' }}>
            {pokemon.results.map(data => {
              return (
                <li key={`pokemon-${data.name}`}>
                  <Link href={`/pokemon/${data.name}`}>
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
