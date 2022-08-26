import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  transition: color 250ms linear;
    &: hover {
      text-decoration: underline;
      color: tomato;
    }
    &.active {
      color: orangered;
    }
  }
`;
