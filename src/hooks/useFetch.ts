/**
 * Modules
 */
import { useState, useEffect } from "react";
import { AxiosRequestConfig, Method } from "axios";

/**
 * Handle API
 */
import api from "../services/api";

/**
 * Interface
 */
export interface FetchProps {
  url: string;
  method?: Method;
  headers?: {};
}

// Hook
export default function useFetch({ url, method, headers }: FetchProps) {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [data, setData] = useState<any>();
  const [message, setMessage] = useState<string>();

  const configOptions: AxiosRequestConfig = {
    url,
    method,
    headers,
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await api.request(configOptions);

        if (response.status === 200) {
          setData(response.data);
          setError(false);
        } else {
          setError(true);
        }
      } catch (err) {
        setError(true);
        setMessage(err.response.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return { isLoading, error, data, message };
}
