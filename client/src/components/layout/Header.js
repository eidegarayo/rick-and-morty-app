import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components/macro';

import accountActs from '../../redux/actions/accountActs';
import { Container } from '..';

const Nav = styled.nav`
  display: flex;
  height: 60px;
`;

const NavItem = styled.span`
  padding: 20px;
  font-family: ${({ theme }) => theme.textFont};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  a, span {
    color: ${({ theme }) => theme.colors.textColor};
    text-decoration: none;

    &:hover {
      color: ${({ theme }) => theme.colors.secondaryColor};
      cursor: pointer;
    }
  }
`;

const Logo = styled.img`
  width: 150px;
`;


const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.account.loading);
  const isLogged = useSelector((state) => state.account.logged);

  const handleLogout = () => {
    dispatch(accountActs.logout());
    navigate('/');
  };

  const getNavItems = () => (
    isLogged ? (
      <>
        <NavItem><Link to="/character-list">Character List</Link></NavItem>
        <NavItem onClick={handleLogout}><span>Logout</span></NavItem>
      </>
    ) : (
      <NavItem><Link to="/login">Login</Link></NavItem>
    )
  );

  return (
    <Container justify="space-between" contentWidth width="100%" margin="0 auto" padding="20px">
      <Link to="/"><Logo src="/logo.svg" alt="log" /></Link>
      <Nav>
        {isLoading ? null : getNavItems()}
      </Nav>
    </Container>
  );
};

export default Header;
