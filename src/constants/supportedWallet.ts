//from Uniswap https://github.com/Uniswap/interface/blob/main/src/constants/wallet.ts
import { injected } from "connector/web3WalletConnect"
import WalletInfo from "interfaces/iWalletInfo";

export const SUPPORTED_WALLETS: { [key: string]: WalletInfo } = {
    INJECTED: {
        connector: injected,
        name: 'Injected',
        iconURL: 'INJECTED_ICON_URL',
        description: 'Injected web3 provider.',
        href: null,
        color: '#010101',
        primary: true,
    },
    METAMASK: {
        connector: injected,
        name: 'MetaMask',
        iconURL: 'assets/img/metamask.png',
        description: 'Easy-to-use browser extension.',
        href: null,
        color: '#E8831D',
    },
    // WALLET_CONNECT: {
    //     connector: walletconnect,
    //     name: 'WalletConnect',
    //     iconURL: WALLETCONNECT_ICON_URL,
    //     description: 'Connect to Trust Wallet, Rainbow Wallet and more...',
    //     href: null,
    //     color: '#4196FC',
    //     mobile: true,
    // },
    //   WALLET_LINK: {
    //     connector: walletlink,
    //     name: 'Coinbase Wallet',
    //     iconURL: COINBASE_ICON_URL,
    //     description: 'Use Coinbase Wallet app on mobile device',
    //     href: null,
    //     color: '#315CF5',
    // },
    //   COINBASE_LINK: {
    //     name: 'Open in Coinbase Wallet',
    //     iconURL: COINBASE_ICON_URL,
    //     description: 'Open in Coinbase Wallet app.',
    //     href: 'https://go.cb-w.com/mtUDhEZPy1',
    //     color: '#315CF5',
    //     mobile: true,
    //     mobileOnly: true,
    // },
    //   FORTMATIC: {
    //     connector: fortmatic,
    //     name: 'Fortmatic',
    //     iconURL: FORTMATIC_ICON_URL,
    //     description: 'Login using Fortmatic hosted wallet',
    //     href: null,
    //     color: '#6748FF',
    //     mobile: true,
    // },
}

export {};