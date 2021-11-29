import React from 'react';
//Components
import Header from './components/Header';
import Home from './components/Home';
// Styles
import { GlobalStyle } from './GlobalStyle';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Home />
      Start here.
      <GlobalStyle />
    </div>
  );
}

export default App;
