import { createSlice } from '@reduxjs/toolkit'
import Web3 from 'web3';

// interface Web3State {
//     web3Instance: Web3 | null
// }

const initialState = {
    web3Instance: null
};

const web3Slice = createSlice({
    name: 'web3',
    initialState,
    reducers: {
        setWeb3(state, action) {
            state.web3Instance = action.payload;
        }
    }
})

export const { setWeb3 } = web3Slice.actions;
export default web3Slice.reducer;