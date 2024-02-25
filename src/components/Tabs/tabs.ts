import styled from 'styled-components';

interface TabProps {
  isActive: boolean;
}

export const TabContainer = styled.div`
  display: flex;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border: 1px solid #ccc;
`;

export const Tab = styled.button.withConfig({
  shouldForwardProp: (prop) => prop !== 'isActive',
})<TabProps>`
  flex-grow: 1;
  padding: 10px 20px;
  font-size: 0.875em;
  font-weight: 600;
  border: solid 1px #40934d;
  background-color: ${(props) => (props.isActive ? '#40934d' : '#DDD')};
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
    background-color: ${(props) => (props.isActive ? '#40934d' : '#c8c8c8')};
    outline: none;
  }
`;
