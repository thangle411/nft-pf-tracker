import { configureStore } from '@reduxjs/toolkit'
import application, { ApplicationState } from './application/reducer'
import web3 from './web3/reducer'
// import { setupListeners } from '@reduxjs/toolkit/query/react'

export interface reducerType {
    application: ApplicationState,
    web3: any
}

const store = configureStore({
    reducer: {
        application,
        web3
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
});

// setupListeners(store.dispatch)

export default store;