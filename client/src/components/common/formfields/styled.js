import styled from 'styled-components';

export const H2 = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.lightGrey};
`;

export const Text = styled.p`
  text-align: center;
  margin-top: 30px;
  margin-bottom: 10px;
`;

export const LinkButton = styled.span`
  padding: 5px;
  margin: 0 auto;
  font-weight: 700;
  // border: 2px solid ${({ theme }) => theme.colors.secondaryColor};
  &:hover {
    cursor: pointer;
    background-color: #f1f1f1;
  }
  a {
    color: ${({ theme }) => theme.colors.secondaryColor};
    text-decoration: none;
  }
`;

export const ErrorText = styled.p`
color: ${({ theme }) => theme.colors.error};
height: 20px;
`;
