import { createSlice, } from '@reduxjs/toolkit';
// import { RootState, AppThunk } from '../../app/store';


interface LoginState {
    isLoggedIn: boolean;
}

const initialState: LoginState = {
    isLoggedIn: false,
};

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        login: (state) => {
            state.isLoggedIn = true;
        },
        logout: (state) => {
            state.isLoggedIn = false;
        },
    }
})

export const { login, logout } = loginSlice.actions;

export default loginSlice.reducer;

export { };