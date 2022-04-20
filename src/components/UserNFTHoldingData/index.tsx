import { useWeb3React } from '@web3-react/core';
import { useState } from 'react';
import { getContract } from 'utils/getContract';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Web3 from 'web3';
import TransactionData from './TransactionData';
import { useSelector } from 'react-redux';

const abi = require('../../abis/erc721enumerable.json');

function UserHolding() {

    const { account, library } = useWeb3React();

    const web3 = useSelector((state: any) => state.web3.web3Instance);

    const [contractAddress, setContractAddress] = useState('');
    const [canCalculate, setCanCalculate] = useState(true);
    const [isCalculating, setIsCalculating] = useState(false);
    const [balance, setBalance] = useState(0);
    const [name, setName] = useState('');
    const [processedTransactions, setProcessedTransactions] = useState([]);

    const onUserSubmitHandler = async () => {
        if(library) {
            const contract = getContract(contractAddress, abi, library);

            if(contract.methods.tokenOfOwnerByIndex) {
                setCanCalculate(true);
                setBalance(await contract.methods.balanceOf(account).call());
                setName(await contract.methods.name().call());

                // const web3 = new Web3(library.provider);
                const currentBlock = await web3.eth.getBlockNumber();
                onFetchAllTransactions(currentBlock);
            } else {
                //warn if contract can't be used to do calculations
                setCanCalculate(false);
            }
        } else {
            window.alert('Please connect your wallet');
        }
    }

    const  onFetchAllTransactions = async (blockNumber: number) => {
        const response = await fetch(`https://api.etherscan.io/api?module=account&action=tokennfttx&contractaddress=${contractAddress}&address=${account}&page=1&offset=100&startblock=0&endblock=${blockNumber}&sort=asc&apikey=YourApiKeyToken`)
        const data = await response.json();
        processTransactions(data.result);
    }

    const processTransactions = (transactions: any) => {
        // console.log(transactions)

        const processedObj: any = {};
        transactions.forEach((x: any) => {
            if(!processedObj[x.hash]) {
                processedObj[x.hash] = [x];
            } else {
                processedObj[x.hash].push(x);
            }
        });

        // console.log(processedObj);
        setProcessedTransactions(processedObj);
    }
    
    return(
        <>
            <div className='d-flex align-items-center'>
                <input type="text" placeholder='Please enter NFT Contract Address' onInput={(e: any) => setContractAddress(e.target.value)}/>
                <span onClick={onUserSubmitHandler}><ArrowRightAltIcon style={styles.arrowIcon}/></span>
            </div>

            {!canCalculate && contractAddress && <span>Calculations can't be done on this NFT contract</span>}

            {canCalculate && 
                <span style={{color: 'white'}}>Balance: {balance} {name}</span>

            }

            {Object.keys(processedTransactions).map((x: any) => {
                return(
                <TransactionData data={processedTransactions[x]} hash={x} account={account} web3={web3} key={x}></TransactionData>
            )})}
        </>
    )
}

const styles = {
    arrowIcon: {
        fontSize: 40,
        cursor: 'pointer',
        color: 'white'
    },
}

export default UserHolding;