import * as React from 'react';
import { connect } from 'react-redux';

import Component from '../../components/component';

import './app.css';

function mapStateToProps(state: any) {
    return {
        app: state.app
    };
}

class App extends React.Component<{}, {}> {
    render() {
        return (
            <div className='app'>
                <Component />
            </div>
        );
    }
}

export default connect(mapStateToProps)(App);
