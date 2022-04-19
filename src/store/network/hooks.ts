import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { reducerType } from '../index';

export function useGasPrice() {

    const [gasPrice, setGasPrice] = useState('0');
    const [err, setErr] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const web3 = useSelector((state: reducerType) => state.web3.web3Instance);
    useEffect(() => {

        (async () => {
            if(web3) {
                setIsLoading(true)
                try {
                    const gas = await web3.eth.getGasPrice();
                    const converted = await web3.utils.fromWei(gas, 'gwei');
                    setGasPrice(Math.round(converted).toString())
                } catch(err: any) {
                    setErr(err);
                } finally {
                    setIsLoading(false)
                }
            }
        })()
    },[web3])

    return { gasPrice, isLoading, err }
}