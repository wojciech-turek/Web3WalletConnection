import { BigNumber } from "ethers";

// Hardcoded data just to show signing typed data

export const domain = {
  name: "Fontend Assessment Biconomy",
  version: "1",
  chainId: 1,
  verifyingContract: "0xbBbBBBBbbBBBbbbBbbBbbbbBBbBbbbbBbBbbBBbB",
} as const;

export const types = {
  Permit: [
    { name: "owner", type: "address" },
    { name: "spender", type: "address" },
    { name: "value", type: "uint256" },
    { name: "nonce", type: "uint256" },
    { name: "deadline", type: "uint256" },
  ],
} as const;

export const value = {
  owner: "0xCcCCccccCCCCcCCCCCCcCcCccCcCCCcCcccccccC",
  spender: "0xE66096b62859ade21170558eE73fBC1A8fEC9F17",
  value: BigNumber.from("1000000000000000000"),
  nonce: BigNumber.from("1"),
  deadline: BigNumber.from("1615808022"),
} as const;
