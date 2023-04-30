import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { LoginWrapper } from './features/counter/LoginWrapper';
import { Login } from './features/counter/Login';


function App() {

  return (
    <div className="App">
      <header className="App-header">
        <LoginWrapper />
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <Login username={''} password={''} onLogin={function (): void {
          throw new Error('Function not implemented.');
        } } />
      </header>
    </div>
  );
}

export default App;
function dispatch(arg0: { payload: undefined; type: "login/logout"; }) {
  throw new Error('Function not implemented.');
}

