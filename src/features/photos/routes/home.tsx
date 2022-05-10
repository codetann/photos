import { useApi } from "@hooks";
import { useState, useEffect } from "react";

function Home() {
  const [pokemon, setPokemon] = useState<any>("ditto");
  const { data, loading, error } = useApi(`pokemon/${pokemon}`);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h1>Home</h1>
      <button onClick={() => setPokemon("mew")}>Change</button>
      <div>{data.name}</div>
    </div>
  );
}

export { Home };
