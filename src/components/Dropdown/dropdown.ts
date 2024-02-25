import styled from 'styled-components';

export const StyledSelectWrapper = styled.div`
  position: relative;
  width: max-content;
`;

export const StyledSelect = styled.select`
  -webkit-appearance: none; /* Removes default chrome and safari style */
  -moz-appearance: none; /* Removes default style Firefox */
  appearance: none; /* Remove default browser styling */
  background-color: #e0e0e0;
  border: none;
  padding: 10px 30px 10px 10px;
  border-radius: 20px;
  font-size: 16px;
  cursor: pointer;
  text-transform: capitalize;
  &:hover,
  &:active,
  &:focus {
    background-color: #c8c8c8;
    outline: none;
  }
`;

export const DropdownIcon = styled.div`
  pointer-events: none; /* Makes the icon non-interactive */
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
`;
