import { fireEvent, render, screen } from '@testing-library/react';
import Tabs from '.';

describe('Tabs', () => {
  const tabs = [
    { name: 'Tab 1', onClick: jest.fn() },
    { name: 'Tab 2', onClick: jest.fn() },
    { name: 'Tab 3', onClick: jest.fn() },
  ];
  const currentTab = 'Tab 2';

  beforeEach(() => {
    render(<Tabs tabs={tabs} currentTab={currentTab} />);
  });

  test('renders all tabs', () => {
    const tabElements = screen.getAllByRole('tab');
    expect(tabElements.length).toBe(tabs.length);
  });

  test('renders active tab with correct name', () => {
    const activeElement = screen.getByText(/Tab 2/i);
    expect(activeElement).toBeInTheDocument();
  });

  test('calls onClick when a tab is clicked', () => {
    const tabElement = screen.getByRole('tab', { name: 'Tab 1' });
    fireEvent.click(tabElement);
    expect(tabs[0].onClick).toHaveBeenCalledTimes(1);
  });
});
