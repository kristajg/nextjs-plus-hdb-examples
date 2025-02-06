import { listCategories } from '@/app/actions';

export default async function Page() {
  const categories = await listCategories() || [];
  return (
    <div>
      <div style={{ paddingBottom: 20 }}>
        <h3>Categories!</h3>
      </div>
      <div>
        {categories.length !== 0 && categories.map(data => (
          <div>
            {data.name}
          </div>
        ))}
      </div>
    </div>
  );
}