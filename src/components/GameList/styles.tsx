import styled from 'styled-components';
import { breakpoints } from '../../styles/breakpoints';

export const List = styled.ul`
  display: block;
  max-width: 54.2rem;
  margin: 0 auto;
  padding: 0 1.6rem;
  list-style: none;
  box-sizing: border-box;

  @media (min-width: ${breakpoints.tablet}) {
    max-width: ${breakpoints.tablet};
  }

  @media (min-width: ${breakpoints.desktop}) {
    max-width: ${breakpoints.desktop};
  }
`;

export const ListItem = styled.li`
  margin-bottom: 2.4rem;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
  }

  @media (min-width: ${breakpoints.tablet}) {
    max-width: 33.2rem;
    margin-right: 2.4rem;
    display: inline-block;

    &:nth-of-type(even) {
      margin-right: 0;
    }
  }

  @media (min-width: ${breakpoints.desktop}) {
    max-width: 31.2rem;

    &:nth-of-type(even) {
      margin-right: 2.4rem;
    }

    &:nth-of-type(3n + 3) {
      margin-right: 0;
    }
  }
`;
