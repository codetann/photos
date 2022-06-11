import { useState, useEffect } from "react";
import { Box, chakra } from "@chakra-ui/react";
import { useCuratedPhotos } from "../api";
import { Navbar, Button } from "@components";
import { HeartIcon, SearchIcon } from "@icons";

function Home() {
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(20);
  const { data, loading, error } = useCuratedPhotos(page, perPage);

  if (loading) return <div>Loading...</div>;

  console.log(data);

  return (
    <div>
      <Navbar />
      <Button variant="primary">Hi</Button>
      <HeartIcon h="2rem" w="2rem" stroke="white" />
      <SearchIcon h="2rem" w="2rem" stroke="white" />
    </div>
  );
}

export { Home };
