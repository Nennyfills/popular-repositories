import styled, { css } from 'styled-components';

type starProps = {
  starCount?: boolean;
};

export const CardContainer = styled.article`
  height: 130px;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  margin: 16px;
  text-align: left;
  background-color: #fff;
  position: relative;
`;

export const CardHeader = styled.header`
  margin-bottom: 8px;
`;

export const CardTitle = styled.h4`
  margin: 0;
  color: #40934d;
  font-size: 1em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
  &:first-letter {
    text-transform: uppercase;
  }
`;

export const CardDescription = styled.p`
  margin: 0 0 16px 0;
  color: black;
  font-size: 0.875em;
  line-height: 1.5;
  max-height: 3em;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  &::first-letter {
    text-transform: capitalize;
  }
`;

export const StarWrapper = styled.footer`
  position: absolute;
  bottom: 16px;
  display: flex;
  align-items: center;
  border: 1px solid #40934d;
  width: fit-content;
  border-radius: 20px;
  background-color: #fff;
  border-radius: 20px;
  &:hover {
    background-color: #f0f0f0;
  }
`;
export const Button = styled.button`
  cursor: pointer;
  padding: 5px 16px;
  border: none;
  border-radius: 20px 0 0 20px;
  background-color: #40934d;
  color: white;
  &:hover,
  &:active,
  &:focus {
    background-color: #52a563;
    outline: none;
  }
`;

export const StarCount = styled.span`
  color: #40934d;
  padding: 0 1rem;
`;

export const StyledStar = styled.span.withConfig({
  shouldForwardProp: (prop) => !['starCount'].includes(prop),
})<starProps>`
  font-size: 14px;
  color: transparent;
  -webkit-text-stroke: 1px white;
  text-stroke: 1px white;
  margin-right: 8px;

  ${(props) =>
    props.starCount &&
    css`
      color: white;
      -webkit-text-stroke: 0;
      text-stroke: 0;
    `}
`;

export const Link = styled.a`
  color: #40934d;
  font-size: 1em;
  text-decoration: none;
  font-weight: bold;
  border-left: 2px solid #40934d;
  padding: 0 1em;
  pointer: cursor;
`;
