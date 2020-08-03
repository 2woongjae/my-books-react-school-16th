import { START_LOADING, END_LOADING } from './actions';

// 보내온 액션과 현재 상태를 이용해서
// 새로운 상태를 만드는 함수

// 상태는 항상 고정적으로 만들어둔다.
const initialState = {
  loading: false,
};

// 앱이 실행될 때
// 액션이 날라올 때
export default function reducer(state = initialState, action) {
  console.log(state, action);

  switch (action.type) {
    case START_LOADING:
      return {
        loading: true,
      };
    case END_LOADING:
      return {
        loading: false,
      };
    default:
      return state;
  }
}
