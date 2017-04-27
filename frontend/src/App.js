import React from 'react'
import { Provider } from 'react-redux'
import App from 'grommet/components/App'
import cssModules from 'react-css-modules'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { store } from './store'

import styles from './app.module.scss';

import { AppHeader } from './shared/containers/AppHeader'
import AppFooter from './shared/components/AppFooter'

import setAdminColor from './shared/HOC/setAdminColor'

import NewProject from './cms/components/NewProject'
import ManageProjects from './cms/components/ManageProjects'

import About from './client/components/About'
import Portfolio from './client/components/Portfolio'

const AppComponent = () => (
	<Provider store={store}>
		<BrowserRouter>
			<App centered={false}>
				<AppHeader />
				<div className={styles.container}>
					<Switch>
						<Route exact path="/" component={setAdminColor(About, false)} />
						<Route path="/projects" component={setAdminColor(Portfolio, false)} />
						<Route path="/admin/newproject" component={setAdminColor(NewProject, true)} />
						<Route path="/admin/manageprojects" component={setAdminColor(ManageProjects, true)} />
					</Switch>
				</div>
				<AppFooter />
			</App>
		</BrowserRouter>
	</Provider>
)

export default cssModules(AppComponent, styles)
