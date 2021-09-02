import React from 'react';
import styled from 'styled-components';
import TagBox from '../../components/write/TagBox';
import WriteActionButtons from '../../components/write/WriteActionButtons';
import EditorContainer from '../../containers/write/EditorContainer';

const Board8 = () => {
  return (
    <Wrapper>
      <EditorContainer />
      <TagBox />
      <WriteActionButtons />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100vh;
  padding: 0 9rem;
`;

export default Board8;
