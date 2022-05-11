import { useState, useEffect } from "react";
import { useCuratedPhotos } from "../api";

function Home() {
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(20);
  const { data, loading, error } = useCuratedPhotos(page, perPage);

  if (loading) return <div>Loading...</div>;

  console.log(data);

  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}

export { Home };
