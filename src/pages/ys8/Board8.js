import React from 'react';
import styled from 'styled-components';
import TagBoxContainer from '../../containers/write/TagBoxContainer';
import EditorContainer from '../../containers/write/EditorContainer';
import WriteActionButtonsContainer from '../../containers/WriteActionButtonsContainer';

const Board8 = () => {
  return (
    <Wrapper>
      <EditorContainer />
      <TagBoxContainer />
      <WriteActionButtonsContainer />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100vh;
  padding: 0 9rem;
`;

export default Board8;
