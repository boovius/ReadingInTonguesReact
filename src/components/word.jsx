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

  const translate = (from) => {
    setFrom(from)

    debounce(() => {
      console.log('debouncing?')

      const data = {
        "source": "es",
        "q": from,
        "target": "en"
      }

      wretch()
        .url("https://translation.googleapis.com/language/translate/v2")
        .auth("Bearer ya29.c.Ko8BzQevjMNBB7SqOpKe82I0LMBbRVNjiodbdW4h1BMNWoMiMy-p_Pur9w8QZ48xTAcEomFnhWlD1HhUKWLTHFtSL3NF9h3Vqs1wAbf97dVS9EVUWyW50UNe0vaIKk75hp5LhO8hKZYrQ50KgVNf_163kC-TT7W9Gexb5zGGRkop5ui5EsT7g8x3WWsZlGGWc0o")
        .post(data)
        .json(response => {
          console.log('response', response);
          setTo(response.data.translations[0].translatedText)
        })
        .catch(err => {
          console.log('error', err);
        });
    }, 200)
  }

  return (
    <WordBox>
      <div>
        <input value={from} onChange={e => translate(e.target.value) }/>
      </div>
      <div>
        {to}
      </div>
    </WordBox>
  )
}

export default Word;
