import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import reducer, { IAppState } from '../reducers';

const initState: IAppState = {
    app: {}
};

export default createStore(
    reducer,
    initState,
    applyMiddleware(promise)
);
