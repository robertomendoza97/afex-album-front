import { useEffect, useState } from "react";

interface FetchResult<T> {
  data: T | null;
  loading: boolean;
  error: Error | null | unknown;
}

interface FetchParamters {
  url: string;
  options?: RequestInit;
}

const useFetch = <T>({ url, options }: FetchParamters): FetchResult<T> => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | unknown | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, options);

        if (!response.ok) {
          throw new Error(
            `Error en la solicitud: ${response.status} ${response.statusText}`
          );
        }

        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, options]);

  return { data, loading, error };
};

export default useFetch;
