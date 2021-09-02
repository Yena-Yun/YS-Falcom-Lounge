import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Editor from '../../components/write/Editor';
import { changeField, initialize } from '../../redux/modules/write';

const EditorContainer = () => {
  const dispatch = useDispatch();

  // title과 body 값을 리덕스에서 write 리듀서를 통해 가져옴 (write의 state)
  const { title, body } = useSelector(({ write }) => ({
    title: write.title,
    body: write.body,
  }));

  // useCallback으로 []안의 변수나 함수의 내용이 바뀔 때만 실행
  const onChangeField = useCallback(
    (payload) => dispatch(changeField(payload)),
    [dispatch],
  );

  // useEffect의 return문에 들어간 함수는
  // 언마운트될 때(페이지를 나갈 때) 실행됨
  useEffect(() => {
    // 작성페이지를 나갈 때 작성중이던 내용 초기화 (다시 들어왔을 때 이전내용 안 남아있게)
    return () => {
      dispatch(initialize());
    };
  }, [dispatch]);

  return (
    <Editor onChangeField={onChangeField} title={title} body={body}></Editor>
  );
};

export default EditorContainer;
