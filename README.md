This is a [Next.js](https://nextjs.org/) project.

## Start

In order to run the app please clone the repository and create `.env` file with `NEXT_PUBLIC_PROJECT_ID=""`

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

## Tools

- Next.js (as the framework for the application)
- Typescript
- Web3Modal (tool for multi-wallet connection)
- Ethers (unit conversion + used in the background in one of the other libraries)
- wagmi (React hooks for ethereum)
- Material UI (UI styling)
- Styled-Components (for custom elements)

## Features

- Wallet connection
- Network and chain id display
- Native balance display
- Send dummy transfer to self
- Sign transaction using EIP712
- Disconnect Wallet
