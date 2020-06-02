import React from 'react';
import Word from './word';
import styled from 'styled-components';

const WordWrapper = styled.div`
  border-top: 1px solid black;
`;

const WordsSection = styled.section`
  border-bottom: 1px solid black;
  border-left: 1px solid black;
  border-right: 1px solid black;
  width: 75%;
  margin: 0 auto;
  margin-top: 20px;
`

const WordList = ({words, updateWord}) => (
  <WordsSection>
    {
      words.map((word,i) => (
        <WordWrapper key={i}>
          <Word word={word} updateWord={updateWord} index={i} />
        </WordWrapper>
      ))
    }
  </WordsSection>
);

export default WordList;
