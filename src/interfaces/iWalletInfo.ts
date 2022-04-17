import { AbstractConnector } from "@web3-react/abstract-connector"

interface iWalletInfo {
    connector?: AbstractConnector
    name: string
    iconURL: string
    description: string
    href: string | null
    color: string
    primary?: true
    mobile?: true
    mobileOnly?: true
}

export default iWalletInfo;