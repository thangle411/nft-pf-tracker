import { configureStore } from '@reduxjs/toolkit'
import application from './application/reducer'
import { setupListeners } from '@reduxjs/toolkit/query/react'

const store = configureStore({
    reducer: {
        application
    }
});

// setupListeners(store.dispatch)

export default store;