import * as React from 'react';

import Component from 'components/component';

import './app.css'

class App extends React.Component<{}, {}> {
  public render() {
    return (
      <div className='app'>
        <p>Display</p>
        <Component />
      </div>
    );
  }
}

export default App;
