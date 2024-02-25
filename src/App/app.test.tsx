import { render, screen } from '@testing-library/react';
import { useFetch } from '@/hooks';
import { MemoryRouter } from 'react-router-dom';
import App from '.';

jest.mock('@/hooks/useFetch');

describe('App Component', () => {
  (useFetch as jest.Mock).mockReturnValue({ loading: true, error: null });
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  expect(screen.getAllByText('Loading...')[0]).toBeInTheDocument();

  test('renders error state', () => {
    (useFetch as jest.Mock).mockReturnValue({
      loading: false,
      error: {
        message: 'Error: Something went wrong, please refresh your page',
      },
    });
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    expect(
      screen.getByText('Error: Something went wrong, please refresh your page')
    ).toBeInTheDocument();
  });

  test('renders Repositories component on successful fetch', () => {
    (useFetch as jest.Mock).mockReturnValue({ loading: false, error: null });
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText('No data')).toBeInTheDocument();
  });
});
