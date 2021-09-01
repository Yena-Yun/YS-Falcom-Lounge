import React from 'react';
import styled from 'styled-components';
import { Button, Text } from '../../elements';

const WriteActionButtons = ({ onCancel, onPublish }) => {
  return (
    <WriteActionButtonsBlock>
      <Button indigo width="7.5rem" height="2.5rem" radius="0.4rem" mr="0.5rem">
        게시글 등록
      </Button>
      <Button width="7.5rem" height="2.5rem" radius="0.4rem">
        작성 취소
      </Button>
    </WriteActionButtonsBlock>
  );
};

const WriteActionButtonsBlock = styled.div``;

export default WriteActionButtons;
