import React from 'react'
import App from 'grommet/components/App'
import cssModules from 'react-css-modules';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import styles from './app.module.scss';

import AppHeader from './shared/components/AppHeader'
import AppFooter from './shared/components/AppFooter'

import NewProject from './cms/components/NewProject'
import ManageProjects from './cms/components/ManageProjects'

import About from './client/components/About'
import Portfolio from './client/components/Portfolio'

const AppComponent = () => (
	<BrowserRouter>
		<App centered={false}>
			<AppHeader />
			<div className={styles.container}>
				<Switch>
					<Route exact path="/" component={About} />
					<Route path="/projects" component={Portfolio} />
					<Route path="/admin/newproject" component={NewProject} />
					<Route path="/admin/manageprojects" component={ManageProjects} />
				</Switch>
			</div>
			<AppFooter />
		</App>
	</BrowserRouter>
)

export default cssModules(AppComponent, styles)
