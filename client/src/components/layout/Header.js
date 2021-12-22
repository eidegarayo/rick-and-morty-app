import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';

import { theme } from '../styledThemes';
import { Container } from '..';

const Nav = styled.nav`
  display: flex;
`;

const NavItem = styled.span`
  padding: 20px;
  font-family: ${props => props.theme.textFont};
  font-size: ${props => props.theme.fontSizes.medium};
  a {
    color: ${props => props.theme.colors.textColor};
    text-decoration: none;

    &:hover {
      color: ${props => props.theme.colors.secondaryColor}
    }
  }
`;

const Logo = styled.img`
  width: 75px;
`;


const Header = (props) => {
  const [isLogged, setIsLogged] = useState(true);

  return (
    <Container justify="space-between" maxWidth width="100%" margin="0 auto" padding="20px">
      <Link to="/"><Logo src="/logo.svg" alt="log" /></Link>
      <Nav>
        {
          isLogged ? (
            <>
              <NavItem><Link to="#">Character List</Link></NavItem>
              <NavItem><Link to="#">Logout</Link></NavItem>
            </>
          ) : (
            <>
              <NavItem><Link to="/login">Login</Link></NavItem>
            </>
          )
        }
      </Nav>
    </Container>
  )
};

export default Header;
