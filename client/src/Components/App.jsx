import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <button type="button" className="btn btn-primary">
          {' '}
          Samuel Shih{' '}
        </button>
      </div>
    );
  }
}

export default App;
