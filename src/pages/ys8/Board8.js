import React from 'react';
import styled from 'styled-components';
import Editor from '../../components/write/Editor';
import TagBox from '../../components/write/TagBox';
import WriteActionButtons from '../../components/write/WriteActionButtons';

const Board8 = () => {
  return (
    <Wrapper>
      <Editor />
      <TagBox />
      <WriteActionButtons />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100vh;
`;

export default Board8;
