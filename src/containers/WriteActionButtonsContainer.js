import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import WriteActionButtons from '../components/write/WriteActionButtons';
import { withRouter } from 'react-router-dom';

const WriteActionButtonsContainer = ({ history }) => {
  const dispatch = useDispatch();
  const { title, body, tags } = useSelector(({ write }) => ({
    title: write.title,
    body: write.body,
    tags: write.tags,
  }));

  // 게시글 등록
  const onPublish = () => {};

  // 작성 취소
  const onCancel = () => {
    history.goBack();
  };

  useEffect(() => {}, []);

  return (
    <WriteActionButtons
      onPublish={onPublish}
      onCancel={onCancel}
    ></WriteActionButtons>
  );
};

export default withRouter(WriteActionButtonsContainer);
