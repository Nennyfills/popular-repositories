/* eslint-disable @typescript-eslint/no-explicit-any */
import '@testing-library/jest-dom';

jest.mock('axios', () => {
  const mockAxios: any = jest.createMockFromModule('axios');
  mockAxios.CancelToken = { source: () => ({ token: {}, cancel: jest.fn() }) };
  mockAxios.isCancel = jest.fn();
  return mockAxios;
});
