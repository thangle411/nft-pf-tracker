/* eslint-disable @typescript-eslint/no-unused-expressions */
import { useWeb3React } from "@web3-react/core"
import { Ref, useEffect, useState } from "react";
import Web3 from "web3";

interface returnVal {
    balance: string,
    err: any
}

export default function useWalletETHBalance(): returnVal {
    const [balance, setBalance] = useState<string>('0');
    const [err, setError] = useState(null);
    const { account, library } = useWeb3React();

    useEffect(() => {
        if(account && library) {
            const web3 = new Web3(library.provider);
            (async () => {
                if(account) {
                    
                    try {
                        let data = await web3.eth.getBalance(account);
                        let converted = await web3.utils.fromWei(data);
                        setBalance(converted);
                    } catch (err: any) {
                        setError(err);
                    }
                }
            })();
        }
    },[account])

    
    return {balance, err};
}