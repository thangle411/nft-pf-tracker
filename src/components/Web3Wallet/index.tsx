import Button from "common/Buttons";
import "styles/colors.scss";
import WalletOptionsModal from "components/WalletModal";
import { useWeb3React } from "@web3-react/core";
import { useWalletModalToggle } from "store/application/hooks";
import shortenAddress from "utils/shortenAddress";
import {useWalletETHBalance} from "store/wallet/hooks";

function Web3WalletInner() {

  // const componentMounted = useRef(true);

  const { account, active, connector, error } = useWeb3React();

  const {balance, err} = useWalletETHBalance();

  const toggleWalletModal = useWalletModalToggle();

  if(account) {
    return (
      <>
        <div style={styles.balanceAddress}>
          <span>
            { err ? 
            <span>
              Error!
            </span>
            :
            <span>
              {balance.slice(0,10)} ETH
            </span> }
          </span>
          <span>{shortenAddress(account)}</span>
        </div>
      </>
    );
  } else if (error) {
    return(
      <>
        {error}
      </>
    )
  } else {
    return(
      <>
        <Button 
          text="Connect Wallet" 
          style={styles.connectButton}
          onClick={toggleWalletModal}
          ></Button>
      </>
    )
  }
}

function Web3Wallet() {
  return(
    <>
      <Web3WalletInner></Web3WalletInner>
      <WalletOptionsModal></WalletOptionsModal>
    </>
  )
}

const styles = {
  balanceAddress: {
    padding: "12px",
    background: "white",
    borderRadius: "4px",
    borderWidth: "1px",
    borderColor: "var(--light-grey)",
    fontSize: '20px',
    width: '300px',
    display: 'flex',
    justifyContent: 'space-between'
  },
  connectButton: {
    padding: "12px",
    background: "white",
    borderRadius: "4px",
    borderWidth: "1px",
    borderColor: "var(--light-grey)",
    fontSize: '20px'
  }
}

export default Web3Wallet;
