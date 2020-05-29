import React from 'react';
import WordList from './components/word-list';
import './App.css';

const words = [
  {from: 'hablar', to: 'to speak'},
  {from: 'viejo', to: 'old'},
  {from: 'ganado', to: 'cattle'},
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Reading In Tongues
      </header>
      <WordList words={words} />
    </div>
  );
}

export default App;
