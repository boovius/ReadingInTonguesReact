import React, { useState, createContext } from 'react';
import WordList from './components/word-list';
import SelectTongue from './components/select-tongue';
import tongueCodes from './tongue-codes.json'
import './App.css';

const wordsData = [
  'hablar',
  'viejo',
  'ganado',
  '',
];

// set initial tongue to translate to english
const initialTarget = 'en';

export const TongueContext = createContext()

function App() {
  const [words, setWords] = useState(wordsData);

  const [targetTongue, setTargetTongue] = useState(initialTarget);

  const updateWord = (updatedWord, index) => {
    const updatedWords = words.map((word, i) => index === i ? updatedWord : word)
    if (index+1 === updatedWords.length) {
      updatedWords.push('')
    }
    console.log('updating words', updatedWords);
    setWords(updatedWords)
  }

  return (
    <div className="App">
      <header className="App-header">
        Reading In Tongues
      </header>
      <TongueContext.Provider value={targetTongue}>
        <SelectTongue setTarget={setTargetTongue} tongueCodes={tongueCodes} initialTarget={initialTarget} />
        <WordList words={words} updateWord={updateWord} />
      </TongueContext.Provider>
    </div>
  );
}

export default App;
