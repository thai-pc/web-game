import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {
  backgroundColor,
  primaryTextColor,
  secondaryColor,
  secondaryTextColor,
  tertiaryTextColor,
} from '../../styles/theme';
import { breakpoints } from '../../styles/breakpoints';

export const StyledLink = styled(Link)`
  display: inline-block;
  width: 100%;
  text-decoration: none;
  background-color: ${secondaryColor};
  border-radius: 0.4rem;
`;

export const Img = styled.img`
  width: 100%;
`;

export const Title = styled.h2`
  margin: 0;
  font-size: 2.4rem;
  color: ${primaryTextColor};
`;

export const Details = styled.div`
  padding: 2rem;

  @media (min-width: ${breakpoints.tablet}) {
    white-space: nowrap;
  }
`;

export const Description = styled.p`
  font-size: 1.6rem;
  color: ${secondaryTextColor};

  @media (min-width: ${breakpoints.tablet}) {
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const Genre = styled.p`
  padding: 0.2rem 0.4rem;
  margin: 0 0.8rem 0 0;
  border-radius: 0.4rem;
  font-size: 1.2rem;
  color: ${tertiaryTextColor};
  background-color: ${backgroundColor};
  float: right;
`;

export const Icon = styled.img`
  width: 2rem;
  height: 2rem;
  margin-right: 0.8rem;
`;
