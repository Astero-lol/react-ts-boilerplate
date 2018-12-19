import * as React from 'react';
import cn, { CnFn } from 'cn-decorator';
import { connect } from 'react-redux';
import { autobind } from 'core-decorators';

import Component from '../../components/component';

import './app.css';

function mapStateToProps(state: any) {
    return {
        app: state.app
    };
}

@cn('app')
class App extends React.Component<{}, {}> {
    render(cn?: CnFn) {
        return (
            <div className={ cn() }>
                <Component />
            </div>
        );
    }
}

export default connect(mapStateToProps)(App);
