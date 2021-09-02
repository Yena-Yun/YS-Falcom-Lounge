import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';

const PostViewer = (props) => {
  return (
    <PostViewerBlock>
      <PostHead>
        <h1>제목</h1>
        <SubInfo>
          <span>
            <b>tester</b>
          </span>
          <span>{new Date().toLocaleString()}</span>
        </SubInfo>
        <Tags>
          <div className="tag">#태그1</div>
          <div className="tag">#태그2</div>
          <div className="tag">#태그3</div>
        </Tags>
      </PostHead>
      {/* dangerouslySetInnerHTML: HTML 태그 내용을 그냥 렌더링하면 텍스트 형태로 나타나버림 => HTML을 적용해서 나타낼 때 사용 */}
      <PostContent
        dangerouslySetInnerHTML={{ __html: '<p>HTML <b>내용</b>입니다.</p>' }}
      />
    </PostViewerBlock>
  );
};

const PostViewerBlock = styled.div`
  margin-top: 4rem;
`;

const PostHead = styled.div`
  border-bottom: 1px solid ${palette.gray[2]};
  padding-bottom: 3rem;
  margin-bottom: 3rem;

  h1 {
    font-size: 3rem;
    line-height: 1.5;
    margin: 0;
  }
`;

const SubInfo = styled.div`
  margin-top: 1rem;
  color: ${palette.gray[6]};

  /* span 사이에 가운데점  */
  span + span:before {
    color: ${palette.gray[5]};
    padding: 0 0.25rem;
    content: '\\B7'; // 가운데점 문자
  }
`;

const Tags = styled.div`
  margin-top: 0.5rem;
  .tag {
    display: inline-block;
    color: ${palette.indigo[7]};
    text-decoration: none;
    margin-right: 0.5rem;

    &:hover {
      color: ${palette.indigo[6]};
    }
  }
`;

const PostContent = styled.div`
  font-size: 1.3125rem;
  color: ${palette.gray[8]};
`;

export default PostViewer;
