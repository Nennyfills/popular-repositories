import axios, { AxiosRequestConfig, Method } from 'axios';

/**
 * Represents the parameters for fetching data.
 */
interface FetchDataParams {
  url: string;
  method?: Method;
  data?: unknown;
  config?: AxiosRequestConfig;
}

/**
 * Fetches data from the specified URL using the specified HTTP method.
 * @param {FetchDataParams} params - The parameters for the fetch request.
 * @returns {Promise<any>} - A promise that resolves to the fetched data.
 * @throws {Error} - If an error occurs during the fetch request.
 */
export const fetchData = async ({
  url,
  method = 'get',
  data = null,
  config = {},
}: FetchDataParams) => {
  try {
    const response = await axios({ url, method, data, ...config });
    return response?.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export default fetchData;
