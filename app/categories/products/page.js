import { listProducts } from '@/app/actions';

export default async function Page() {
  const products = await listProducts() || [];
  return (
    <div>
      <div style={{ paddingBottom: 20 }}>
        <h3>Products</h3>
      </div>
      <div>
        {products.length !== 0 && products.map(data => (
          <div>
            {data.name}
          </div>
        ))}
      </div>
    </div>
  );
}