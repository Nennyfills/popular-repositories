import { useState, useEffect } from 'react';
import axios, { AxiosError } from 'axios';

import fetchData from '@/api';

/**
 * Custom hook for fetching data with Axios, including support for request cancellation.
 *
 * @param {string} url - The URL to fetch data from.
 * @returns An object containing the response data, loading state, and any error encountered during the fetch.
 */
const useFetch = (url: string) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<unknown>(null);

  useEffect(() => {
    // Create a source token for cancellation
    const source = axios.CancelToken.source();

    const getData = async () => {
      try {
        const response = await fetchData({
          url,
          config: {
            cancelToken: source.token,
          }, // Pass the cancellation token to the request
        });
        setData(response.data);
        localStorage.setItem('repos', JSON.stringify(response?.items ?? []));
      } catch (error) {
        const axiosError = error as AxiosError;

        if (!axios.isCancel(error)) {
          setError(axiosError);
        }
      } finally {
        setLoading(false);
      }
    };

    if (url) {
      getData();
    }

    // Cleanup function to cancel the request if the component unmounts
    return () => {
      source.cancel('Operation canceled by the user.');
    };
  }, [url]); // Depend on URL to refetch if it changes

  return { data, loading, error };
};

export default useFetch;
