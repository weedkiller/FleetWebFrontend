import 'babel-polyfill'
import React from 'react';
import { render } from 'react-dom';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import Root from './containers/Root';
import configureStore from './store/configureStore';
import { loadState, saveState } from './localStorage';

const persistedState = loadState();

const store = configureStore(persistedState);

store.subscribe(() => {
	const session = store.getState().session;

	saveState( {
		user: store.getState().user, 
		session
	});	
})


const history = syncHistoryWithStore(browserHistory, store);

render(
	<Root store={store} history={history} />,
	document.getElementById('root')
);
