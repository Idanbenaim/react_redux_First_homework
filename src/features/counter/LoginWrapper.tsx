import React, { useState } from 'react';
import { Login } from './Login';

export function LoginWrapper() {
    // Add state hooks for username and password
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        console.log('Username:', username);
        console.log('Password:', password);
    };

    // Add event handlers for username and password fields
    const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    return (
        <div style={{ background: 'Lavender' }}>
            <div>
                <label htmlFor="username">Username: </label>
                <input type="text" id="username" name="username" value={username}
                    onChange={handleUsernameChange} />
            </div>
            <div>
                <label htmlFor="password">Password: </label>
                <input type="password" id="password" name="password" value={password}
                    onChange={handlePasswordChange} />
            </div>
            <Login username={username} password={password} onLogin={handleLogin} />
        </div>
    );
}
