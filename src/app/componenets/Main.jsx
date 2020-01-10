import { store } from '../store';
import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedDashboard } from './Dashboard';
import { Router, Route } from 'react-router-dom';
import { history } from '../store/history';
import { ConnectedNavigation } from './Navigation';
import { ConnectTaskDetail } from './TaskDetail';
import { Redirect } from 'react-router';
import { ConnectedLogin } from './Login';

const RouteGuard = Component => ({ match }) => {
	console.info('Route guard', match);
	if (!store.getState().session.authenticated) {
		return <Redirect to='/' />;
	}
	{
		return <Component match={match} />;
	}
};

export const Main = () => (
	<Router history={history}>
		<Provider store={store}>
			<div>
				{/* <ConnectedNavigation /> */}
				{/* <ConnectedDashboard /> */}
				<Route exact path='/' component={ConnectedLogin} />
				<Route
					exact
					path='/dashboard'
					render={RouteGuard(ConnectedDashboard)}
				/>
				<Route exact path='/task/:id' render={RouteGuard(ConnectTaskDetail)} />
			</div>
		</Provider>
	</Router>
);
