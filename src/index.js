import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Main';
import { HashRouter as Router } from 'react-router-dom';

class Root extends React.Component {
  render() {
    return (
      <Main />
    )
  }
}

ReactDOM.render(<Router><Root /></Router>, document.getElementById('root'));
