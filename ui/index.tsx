import * as React from 'react'
import { render } from 'react-dom';
import {Provider} from 'react-redux';
import {Route} from 'react-router-dom';
import {ConnectedRouter} from 'react-router-redux';
import store, {history} from '../data/store';
import App from './containers/App';

render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Route path='/' component={App}/>
        </ConnectedRouter>
    </Provider>,
    document.querySelector('#root')
);
