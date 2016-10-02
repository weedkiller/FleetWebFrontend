import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import routes from '../routes';
import { Router } from 'react-router';

const Root = ({store, history}) => (
	<Provider store={store}>
		<Router history={history} routes={routes} />
	</Provider>
)

Root.propTypes = {
    store: PropTypes.isRequired,
    history: PropTypes.isRequired
}	

export default Root;