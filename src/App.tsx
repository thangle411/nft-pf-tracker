import Web3Wallet from 'components/Web3Wallet';
import React from 'react';
import './App.scss';
import { useWeb3React } from '@web3-react/core';
import { useDispatch } from 'react-redux';
import { setWeb3 } from 'store/web3/reducer';
import { useEffect } from 'react';
import GasPrice from 'components/GasPrice';
import Web3 from 'web3';

function App() {

  const { library } = useWeb3React();
  const dispatch = useDispatch();

  useEffect(() => {
    if(library) {
      const web3 = new Web3(library.provider);
      dispatch(setWeb3(web3));
    }
  },[library, dispatch])

  return (
    <div className="App">
      <Web3Wallet></Web3Wallet>
      <GasPrice></GasPrice>
    </div>
  );
}

export default App;
