import React from 'react'
import PropTypes from 'prop-types'
import App from 'grommet/components/App'
import Box from 'grommet/components/Box'

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import styles from './app.module.scss';
import cssModules from 'react-css-modules';

import Message from './Message'
import AppHeader from './components/AppHeader'
import AppFooter from './components/AppFooter'

import About from './components/About'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'

const AppComponent = (props) => (
	<BrowserRouter>
		<App centered={false}>
			<AppHeader/>
			<div className={styles.container}>
				<Switch>
					<Route exact path="/" component={About}/>
					<Route path="/projects" component={Portfolio}/>
					<Route path="/contact" component={Contact}/>
				</Switch>
			</div>
			<AppFooter/>
		</App>
	</BrowserRouter>
)

export default cssModules(AppComponent, styles)
