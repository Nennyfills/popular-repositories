import { DropdownIcon, StyledSelect, StyledSelectWrapper } from './dropdown';

/**
 * Props for the Dropdown component.
 * @options string[] - The options for the dropdown.
 */
type dropdownProps = {
  options: string[];
  handleChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

/**
 * Dropdown component.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string[]} props.options - The options for the dropdown.
 * @returns {JSX.Element} The rendered dropdown component.
 */
const Dropdown = ({ options, handleChange }: dropdownProps) => {
  return (
    <StyledSelectWrapper>
      <StyledSelect onChange={handleChange}>
        <option>Filter By Language</option>
        {options.map((value) => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </StyledSelect>
      <DropdownIcon>▼</DropdownIcon>
    </StyledSelectWrapper>
  );
};

export default Dropdown;
