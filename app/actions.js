'use server';
import('harperdb');

export async function listProducts() {
  return [];
}

export async function listCategories() {
  return [];
}

export async function listDogs() {
	const dogs = [];
	for await (const dog of tables.Dog.search()) {
		dogs.push({ id: dog.id, name: dog.name });
	}
	return dogs;
}

export async function getDog(id) {
	return tables.Dog.get(id);
}

export async function addDog(_, formData) {
  return tables.Dog.post({
    name: formData.get('dog-name'),
    breed: formData.get('dog-breed')
  });
}

export async function getSinglePokemon(id) {
  return await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(res => res.json())
    .catch(err => ({ error: true, err }));
}

export async function getPokemon() {
  return await fetch('https://pokeapi.co/api/v2/pokemon/')
    .then(res => res.json());
}

// export async function addPokemon(data) {
//   console.log('data ', data);
//   // submit pokemon selection to HDB
//   // could change to a put idk
// }

// export async function removePokemon(data) {
//   console.log('data ', data);
//   // remove pokemon selection from HDB
// }


// Server-side AI example
import PipelineSingleton from '@/app/pipeline.js';

export async function getAi(text) {
  if (!text) {
    return json({
      error: 'Missing text parameter',
    }, { status: 400 });
  }
  // Get the classification pipeline. When called for the first time,
  // this will load the pipeline and cache it for future use.
  const classifier = await PipelineSingleton.getInstance();

  // Actually perform the classification
  return await classifier(text).then(res => {
    console.log('what is res ', res);
    return res;
  });   
}