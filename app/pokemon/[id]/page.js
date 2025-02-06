import Link from "next/link";

export default async function Page({ params }) {
  let { id } = await params;
	const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(res => res.json());
	console.log('pokemon ', data.sprites);
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h3>Pokemon Detail Page</h3>
				<div className="mons">
					Name: {data.name}
          <img src={data.sprites.front_default} />
          <img src={data.sprites.front_shiny} />
        </div>
      </main>
    </div>
  );
}
