import { configureStore } from '@reduxjs/toolkit'
import application, { ApplicationState } from './application/reducer'
import { setupListeners } from '@reduxjs/toolkit/query/react'

export interface reducerType {
    application: ApplicationState
}

const store = configureStore({
    reducer: {
        application
    }
});

// setupListeners(store.dispatch)

export default store;