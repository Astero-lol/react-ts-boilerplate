import * as React from 'react';
import { connect } from 'react-redux';
import { block } from 'bem-cn';

import Component from '../../components/component';

import './app.css';

function mapStateToProps(state: any) {
    return {
        app: state.app
    };
}

const cn = block('app');

class App extends React.Component<{}, {}> {
    render() {
        return (
            <div className={ cn() }>
                <Component />
            </div>
        );
    }
}

export default connect(mapStateToProps)(App);
