import { InjectedConnector } from '@web3-react/injected-connector'

const SUPPORTED_CHAIN_IDS: number[] = [1, 4, 3, 42, 5, 56, 97, 1337];

//Metamask
const injected: any = new InjectedConnector({ supportedChainIds: SUPPORTED_CHAIN_IDS});

export {injected};