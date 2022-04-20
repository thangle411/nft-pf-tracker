import { useEffect, useRef, useState } from "react";

function TransactionData(props: any) {

    const isMounted = useRef(true);
    const [txData, setTxData] = useState<any>(null);

    const web3 = props.web3;
    
    const color = txData?.from === props.account ? 'red' : 'green';

    useEffect(() => {
        if(isMounted.current) {
            web3.eth.getTransactionReceipt(props.hash).then(setTxData);
        }
        return(() => {isMounted.current = false})
    },[props.hash])

    console.log(txData);

    return(
        <>
            <a href={`https://etherscan.io/tx/${props.hash}`} target='_blank' rel="noreferrer" style={{color: 'white'}} >Tx: {props.hash}</a>

            <div style={{color: 'white'}}>
                <div>Token ID</div>
                <div style={{color}}>Value: {txData ? txData.value : '-'} ETH</div>
            </div>
            {props.data.map((x: any) => {
                return(
                    <div style={{color: 'white'}} key={x.tokenID}>{x.tokenID}</div>
                )
            })}
        </>
    )
}

export default TransactionData;