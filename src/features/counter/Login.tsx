import React from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { login, logout } from './loginSlice';

interface LoginProps {
    username: string;
    password: string;
    onLogin: () => void;
}

export function Login({ onLogin }: LoginProps) {
    const dispatch = useAppDispatch();
    const isLoggedIn = useAppSelector((state) => state.login.isLoggedIn);

    const handleLoginClick = () => {
        dispatch(login());
        onLogin();
    };

    const handleLogoutClick = () => {
        dispatch(logout());
    };

    return (
        <div style={{ background: 'Wheat', padding: '10px' }}>
            {isLoggedIn ? (
                <button type="button" onClick={handleLogoutClick}>
                    Log out
                </button>
            ) : (
                <button type="button" onClick={handleLoginClick}>
                    Log in
                </button>
            )}
        </div>
    );
}
