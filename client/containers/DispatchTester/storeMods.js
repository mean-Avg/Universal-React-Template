export const TEST_INCREMENT = 'test_increment';
export const TEST_DECREMENT = 'test_decrement';

export function incrementAction() {
  return { type: TEST_INCREMENT };
}

export function decrementAction() {
  return { type: TEST_DECREMENT };
}

const initialState = {
  count: 0,
};

export const testReducer = (state = initialState, action) => {
  switch (action.type) {
    case TEST_INCREMENT:
      return 1;
    case TEST_DECREMENT:
      return -1;
    default:
      return state.count;
  }
};
