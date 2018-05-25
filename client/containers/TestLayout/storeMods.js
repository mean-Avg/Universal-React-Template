import data from './data.json';

export const SUBMIT = 'submit';

export function submitTest(questions) {
  return { type: SUBMIT, questions };
}

const initialState = {
  testId: 'test1',
  test: 'the first test',
  questions: [],
};

export const dataBoy = (state = initialState, action) => {
  const {type, questions}=action
  switch (type) {
    case SUBMIT:
      return {
        ...state,
        [questions]: questions
      };
    default:
      return state;
  }
};
