import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { reducerType } from 'store';
import { ApplicationModal, ApplicationState, setCurrentOpenedModal } from './reducer';

export function useCurrentOpenedModal(modal: ApplicationModal): boolean {
    const currentOpenedModal = useSelector((state: reducerType) => state.application.currentOpenedModal)
    return modal === currentOpenedModal;
} 

export function useToggleModal(modal: ApplicationModal): () => void {
    const isOpen = useCurrentOpenedModal(modal);
    const dispatch = useDispatch();
    return useCallback(() => dispatch(setCurrentOpenedModal(isOpen ? null : modal)),[dispatch, modal, isOpen]);
}

export function useWalletModalToggle(): () => void {
    return useToggleModal(ApplicationModal.WALLET); 
}