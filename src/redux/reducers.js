import { createSlice } from '@reduxjs/toolkit'

const GlobalSilces = createSlice({
    name: 'config',
    initialState: {
        user: {},
        currentUserID: ''
    },
    reducers: {
        setUser: (state, action) => { state.user = action.payload },
        setCurrentUserID: (state, action) => {state.currentUserID = action.payload}
    }
})

export const {
    setUser,
    setCurrentUserID
} = GlobalSilces.actions

export const getUser = state => state.config.user
export const getCurrentUserID = state => state.config.currentUserID

export default GlobalSilces.reducer