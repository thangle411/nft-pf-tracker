import { createSlice, nanoid } from '@reduxjs/toolkit'

export enum ApplicationModal {
    WALLET
}

export interface ApplicationState {
    readonly chainId: number | null
    readonly currentOpenedModal: ApplicationModal | null
}

const initialState: ApplicationState = {
    chainId: null,
    currentOpenedModal: null
};

const applicationSlice = createSlice({
    name: 'application',
    initialState,
    reducers: {
        updateChainId(state, action) {
            const { chainId } = action.payload;
            state.chainId = chainId;
        },
        setCurrentOpenedModal(state, action) {
            console.log(state.currentOpenedModal,action.payload)
            state.currentOpenedModal = action.payload;
        }
    }
})

export const { updateChainId, setCurrentOpenedModal } = applicationSlice.actions;
export default applicationSlice.reducer;

