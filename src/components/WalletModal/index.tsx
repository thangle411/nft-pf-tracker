import React from "react";
import { SUPPORTED_WALLETS } from "constants/supportedWallet";
import iWalletInfo from "interfaces/iWalletInfo";
import Option from "./Option";
import { injected } from "connector/web3WalletConnect";

function WalletOptionsModal() {

    return(
        <div style={styles.container}>
            {
                Object.keys(SUPPORTED_WALLETS).map((key: string) => {
                    const option: iWalletInfo = SUPPORTED_WALLETS[key];
                    const isMetamask = window.ethereum && window.ethereum.isMetaMask;
                    if(option.connector === injected) {
                        if(option.name === 'MetaMask' && isMetamask) {
                            return(
                                <Option key={key} option={option}></Option>
                            )
                        }
                    } else if (option.name === 'Injected' && isMetamask) {
                        // don't return metamask if injected provider isn't metamask
                        return null
                    } else if (option.name === 'MetaMask' && !isMetamask) {
                        return null
                    } else {
                        return null;
                    }
                    return null;
                })
            }
        </div>
    );

}

const styles: any = {
    container: {

    }
}

export default WalletOptionsModal;