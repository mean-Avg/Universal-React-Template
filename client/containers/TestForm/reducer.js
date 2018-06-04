export const TEST_INPUT = 'test_input';

export function testInput(testInputs) {
  return { type: TEST_INPUT, testInputs };
}

const initialState = {};

export const inputReducer = (state = initialState, action) => {
  const { type, testInputs } = action;
  switch (type) {
    case TEST_INPUT:
    return testInputs;
    default:
      return state;
  }
};
