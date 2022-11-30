import {
  useNetwork,
  useBalance,
  useAccount,
  useSendTransaction,
  usePrepareSendTransaction,
  useSignTypedData,
} from "wagmi";
import { Web3Button } from "@web3modal/react";

import Head from "next/head";
import { Box, Container, Fade, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import {
  StyledData,
  StyledDataContainer,
  StyledHeader,
  StyledLink,
  StyledParagraph,
} from "../styles/styles";
import Button from "../components/Button";
import { BigNumber } from "ethers";
import { domain, types, value } from "../utils";

export default function Home() {
  const { address, isConnected } = useAccount();
  const { data } = useBalance({
    address,
  });
  const { config } = usePrepareSendTransaction({
    request: {
      to: address || "",
      value: BigNumber.from("0"), // The amount to send is set to 0 on purpose as the transaction would fail if someone with lower balance tried to invoke it
    },
  });
  const { signTypedData } = useSignTypedData({ domain, types, value });
  const { sendTransaction } = useSendTransaction(config);

  const { chain } = useNetwork();
  const [hydrated, setHydrated] = useState<boolean>(false);
  const [walletAddress, setWalletAddress] = useState<string>("");
  const [balance, setBalance] = useState<string>("");
  const [chaindId, setChaindId] = useState<number>(0);
  const [networkName, setNetworkName] = useState<string>("");
  const [sendTransactionError, setSendTransactionError] = useState<string>("");

  useEffect(() => {
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!isConnected) {
      setWalletAddress("");
      setBalance("");
      setChaindId(0);
      setNetworkName("");
      setSendTransactionError("");
      return;
    }
  }, [isConnected]);

  const showWalletAddress = () => {
    if (address) setWalletAddress(address);
  };

  const showBalance = () => {
    if (data) setBalance(`${data.formatted} ${data.symbol}`);
  };

  const showChainId = () => {
    if (chain) setChaindId(chain.id);
  };

  const showNetworkName = () => {
    if (chain) setNetworkName(chain.name);
  };

  const sendTransactionHandler = () => {
    sendTransaction?.();
  };

  const signTypedDataHandler = () => {
    signTypedData?.();
  };

  const buttons = [
    {
      text: "Wallet Address",
      onClick: showWalletAddress,
      value: walletAddress,
    },
    {
      text: "Network Name",
      onClick: showNetworkName,
      value: networkName,
    },
    {
      text: "Network Chain ID",
      onClick: showChainId,
      value: chaindId,
    },
    {
      text: "Native Balance",
      onClick: showBalance,
      value: balance,
    },
    {
      text: "Send Transaction",
      onClick: sendTransactionHandler,
      value: "",
    },
    {
      text: "Sign Typed Data",
      onClick: signTypedDataHandler,
      value: "",
    },
  ];

  const DataSection = ({
    displayData,
    dataRequest,
    buttonText,
  }: {
    buttonText: string;
    displayData: string | number;
    dataRequest: () => void | undefined;
  }) => (
    <StyledDataContainer>
      <Button text={buttonText} onClick={dataRequest} disabled={!isConnected} />
      <Fade suppressHydrationWarning in={!!displayData}>
        <StyledData>{displayData}</StyledData>
      </Fade>
    </StyledDataContainer>
  );

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
          minHeight={"100vh"}
          padding={2}
          boxSizing={"border-box"}
          justifyContent="center"
        >
          <Stack alignItems="center">
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

            {hydrated && (
              <StyledParagraph className="instruction centered">
                {!isConnected
                  ? "Get started by connecting your wallet using the button below"
                  : "Click the below button to disconnect your wallet"}
              </StyledParagraph>
            )}
            <Web3Button label="Connect" />
          </Stack>
          <Stack gap={2} paddingTop={4}>
            {buttons.map((button) => (
              <DataSection
                key={button.text}
                buttonText={button.text}
                displayData={button.value}
                dataRequest={button.onClick}
              />
            ))}
          </Stack>
          {sendTransactionError && (
            <Box
              sx={{
                color: "red",
                padding: "0.5rem",
              }}
            >
              {sendTransactionError}
            </Box>
          )}
        </Stack>
      </main>
    </Container>
  );
}
