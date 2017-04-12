import buffer from './BufferedReducer';

export const increment = () => ({ type: 'INCREMENT' });
export const decrement = () => ({ type: 'DECREMENT' });

function counter(state = 0, action) {
	switch (action.type) {
		case 'INCREMENT':
			return state + 1;
		case 'DECREMENT':
			return state - 1;
		default:
			return state;
	}
}

export const flush = () => ({ type: 'FLUSH' });
export default buffer(counter, 'FLUSH');
