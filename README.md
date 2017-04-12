# redux-buffered-reducer

A simple reducer enhancer to buffer changes.

## Usage

Add as an npm dependency

```
npm install redux-buffered-reducer
```

Enhance your reducer:

```javascript
import buffer from 'redux-buffered-reducer';

function myReducer(state, action) {
	// ...
}

const bufferedMyReducer = buffer(myReducer, 'FLUSH');
```

The second argument to `buffer` is `flushActionType`, which is the action type BufferedReducer will flush the buffer upon.

The state returned by the buffered reducer has a `bufferedState` and `state` properties. Suppose we buffered a simple counter reducer. After a few increment actions, the buffered reducer state might look like:

```javascript
{
	bufferedState: { count: 4 },
	state: { count: 0 }
}
```
