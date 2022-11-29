import { useAccount } from "wagmi";
import { Web3Button } from "@web3modal/react";
import styled from "styled-components";

import Head from "next/head";
import { Container, Stack } from "@mui/material";

const StyledHeader = styled.h1`
  margin: 0;
  line-height: 1.15;
  font-size: 4rem;
  text-align: center;
  @media (max-width: 600px) {
    font-size: 3rem;
  }
`;

const StyledLink = styled.a`
  background: linear-gradient(90deg, #ff4e16, #ff6739);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const StyledParagraph = styled.p`
  margin: 0;
  line-height: 1.5;
  font-size: 1.5rem;
  padding: 1rem;
  &.instruction {
    color: #ce765b;
  }
  &.centered {
    text-align: center;
  }
`;

export default function Home() {
  const { address, isConnected } = useAccount();
  return (
    <Container>
      <Head>
        <title>Biconomy Frontend Assesment</title>
        <meta
          name="description"
          content="Frontend assesment created by Wojciech Turek"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Stack
          justifyContent="center"
          alignItems="center"
          height={"100vh"}
          sx={{
            padding: "0.5rem",
          }}
        >
          <StyledHeader>
            FrontEnd Assessment{" "}
            <StyledLink href="https://www.biconomy.io/">Biconomy</StyledLink>
          </StyledHeader>
          <StyledParagraph>
            Created by{" "}
            <StyledLink href="https://wojciechturek.com">
              Wojciech Turek
            </StyledLink>
          </StyledParagraph>
          <StyledParagraph className="instruction centered">
            Get started by connecting your wallet using the button below
          </StyledParagraph>
          <Web3Button label="Connect" />
          <p>{isConnected ? address : ""}</p>
        </Stack>
      </main>
    </Container>
  );
}
