export const TEST_INPUT = 'test_input';

export function inputToDB(value) {
  return { type: TEST_INPUT, value };
}

const initialState = {
  testInputs: [],
};

export const inputReducer = (state = initialState, action) => {
  const { type, value } = action;
  switch (type) {
    case TEST_INPUT:
      return {
        ...state,
        [testInputs]: value,
      };
    default:
      return state;
  }
};
