import { ApplicationModal } from "store/application/reducer"

export interface ApplicationState {
    readonly chainId: number | null
    readonly openModal: ApplicationModal | null
}