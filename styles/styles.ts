import styled from "styled-components";

export const StyledParagraph = styled.p`
  margin: 0;
  line-height: 1.5;
  font-size: 1.5rem;
  padding: 1rem;
  &.instruction {
    color: #fe725b;
  }
  &.centered {
    text-align: center;
  }
`;

export const StyledHeader = styled.h1`
  margin: 0;
  line-height: 1.15;
  font-size: 4rem;
  text-align: center;
  @media (max-width: 600px) {
    font-size: 3rem;
  }
`;

export const StyledLink = styled.a`
  background: linear-gradient(90deg, #ff4e16, #ff6739);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;
