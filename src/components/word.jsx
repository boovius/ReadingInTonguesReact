import React, { useState } from 'react';
import styled from 'styled-components';

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
  return (
    <WordBox>
      <div>
        <input value={from} onChange={e => setFrom(e.target.value) }/>
      </div>
      <div>
        {word.to}
      </div>
    </WordBox>
  )
}

export default Word;
