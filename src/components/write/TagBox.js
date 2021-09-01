import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import { Button } from '../../elements';

const TagItem = React.memo(({ tag, onRemove }) => (
  <Tag onClick={() => onRemove(tag)}>#{tag}</Tag>
));

const TagList = React.memo(({ tags, onRemove }) => (
  <TagListBlock>
    {tags.map((tag) => (
      <TagItem key={tag} tag={tag} onRemove={onRemove} />
    ))}
  </TagListBlock>
));

const TagBox = (props) => {
  const [input, setInput] = useState('');
  const [localTags, setLocalTags] = useState([]);

  const onInsert = useCallback(
    (tag) => {
      if (!tag) return;
      if (localTags.includes(tag)) return;

      setLocalTags([...localTags, tag]);
    },
    [localTags],
  );

  const onRemove = useCallback(
    (tag) => {
      setLocalTags(localTags.filter((t) => t !== tag));
    },
    [localTags],
  );

  const onChange = useCallback((e) => {
    setInput(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      // 추가 함수는 추가 버튼에 넣는 게 아니라 onSubmit 함수에 넣음
      onInsert(input.trim());
      setInput('');
    },
    [input, onInsert],
  );

  return (
    <TagBoxBlock>
      <h4>태그</h4>
      <TagForm onSubmit={onSubmit}>
        {/* input 3형제: placeholder, value, onChange */}
        <input placeholder="태그 입력" value={input} onChange={onChange} />
        <Button width="75px" height="42px" color="#fff">
          추가
        </Button>
      </TagForm>
      <TagList tags={localTags} onRemove={onRemove} />
    </TagBoxBlock>
  );
};

const TagBoxBlock = styled.div`
  width: 100%;
  padding-top: 2rem;
  margin-left: 32px;

  h4 {
    color: ${palette.gray[8]};
    margin-top: 0;
    margin-bottom: 0.5rem;
  }
`;

const TagForm = styled.form`
  border-radius: 4px;
  overflow: hidden;
  display: flex;
  width: 256px;
  border: 1px solid ${palette.gray[9]};
  input,
  button {
    font-size: 1rem;
  }

  input {
    padding: 0.5rem;
    flex: 1;
    min-width: 0;
  }

  /* button {
    cursor: pointer;
    padding: 0 1rem;
    background: ${palette.gray[8]};
    color: #fff;
    font-weight: bold;
    &:hover {
      background: ${palette.gray[6]};
    }
  } */
`;

const Tag = styled.div`
  margin-right: 0.5rem;
  color: ${palette.gray[6]};
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
`;

const TagListBlock = styled.div`
  display: flex;
  margin-top: 0.5rem;
`;

export default TagBox;
