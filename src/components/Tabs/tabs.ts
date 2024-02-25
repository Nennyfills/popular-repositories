import styled from 'styled-components';

interface TabProps {
  isActive: boolean;
}

export const TabContainer = styled.div`
  display: flex;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const Tab = styled.button.withConfig({
  shouldForwardProp: (prop) => prop !== 'isActive',
})<TabProps>`
  flex-grow: 1;
  padding: 10px 20px;
  border: none;
  background-color: ${(props) => (props.isActive ? '#40934d' : '#f0f0f0')};
  color: ${(props) => (props.isActive ? 'white' : 'black')};
  cursor: pointer;
  transition: background-color 0.3s;
  &:first-child {
    border-radius: 20px 0 0 20px;
  }

  &:last-child {
    border-radius: 0px 20px 20px 0px;
  }

  &:hover,
  &:active,
  &:focus {
    background-color: ${(props) => (props.isActive ? '#40934d' : '#e0e0e0')};
    outline: none;
  }
`;
