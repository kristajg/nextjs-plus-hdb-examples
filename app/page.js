'use client';
import { useState } from "react";
import { getSinglePokemon } from '@/app/actions';
import Link from "next/link";

export default function Page() {
  const [text, setText] = useState('');
  const [pokemon, setPokemon] = useState({});
  const [error, setError] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    getSinglePokemon(text)
      .then(data => {
        // console.log('data! ', data);
        !data.error ? setPokemon(data) : setError(true);
      })
    setError(false);
    setText('');
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="flex" style={{ gap: 30 }}>
        <span><Link href='/products'>Products</Link></span>
        <span><Link href='/dogs'>Dogs</Link></span>
        <span><Link href='/pokemon'>Pokemon</Link></span>
        <span><Link href='/huggingface'>AI</Link></span>
      </div>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h3>Landing Page</h3>
        <div>
          <div>
            {Object.keys(pokemon).length !== 0 && (
              <div>
                Pokemon: {pokemon.name}
                <div>
                  <img src={pokemon.sprites.front_default} />
                </div>
              </div>
            )}
          </div>
          <form onSubmit={handleSubmit}>
            <div style={{ paddingRight: 10 }}>Enter the name of a pokemon</div>
            <input type='text' onChange={e => setText(e.target.value)} value={text} />
            <br />
            <button onClick={handleSubmit}>Enter</button>
            {error && <div style={{ color: 'red' }}>Please enter a valid Pokemon</div>}
          </form>
        </div>
      </main>
    </div>
  );
}
