export const TEST_INCREMENT = 'test_increment';
export const TEST_DECREMENT = 'test_decrement';

export function incrementAction() {
	return { type: TEST_INCREMENT };
}

export function decrementAction() {
	return { type: TEST_DECREMENT };
}

const initialState = {
	count: 0
};

export function testReducer(state = initialState, action) {
	switch (action.type) {
		case TEST_INCREMENT:
			return Object.assign({}, state, {
				count: count + 1
			});
		case TEST_DECREMENT:
			return Object.assign({}, state, {
				count: count - 1
			});
		default:
			return state;
	}
}
