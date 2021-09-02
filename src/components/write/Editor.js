import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import Quill from 'quill';
import 'quill/dist/quill.bubble.css';

const Editor = ({ title, body, onChangeField }) => {
  const quillElement = useRef(null);
  const quillInstance = useRef(null);

  useEffect(() => {
    quillInstance.current = new Quill(quillElement.current, {
      theme: 'bubble',
      placeholder:
        '텍스트를 드래그하면 텍스트 수정메뉴가 나타납니다. (맨 오른쪽 버튼으로 이미지 추가 가능)',
      modules: {
        toolbar: [
          [{ size: ['small', false, 'large', 'huge'] }],
          ['bold', 'italic', 'underline', 'strike'],
          [{ color: [] }, { background: [] }],
          [{ align: [] }],
          ['blockquote', 'code-block', 'link', 'image'],
        ],
      },
    });

    // quill에 text-change 이벤트핸들러 등록
    const quill = quillInstance.current;

    quill.on('text-change', (delta, oldDelta, source) => {
      if (source === 'user') {
        onChangeField({ key: 'body', value: quill.root.innerHTML });
      }
    });
  }, [onChangeField]);

  const onChangeTitle = (e) => {
    onChangeField({ key: 'title', value: e.target.value });
  };

  return (
    <EditorBlock>
      <TitleInput placeholder="제목" onChange={onChangeTitle} value={title} />
      <QuillWrapper>
        <div ref={quillElement} />
      </QuillWrapper>
    </EditorBlock>
  );
};

const EditorBlock = styled.div`
  padding: 4rem 3rem 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TitleInput = styled.input`
  width: 100%;
  font-size: 1.7rem;
  padding: 1.2rem 1.5rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid #eee;
`;

const QuillWrapper = styled.div`
  width: 100%;
  min-height: 320px;
  height: 320px;
  overflow-y: auto;
  background: #fff;
  line-height: 1.5;
`;

export default Editor;
