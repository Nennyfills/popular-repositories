import { fireEvent, render, screen } from '@testing-library/react';

import CardList from '.';

describe('Card', () => {
  const onStar = jest.fn();

  beforeEach(() => {
    render(
      <CardList
        data={[
          {
            id: '122',
            userHasStarred: true,
            description: 'test description',
            name: 'test title',
            stargazers_count: 5,
            html_url: 'http//:example.com',
          },
        ]}
        onStar={onStar}
      />
    );
  });
  test('renders title', () => {
    const titleElement = screen.getByText(/test title/i);
    expect(titleElement).toBeInTheDocument();
  });

  test('renders description', () => {
    const descriptionElement = screen.getByText(/test description/i);
    expect(descriptionElement).toBeInTheDocument();
  });

  test('calls onStar when clicked', () => {
    fireEvent.click(screen.getByRole('button'));
    expect(onStar).toHaveBeenCalledTimes(1);
  });

  test('renders star count', () => {
    expect(screen.getByText(/5/i)).toBeInTheDocument();
  });
  test('renders star count', () => {
    render(
      <CardList
        data={[
          {
            id: '122',
            userHasStarred: false,
            description: 'test description',
            name: 'test title',
            stargazers_count: 5,
            html_url: 'http//:example.com',
          },
        ]}
        onStar={onStar}
      />
    );
    expect(screen.getAllByText(/Star/i)[1]).toBeInTheDocument();
  });
});
