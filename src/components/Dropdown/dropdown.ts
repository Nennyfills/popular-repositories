import styled from 'styled-components';

export const StyledSelectWrapper = styled.div`
  position: relative;
  width: max-content;
`;

export const StyledSelect = styled.select`
  -webkit-appearance: none;
  -moz-appearance: none; /* Removes default style Firefox */
  appearance: none; /* Remove default browser styling */
  background-color: #DDD;
  border: solid 2px #40934d;
  color: black;
  padding: 10px 35px 10px 20px;
  border-radius: 20px;
  font-size: 0.875em;
  font-weight: 600;
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
