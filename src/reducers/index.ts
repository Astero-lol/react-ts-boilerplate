import { combineReducers } from 'redux';

export interface IAppState {
    app: {};
}

export default combineReducers<IAppState>({
    app: (app = {}) => app
});
