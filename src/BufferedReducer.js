export default function BufferedReducer(reducer, flushActionType = '') {
	const _initialState = reducer(undefined, {});
	const initialState = {
		bufferedState: _initialState,
		state: _initialState
	};

	return function(state, action) {
		if (!state) {
			return initialState;
		}

		switch (action.type) {
		case flushActionType:
			return {
				...state,
				state: state.bufferedState,
			};
		default:
			return {
				...state,
				bufferedState: reducer(state.bufferedState, action)
			};
		}
	};
};
