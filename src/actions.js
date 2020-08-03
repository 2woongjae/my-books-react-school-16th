// 다 여기다 쓴다.

// 액션의 타입을 정의하여 변수로 빼는 단계
export const START_LOADING = 'START_LOADING';
export const END_LOADING = 'END_LOADING';

// 액션 객체를 만들어 내는 함수 (액션 생성자)를 만드는 단계
export function startLoading() {
  return {
    type: START_LOADING,
  };
}

export function endLoading() {
  return {
    type: END_LOADING,
  };
}
