import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import wretch from 'wretch';
import { debounce } from '../utils/debounce';
import { TongueContext } from '../App';

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
  const [from, setFrom] = useState(word);
  const [to, setTo] = useState('');
  const targetTongue = useContext(TongueContext);

  useEffect(() => {
    translate()
  }, [word, targetTongue])

  const handleInputChange = (from) => {
    setFrom(from)
    debouncedUpdate(from)
  }

  const debouncedUpdate = debounce((from) => {
    updateWord(from, index);
  }, 2000)

  const translate = () => {
    console.log('translating');
    const data = {
      "from": from,
      "target": targetTongue
    }

    wretch()
      .url("http://localhost:8080")
      .post(data)
      .json(response => {
        setTo(response.translations.join(', '))
      })
      .catch(err => {
        console.log('DO SOMETHING WITH ERROR HERE');
        console.log('error', err);
      });
  }

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
