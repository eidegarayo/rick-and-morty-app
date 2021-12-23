import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';

import accountActs from '../../redux/actions/accountActs';
import { theme } from '../styledThemes';
import { Container } from '..';

const Nav = styled.nav`
  display: flex;
  height: 60px;
`;

const NavItem = styled.span`
  padding: 20px;
  font-family: ${props => props.theme.textFont};
  font-size: ${props => props.theme.fontSizes.medium};
  a, span {
    color: ${props => props.theme.colors.textColor};
    text-decoration: none;

    &:hover {
      color: ${props => props.theme.colors.secondaryColor};
      cursor: pointer;
    }
  }
`;

const Logo = styled.img`
  width: 75px;
`;


const Header = (props) => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.account.loading);
  const isLogged = useSelector((state) => state.account.logged);

  const handleLogout = () => {
    dispatch(accountActs.logout());
    // redirect to home
  }

  const getNavItems = () => (
    isLogged ? (
      <>
        <NavItem><Link to="#">Character List</Link></NavItem>
        <NavItem onClick={handleLogout}><span>Logout</span></NavItem>
      </>
    ) : (
      <>
        <NavItem><Link to="/login">Login</Link></NavItem>
      </>
    )
  );
  

  return (
    <Container justify="space-between" maxWidth width="100%" margin="0 auto" padding="20px">
      <Link to="/"><Logo src="/logo.svg" alt="log" /></Link>
      <Nav>
        {isLoading ? null : getNavItems()}
      </Nav>
    </Container>
  )
};

export default Header;
