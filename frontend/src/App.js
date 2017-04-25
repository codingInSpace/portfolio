import React from 'react'
import PropTypes from 'prop-types'
import App from 'grommet/components/App'
import Box from 'grommet/components/Box'

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import styles from './app.module.scss';
import cssModules from 'react-css-modules';

import AppHeader from './shared/components/AppHeader'
import AppFooter from './shared/components/AppFooter'

import About from './client/components/About'
import Portfolio from './client/components/Portfolio'
import Contact from './client/components/Contact'

const AppComponent = (props) => (
	<BrowserRouter>
		<App centered={false}>
			<AppHeader/>
			<div className={styles.container}>
				<Switch>
					<Route exact path="/" component={About}/>
					<Route path="/projects" component={Portfolio}/>
				</Switch>
			</div>
			<AppFooter/>
		</App>
	</BrowserRouter>
)

export default cssModules(AppComponent, styles)
