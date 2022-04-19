import { useWeb3React } from "@web3-react/core"
import Web3 from "web3";

export async function useWalletETHBalance(): Promise<string>{
    const { account, library } = useWeb3React();
    const web3 = new Web3(library.provider);
    let balance: string = '0';
    if(account) {
        balance = await web3.eth.getBalance(account);
    }
    return balance;
}