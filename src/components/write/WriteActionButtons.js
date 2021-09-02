import React from 'react';
import styled from 'styled-components';
import { Button } from '../../elements';

const WriteActionButtons = ({ onCancel, onPublish }) => {
  return (
    <WriteActionButtonsBlock>
      <Button
        indigo
        mr="1.2rem"
        padding="10px 21px"
        paddingHover="11px 22px"
        onClick={onPublish}
      >
        게시글 등록
      </Button>
      <Button padding="10px 21px" paddingHover="11px 22px" onClick={onCancel}>
        작성 취소
      </Button>
    </WriteActionButtonsBlock>
  );
};

const WriteActionButtonsBlock = styled.div`
  width: 100%;
  height: 60px;
  padding: 1rem 5rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 0.5rem;
`;

export default WriteActionButtons;
