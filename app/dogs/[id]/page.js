export default async function Page({ params }) {
  const data = await params;
  return (
    <div>
      specific dog: {data.id}
    </div>
  );
}