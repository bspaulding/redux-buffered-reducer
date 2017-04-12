'use strict';

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

function BufferedReducer(reducer) {
	var flushActionType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

	var _initialState = reducer(undefined, {});
	var initialState = {
		bufferedState: _initialState,
		state: _initialState
	};

	return function (state, action) {
		if (!state) {
			return initialState;
		}

		switch (action.type) {
			case flushActionType:
				return _extends({}, state, {
					state: state.bufferedState
				});
			default:
				return _extends({}, state, {
					bufferedState: reducer(state.bufferedState, action)
				});
		}
	};
}

module.exports = BufferedReducer;
