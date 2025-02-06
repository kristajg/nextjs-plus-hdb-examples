import { listDogs, addDog } from '@/app/actions';
import AddDogForm from '@/app/components/AddDogForm';

export default async function Page() {
  const dogs = await listDogs() || [];
  return (
    <div>
      <div style={{ paddingBottom: 20 }}>
        <h3>Dogs</h3>
      </div>
      <div>
        <AddDogForm />
        <br />
      </div>
      <div>
        {dogs.map(dog => (
          <div>
            {dog.name}
          </div>
        ))}
      </div>
    </div>
  );
}