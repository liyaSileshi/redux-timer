import React from 'react';
import './App.css';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducers from './reducers'
import {update} from './actions'
import NewTimer from './components/new-timer'
import ListTimer from './components/list-timers'

const store = createStore(reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()); 

let lastUpdateTime = Date.now()
setInterval (() => {
  const now = Date.now()
  const deltaTime = now - lastUpdateTime
  lastUpdateTime = now
  store.dispatch(update(deltaTime))
}, 50)

function App() {
  return (
    <Provider store = {store}>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <NewTimer />
        <ListTimer />
      </div>
    </Provider>
  );
}

export default App;
