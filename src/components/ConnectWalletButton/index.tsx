import React, { useState } from "react";
import Button from "common/Buttons";
import "styles/colors.scss";
import WalletOptionsModal from "components/WalletModal";
import { useWeb3React } from "@web3-react/core";
import { useCurrentOpenedModal, useWalletModalToggle } from "store/application/hooks";
import { ApplicationModal } from "store/application/reducer";

function Web3WalletInner() {

    const { account, active, connector, error } = useWeb3React();

    // console.log(account, active, connector, error);

    const onOpenWalletModalHandler = useWalletModalToggle();

  if(account) {
    return (
      <>
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
          style={styles}
          onClick={onOpenWalletModalHandler}
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
  padding: "8px",
  background: "none",
  borderRadius: "4px",
  borderWidth: "1px",
  borderColor: "var(--light-grey)",
};

export default Web3Wallet;
