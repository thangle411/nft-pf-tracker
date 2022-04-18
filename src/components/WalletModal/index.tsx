import { Dialog } from '@mui/material';
import { SUPPORTED_WALLETS } from "constants/supportedWallet";
import iWalletInfo from "interfaces/iWalletInfo";
import Option from "./Option";
import { injected } from "connector/web3WalletConnect";
import { ApplicationModal } from "store/application/reducer";
import { useCurrentOpenedModal, useWalletModalToggle } from "store/application/hooks";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

function WalletOptionsModal() {

    const isOpen = useCurrentOpenedModal(ApplicationModal.WALLET);
    const toggleWalletModal = useWalletModalToggle();

    if(isOpen) {
        return(
            <>
                <Dialog open={isOpen} onClose={toggleWalletModal}>
                    <div style={styles.container}>
                        <div style={styles.title}>Choose a wallet</div>

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

                        <div className='d-flex-column'>
                            <div style={styles.separator} className='text-bold text-align-center'>Or</div>
                            <div className='d-flex align-items-center'>
                                <input className='app-input flex-one' type="text" placeholder='Enter your ERC20 address here'/>
                                <ArrowRightAltIcon style={styles.arrowIcon}/>
                            </div>
                        </div>
                    </div>
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
    }
}

export default WalletOptionsModal;