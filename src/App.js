import React from 'react';
import logo from './logo.svg';
import './App.css';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducers from './reducers'

const store = createStore(reducers); 

function App() {
  return (
    <Provider store = {store}>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
            Tmrz
        </p>
      </div>
    </Provider>
  );
}

export default App;
