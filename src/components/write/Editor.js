import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import Quill from "quill";
import "quill/dist/quill.bubble.css";

const Editor = (props) => {
  const quillElement = useRef(null);
  const quillInstance = useRef(null);

  useEffect(() => {
    quillInstance.current = new Quill(quillElement.current, {
      theme: "bubble",
      placeholder: "텍스트를 드래그하면 텍스트 수정메뉴가 나타납니다. (맨 오른쪽 버튼으로 이미지 추가 가능)",
      modules: {
        toolbar: [
          [{ header: "1" }, { header: "2" }],
          ["bold", "italic", "underline", "strike"],
          [{ list: "ordered" }, { list: "bullet" }],
          ["blockquote", "code-block", "link", "image"],
        ],
      },
    });
  }, []);

  return (
    <EditorBlock>
      <TitleInput placeholder="제목" />
      <QuillWrapper>
        <div ref={quillElement} />
      </QuillWrapper>
    </EditorBlock>
  );
};

const EditorBlock = styled.div`
  padding: 5rem 2rem;
`;

const TitleInput = styled.input`
  width: 100%;
  font-size: 2rem;
  padding: 1rem;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid #eee;
`;

const QuillWrapper = styled.div`
  background: #fff;
  padding: 0;
  min-height: 320px;
  font-size: 1rem;
  line-height: 1.5;
  left: 0;
`;

export default Editor;
