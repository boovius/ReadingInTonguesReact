import React, { useState } from 'react';
import WordList from './components/word-list';
import './App.css';

const wordsData = [
  {from: 'hablar', to: 'to speak'},
  {from: 'viejo', to: 'old'},
  {from: 'ganado', to: 'cattle'},
  {from: '', to: ''},
];

function App() {
  const [words, setWords] = useState(wordsData);

  const updateWord = (from, to, index) => {
    const updatedWords = words.map((word, i) => index === i ? {from, to} : word)
    if (index+1 === updatedWords.length) {
      updatedWords.push({from: '', to: ''})
    }
    setWords(updatedWords)
  }

  return (
    <div className="App">
      <header className="App-header">
        Reading In Tongues
      </header>
      <WordList words={words} updateWord={updateWord} />
    </div>
  );
}

export default App;
