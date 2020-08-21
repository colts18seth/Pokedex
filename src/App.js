import React from 'react';
import Pokedex from './Pokedex';
import './App.css';

const App = () => {
    return (
        <div className="App">
            <h1 className="header">Pokedex</h1>
            <Pokedex />
        </div>
    );
}

export default App;