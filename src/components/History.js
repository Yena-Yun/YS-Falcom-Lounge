import React from 'react';
import styled from 'styled-components';



const History = (props) => {
	return (
		<HistoryBlock>
			<div className="title">아돌의 발자취</div>
        <table border="1">
          <thead>
            <td>년도</td>
            <td>타이틀</td>
          </thead>
          <tbody>
            <tr className="ys-9">
              <td>2020</td>
              <td>이스 9 몬스트룸 녹스</td>
            </tr>
          </tbody>
        </table>
		</HistoryBlock>
	);
};

const HistoryBlock = styled.div`

`;

export default History;