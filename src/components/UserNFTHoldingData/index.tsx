import { useWeb3React } from '@web3-react/core';
import { useState } from 'react';
import { getContract } from 'utils/getContract';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const abi = require('../../abis/erc721enumerable.json');

function UserHolding() {

    const { account, library } = useWeb3React(); 

    const [contractAddress, setContractAddress] = useState('');
    const [canCalculate, setCanCalculate] = useState(false);
    const [isCalculating, setIsCalculating] = useState(false);

    const onUserSubmitHandler = () => {
        console.log(contractAddress)
        if(library) {
            const contract = getContract(contractAddress, abi, library);
            console.log(contract.methods);

            if(contract.methods.tokenOfOwnerByIndex) {
                setCanCalculate(true);
            } else {
                //warn if contract can't be used to do calculations
                setCanCalculate(false);
            }
        } else {
            window.alert('Please connect your wallet');
        }
    }
    
    return(
        <>
            <div className='d-flex align-items-center'>
                <input type="text" placeholder='Please enter NFT Contract Address' onInput={(e: any) => setContractAddress(e.target.value)}/>
                <span onClick={onUserSubmitHandler}><ArrowRightAltIcon style={styles.arrowIcon}/></span>
            </div>

            {!canCalculate && contractAddress && <span>Calculations can't be done on this NFT contract</span>}
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