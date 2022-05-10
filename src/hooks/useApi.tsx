import { api, localcache } from "@lib";
import { useState, useEffect } from "react";

const useApi = (endpoint: string) => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const cache = localcache.read(endpoint);

    if (cache) {
      setData(cache);
      setLoading(false);
      return;
    }

    const fetchData = async () => {
      try {
        const response = await api.get(endpoint);
        localcache.write(endpoint, response.data);
        setData(response.data);
        setLoading(false);
      } catch (error: any) {
        setError(error.message ?? "");
        setLoading(false);
      }
    };

    fetchData();
  }, [endpoint]);

  return { data, loading, error };
};

export { useApi };
