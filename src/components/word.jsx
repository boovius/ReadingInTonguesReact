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

const Word = ({word}) => {
  const [from, setFrom] = useState(word.from)
  const [to, setTo] = useState(word.to)

  const handleInputChange = (from) => {
    console.log('handling input change on', from)
    setFrom(from)
    translate(from)
  }

  const translate = debounce((from) => {
    console.log('debouncing?')
    console.log('translating: ', from)

    const data = {
      "from": from,
      "target": "en"
    }

    wretch()
      .url("http://localhost:8080")
      .post(data)
      .json(response => {
        console.log('response', response);
        setTo(response.translations.join(', '));
      })
      .catch(err => {
        console.log('error', err);
      });
  }, 1000)

  return (
    <WordBox>
      <div>
        <input value={from} onChange={e => handleInputChange(e.target.value) }/>
      </div>
      <div>
        {to}
      </div>
    </WordBox>
  )
}

export default Word;
