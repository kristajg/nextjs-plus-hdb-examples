'use client';
import { useActionState, useState } from 'react';
// import { getSinglePokemon } from '@/app/actions';

export default function SearchForm({ handleSearchAction, handleSetText }) {
  const [text, setText] = useState('');
  // const [state, handleSearch, thing] = useActionState(handleSearchAction, {});
  // async function handleSearch(FormData){
  //   'use server';
  //   const result = await getSinglePokemon(FormData.get('search-text').trim());
  //   console.log('result! ', result)
  //   localStorage.setItem('pokemon-result', result);
  // }
  console.log('search form render');
  return (
    <form onSubmit={handleSearchAction}>
      <label htmlFor="search">Search Pokemon by Name or ID</label>
      <div>
        <input
          onChange={e => handleSetText(e.target.value)}
          type="text" id="search-text" name="search-text" required />
      </div>
    </form>
  );
}