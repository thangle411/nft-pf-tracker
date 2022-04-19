/* eslint-disable @typescript-eslint/no-unused-expressions */
import { useWeb3React } from "@web3-react/core"
import { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import { reducerType } from '../store/index';

interface returnVal {
    balance: string,
    err: any
}

export default function useWalletETHBalance(): returnVal {
    const [balance, setBalance] = useState<string>('0');
    const [err, setError] = useState(null);
    const { account } = useWeb3React();
    const web3 = useSelector((state: reducerType) => state.web3.web3Instance);

    useEffect(() => {
        if(account && web3) {
            (async () => {
                try {
                    let data = await web3.eth.getBalance(account);
                    let converted = await web3.utils.fromWei(data);
                    setBalance(converted);
                } catch (err: any) {
                    setError(err);
                }
            })();
        }
    },[account, web3])

    
    return {balance, err};
}