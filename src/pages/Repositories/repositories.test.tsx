import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Repositories from '.';
import { testDataTwo } from '@/test/data';

describe('Repositories Component', () => {
  beforeEach(() => {
    Storage.prototype.getItem = jest.fn(() => JSON.stringify(testDataTwo));
  });
  afterEach(() => {
    jest.clearAllMocks;
  });
  test('renders with initial data from local storage', () => {
    render(<Repositories />);

    expect(screen.getByText('Sun well')).toBeInTheDocument();
  });

  test('updates displayed data on tab selection "Starred Repositories"', async () => {
    render(<Repositories />);
    const tabsAction = screen.getByText('Starred Repositories');
    await fireEvent.click(tabsAction);
    expect(screen.getByText('Jane bill')).toBeInTheDocument();
    expect(screen.getByText('John hill')).toBeInTheDocument();
  });
  test('updates displayed data on tab selection "Popular Repositories"', async () => {
    render(<Repositories />);
    const tabsAction = screen.getByText('Popular Repositories');
    await fireEvent.click(tabsAction);
    expect(screen.getByText('Jane bill')).toBeInTheDocument();
    expect(screen.getByText('John hill')).toBeInTheDocument();
    expect(screen.getByText('Sun well')).toBeInTheDocument();
    expect(screen.getByText('Jame Group')).toBeInTheDocument();
  });

  test('should filter by language', async () => {
    render(<Repositories />);
    const dropdown = screen.getByRole('combobox');

    await userEvent.selectOptions(dropdown, 'ts');

    expect(screen.getByText('Sun well')).toBeInTheDocument();
  });
  test('should filter by language and select starred repositories without data', async () => {
    render(<Repositories />);
    const dropdown = screen.getByRole('combobox');
    const tabsAction = screen.getByText('Starred Repositories');
    await fireEvent.click(tabsAction);
    await userEvent.selectOptions(dropdown, 'ts');

    expect(screen.getByText('No data')).toBeInTheDocument();
  });

  test('should filter by language and select starred repositories with data', async () => {
    render(<Repositories />);
    const dropdown = screen.getByRole('combobox');
    const tabsAction = screen.getByText('Starred Repositories');
    await fireEvent.click(tabsAction);
    await userEvent.selectOptions(dropdown, 'js');

    expect(screen.getByText('John hill')).toBeInTheDocument();
  });
  test('should star a repository', async () => {
    render(<Repositories />);
    const starAction = screen.getAllByText('Star')[1];
    await fireEvent.click(starAction);

    expect(screen.getByText('4,100')).toBeInTheDocument();
  });
});
