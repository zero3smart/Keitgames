import React from 'react';
import { render } from 'react-dom';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './rootReducer';
import PrimaryLayout from './components/PrimaryLayout';

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
);

render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={PrimaryLayout} />
            </Switch>
        </BrowserRouter>
    </Provider>,
    document.getElementById('app')
);