import { fireEvent, render, screen } from '@testing-library/react';
import Dropdown from '.';

describe('Dropdown', () => {
  const options = ['Option 1', 'Option 2', 'Option 3'];
  const handleChange = jest.fn();
  test('renders dropdown options', () => {
    render(<Dropdown handleChange={handleChange} options={options} />);
    const optionElements = screen.getAllByRole('option');
    expect(optionElements).toHaveLength(4);
    expect(optionElements[1]).toHaveValue('Option 1');
    expect(optionElements[2]).toHaveTextContent('Option 2');
  });

  test('calls handleChange on select change', () => {
    const handleChange = jest.fn();
    render(<Dropdown options={['React']} handleChange={handleChange} />);

    const selectElement = screen.getByRole('combobox');
    fireEvent.change(selectElement, { target: { value: 'React' } });

    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});
