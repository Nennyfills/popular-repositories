import { waitFor } from '@testing-library/react';
import axios, { AxiosInstance } from 'axios';
import { fetchData } from '.';

type MockAxiosInstance = AxiosInstance & {
  mockResolvedValue: (value: unknown) => void;
  mockRejectedValue: (value: unknown) => void;
  mockClear: () => void;
};
const mockedAxios = axios as jest.Mocked<unknown> as MockAxiosInstance;

jest.mock('axios');

describe('Fetch Data', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should fetch data successfully', async () => {
    const mockData = { items: ['item1', 'item2'] };
    mockedAxios.mockResolvedValue({ data: mockData });

    const result = await fetchData({ url: 'https://example.com/data' });

    await waitFor(() => {
      expect(axios).toHaveBeenCalledWith({
        url: 'https://example.com/data',
        method: 'get',
        data: null,
      });
      expect(result).toEqual(mockData);
    });
  });
  it('handles errors', async () => {
    const mockError = new Error('Test Error');
    mockedAxios.mockRejectedValue(mockError);

    await expect(
      fetchData({ url: 'https://example.com/data' })
    ).rejects.toThrow('Test Error');
  });
});
