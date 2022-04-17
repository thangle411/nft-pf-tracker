import React, { useState } from "react";
import Button from "common/Buttons";
import "styles/colors.scss";
import WalletOptionsModal from "components/WalletModal";
import { useWeb3React } from "@web3-react/core";

function Web3Wallet() {

    const [showModal, setShowModal]: [boolean, any] = useState(false);

    const { account, active, connector, error } = useWeb3React();

    console.log(account, active, connector, error)


    function onOpenWalletModalHandler(): void {
      setShowModal(true);
    };

  return (
    <>
      <Button 
        text="Connect Wallet" 
        style={styles}
        onClick={onOpenWalletModalHandler}
        ></Button>

        {
          showModal && <WalletOptionsModal></WalletOptionsModal>
        }
    </>
  );
}

const styles = {
  padding: "8px",
  background: "none",
  borderRadius: "4px",
  borderWidth: "1px",
  borderColor: "var(--light-grey)",
};

export default Web3Wallet;
