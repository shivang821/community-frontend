import { createSlice } from '@reduxjs/toolkit'

const userReducer = createSlice({
    name: "user",
    initialState: {
        loading: false,
        user: null,
        isAuthenticate: false,
        error: null,
    },
    reducers: {
        userLoading: (state) => {
            state.loading = true;
        },
        userSuccess: (state, action) => {
            state.loading = false;
            state.user = action.payload;
            state.isAuthenticate = true;
        },
        userFail: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        },
        clearError: (state) => {
            state.error = null;
        }
    }
})
export const { clearError, userLoading, userSuccess, userFail } = userReducer.actions
export default userReducer.reducer