import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async (url) => {
    try {
      const res = await fetch(url);
      if (!res.ok) {
        throw Error("Error! Couldn't fetch the data");
      } else {
        const data = await res.json();
        setData(data);
        setIsPending(false);
      }
    } catch (err) {
      setError(err.message);
      setIsPending(false);
    }
  };

  useEffect(() => {
    fetchData(url);
  }, [url]);

  return {
    data,
    isPending,
    error,
    setError,
    setData,
  };
};

export default useFetch;