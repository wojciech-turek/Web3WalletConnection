import styled from "styled-components";

export const StyledParagraph = styled.p`
  margin: 0;
  line-height: 1.5;
  font-size: 1.5rem;
  padding: 1rem;
  text-align: center;
  &.instruction {
    color: #fe725b;
  }
  &.centered {
    text-align: center;
  }
`;

export const StyledDataContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  @media (max-width: 600px) {
    flex-direction: column;
    gap: 0;
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

export const StyledData = styled.div`
  word-break: break-all;

  @media (max-width: 600px) {
    padding: 1rem 0;
  }
`;

export const StyledLink = styled.a`
  background: linear-gradient(90deg, #ff4e16, #ff6739);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;
