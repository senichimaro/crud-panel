import { configureStore } from '@reduxjs/toolkit'
import GlobalReducers from './reducers'

export default configureStore({
    reducer: {
        config: GlobalReducers
    }
})