import React, { useState } from 'react';
import styled from 'styled-components';
import wretch from 'wretch';
import { debounce } from '../utils/debounce';

const WordBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  &> div {
    padding: 20px;
    width: 45%;
  }
  &> div:first-child {
    border-right: 1px solid black;

    input {
      font-size: 1em;
      border: none;
    }
  }
`

const Word = ({word, updateWord, index}) => {
  const [from, setFrom] = useState(word.from)
  //const [to, setTo] = useState(word.to)

  const handleInputChange = (from) => {
    setFrom(from)
    translate(from)
  }

  const translate = debounce((from) => {
    const data = {
      "from": from,
      "target": "en"
    }

    wretch()
      .url("http://localhost:8080")
      .post(data)
      .json(response => {
        updateWord(from, response.translations, index)
      })
      .catch(err => {
        console.log('DO SOMETHING WITH ERROR HERE');
        console.log('error', err);
      });
  }, 1000)

  return (
    <WordBox>
      <div>
        <input value={from} onChange={e => handleInputChange(e.target.value) }/>
      </div>
      <div>
        {word.to}
      </div>
    </WordBox>
  )
}

export default Word;
