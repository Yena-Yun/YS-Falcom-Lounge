import { createAction, handleActions } from 'redux-actions';

const INITIALIZE = 'write/INITIALIZE'; // 게시판 나갔다 들어오면 작성내용 초기화
const CHANGE_FIELD = 'write/CHANGE_FIELD'; // 특정 key값 바꾸기

export const initialize = createAction(INITIALIZE);
export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({
  key,
  value,
}));

const initialState = {
  title: '',
  body: '',
  tags: [], // tag는 게시글 하나 당 여러 개가 담길 수 있으므로 '배열'로 초기화
};

const write = handleActions(
  {
    [INITIALIZE]: (state) => initialState,
    [CHANGE_FIELD]: (state, { payload: { key, value } }) => ({
      ...state,
      [key]: value, // 특정 key값 업데이트
    }),
  },
  initialState,
);

export default write;
