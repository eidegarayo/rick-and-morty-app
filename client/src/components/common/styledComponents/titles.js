import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 50px;
  text-align: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.s}) {
    font-size: 100px;
  }
`;

export const SubTitle = styled.p`
  font-size: 25px;
  margin-top: 50px;
  text-align: center;
  min-height: 60px;

  @media (min-width: ${({ theme }) => theme.breakpoints.s}) {
    font-size: 50px;
  }
`;
