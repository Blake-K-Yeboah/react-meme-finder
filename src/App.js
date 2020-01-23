import React from 'react';
import './App.scss';
import Header from './components/layout/Header';
import { Provider } from 'mobx-react';
import memeStore from './stores/memeStore';
import Memes from './components/Memes/Memes';

function App() {
  return (
    <div className="App">
      <Provider memeStore={memeStore} >
        <Header />
        <div className='container'>
          <Memes />
        </div>
      </Provider>
    </div>
  );
}

export default App;
