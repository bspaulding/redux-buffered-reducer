import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { flush, increment, decrement } from './reducer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Buffered Reducer</h2>
        </div>
				<button onClick={this.props.decrement}>-</button>
				<span className="App-count">{this.props.bufferedState}</span>
				<button onClick={this.props.increment}>+</button>
				<button onClick={this.props.flush}>Flush Buffer</button>
				<p>The count is {this.props.state}</p>
      </div>
    );
  }
}

export default connect(
	x => x,
	dispatch => bindActionCreators({
		flush,
		increment,
		decrement
	}, dispatch)
)(App);
