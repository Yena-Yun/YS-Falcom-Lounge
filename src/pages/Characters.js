import React from 'react';
import styled from 'styled-components';

const Characters = (props) => {
  return (
    <Wrapper>
      <div>Let's vote who you like most!</div>
      <div>Click the Like Button below your favorite character!</div>

      <table>
        <tbody>
          <tr>
            <td>Adol Christin</td>
            <td>Dana</td>
            <td>Laksha</td>
          </tr>
          <tr>
            <td>Hummel</td>
            <td>Sahad</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
`;

export default Characters;
