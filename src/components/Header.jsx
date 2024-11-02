import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #1a1a1a;
  padding: 1rem;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.h1`
  margin: 0;
  color: #fff;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const StyledLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

function Header() {
  return (
    <HeaderContainer>
      <Nav>
        <Logo>The Agents Nest</Logo>
        <NavLinks>
          <StyledLink to="/">Dashboard</StyledLink>
          <StyledLink to="/projects">Projects</StyledLink>
          <StyledLink to="/agents">Agents</StyledLink>
        </NavLinks>
      </Nav>
    </HeaderContainer>
  );
}

export default Header;
