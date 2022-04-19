import Web3 from "web3";

export function getContract(address: string, abi: any, library: any): any {
    const web3 = new Web3(library.provider);
    return new web3.eth.Contract(abi, address);
}