import { useApi } from "@hooks";

function Home() {
  const { data, loading, error } = useApi("/pokemon/ditto");

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}

export { Home };
