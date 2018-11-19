import React from 'react'
import { connect } from 'react-redux'
import App from 'grommet/components/App'
import cssModules from 'react-css-modules'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import styles from './app.module.scss'
import { getLocalStorage } from './ducks'

import { Provider } from 'react-redux'
import { store } from '../store'

import { AppHeader } from '../shared/containers/AppHeader'
import AppFooter from '../shared/containers/AppFooter'
import { AppToast } from '../shared/containers/AppToast'

import { NewProject } from '../cms/containers/NewProject'
import ManageProjects from '../cms/containers/ManageProjects'
import EditProject from '../cms/containers/EditProject'
import ManageImages from '../cms/containers/ManageImages'
import { Login } from '../cms/containers/Login'

import Main from '../client/components/Main'
import { ProjectView } from '../client/containers/ProjectView'

import requireAuthentication from '../shared/HOC/requireAuthentication'

class AppComponent extends React.Component {
  componentWillMount() {
    this.props.getUserData()
  }

  render() {
    const { bannerOffset } = this.props

    return (
	<BrowserRouter>
		<App centered={false}>
			<AppHeader />
			<AppToast />
			<div className={styles.container}>
				<Switch>
					<Route
                exact
                path="/"
                component={() => <Main bannerOffset={bannerOffset} />} />
					<Route exact path="/projects/:id" component={ProjectView} />
					<Route exact path="/admin/login" component={Login} />
					<Route
                exact
                path="/admin/newproject"
                component={requireAuthentication(NewProject)} />
					<Route
                exact
                path="/admin/manageprojects"
                component={requireAuthentication(ManageProjects)} />
					<Route
                exact
                path="/admin/manageprojects/:id"
                component={requireAuthentication(EditProject)} />
					<Route
                exact
                path="/admin/images"
                component={requireAuthentication(ManageImages)} />
				</Switch>
			</div>
			<AppFooter />
		</App>
	</BrowserRouter>
    )
  }
}

const mapState = state => ({
  bannerOffset: state.appBannerOffset
})

const mapDispatch = dispatch => ({
  getUserData: () => dispatch(getLocalStorage())
})

AppComponent = connect(
  mapState,
  mapDispatch
)(AppComponent)
AppComponent = cssModules(AppComponent, styles)

const AppWithStore = () => (
	<Provider store={store}>
		<AppComponent />
	</Provider>
)

export default AppWithStore
