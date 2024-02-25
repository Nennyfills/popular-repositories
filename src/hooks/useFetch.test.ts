import { renderHook, waitFor } from '@testing-library/react';
import useFetch from './useFetch';
import fetchData from '@/api';

jest.mock('@/api', () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe('useFetch', () => {
  it('should fetch data successfully', async () => {
    const mockData = { items: ['item1', 'item2'] };
    (fetchData as jest.Mock).mockResolvedValue({ data: mockData });

    const { result } = renderHook(() => useFetch('https://example.com/data'));

    await waitFor(() => {
      expect(result.current.data).toEqual(mockData);
      expect(result.current.loading).toBeFalsy();
      expect(result.current.error).toBeNull();
    });
  });
  it('handles errors', async () => {
    const mockError = new Error('Test Error');
    (fetchData as jest.Mock).mockRejectedValue(mockError);

    const { result } = renderHook(() => useFetch('https://example.com/data'));

    await waitFor(() => {
      expect(result.current.error).toEqual(mockError);
      expect(result.current.loading).toBeFalsy();
      expect(result.current.data).toBeNull();
    });
  });
});
