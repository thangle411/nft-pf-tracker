import { useState } from 'react';
import { Dialog } from '@mui/material';
import { SUPPORTED_WALLETS } from "constants/supportedWallet";
import iWalletInfo from "interfaces/iWalletInfo";
import Option from "./Option";
import { injected } from "connector/web3WalletConnect";
import { ApplicationModal } from "store/application/reducer";
import { useCurrentOpenedModal, useWalletModalToggle } from "store/application/hooks";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { AbstractConnector } from '@web3-react/abstract-connector';
import { useWeb3React } from '@web3-react/core';
import CircularProgress from '@mui/material/CircularProgress';

function WalletOptionsModal() {

    const { active, account, connector, activate, error } = useWeb3React();

    const isOpen = useCurrentOpenedModal(ApplicationModal.WALLET);
    const toggleWalletModal = useWalletModalToggle();

    const [pendingConnection, setPendingConnection] = useState<AbstractConnector | undefined>(undefined);
    const [connectWalletError, setConnectWalletError] = useState<any>(null);

    const onConnectWalletHandler = async(connector: AbstractConnector | undefined) => {
        if(connector) {
            try {
                setPendingConnection(connector);
                await activate(connector, undefined, true);
                // const walletAddress = await connector.getAccount();
                // console.log(walletAddress);
                toggleWalletModal();
            } catch(err) {
                console.log(err);
                setConnectWalletError(err);
            }
        }
    }

    const pendingView = 
    connectWalletError ? 
    <div style={styles.pendingView}>
        <span style={styles.errorText}>Error connecting. Please check your wallet</span>
    </div>
    :
    <div style={styles.pendingView}>
        <span style={styles.pendingText}>Connecting</span>
        <CircularProgress />
    </div>

    if(isOpen) {
        return(
            <>
                <Dialog open={isOpen} onClose={toggleWalletModal}>
                    {
                        pendingConnection ? 
                        pendingView
                        :
                        <div style={styles.container}>
                            <div style={styles.title}>Choose a wallet</div>

                            {
                                Object.keys(SUPPORTED_WALLETS).map((key: string) => {
                                    const option: iWalletInfo = SUPPORTED_WALLETS[key];
                                    const isMetamask = window.ethereum && window.ethereum.isMetaMask;
                                    if(option.connector === injected) {
                                        if(option.name === 'MetaMask' && isMetamask) {
                                            return(
                                                <Option onClick={() => onConnectWalletHandler(option.connector)} key={key} option={option}></Option>
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

                            <div className='d-flex-column'>
                                <div style={styles.separator} className='text-bold text-align-center'>Or</div>
                                <div className='d-flex align-items-center'>
                                    <input className='app-input flex-one' type="text" placeholder='Enter your ERC20 address here'/>
                                    <ArrowRightAltIcon style={styles.arrowIcon}/>
                                </div>
                            </div>
                        </div>
                    }
                  
                </Dialog>
                 
            </>
          
        );
    }

    return(
        <>
        </>
    )
}

const styles: any = {
    container: {
        width: '500px',
        padding: '20px',
        boxShadow: ''
    },
    title: {
        fontSize: '20px',
        marginBottom: '10px'
    },
    separator: {
        margin: '20px 0',
        fontSize: '30px'
    },
    arrowIcon: {
        fontSize: 40,
        cursor: 'pointer'
    },
    pendingView: {
        width: '500px',
        height: '100px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    pendingText: {
        fontWeight: 'bold',
        fontSize: '30px',
        marginRight: '10px'
    },
    errorText: {
        fontSize: '20px',
        fontWeight: 'bold',
        color: 'red'
    }
}

export default WalletOptionsModal;