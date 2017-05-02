import React from 'react'
import { connect } from 'react-redux'
import App from 'grommet/components/App'
import cssModules from 'react-css-modules'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import styles from './app.module.scss';

import { AppHeader } from '../shared/containers/AppHeader'
import AppFooter from '../shared/components/AppFooter'

import { NewProject } from '../cms/containers/NewProject'
import ManageProjects from '../cms/containers/ManageProjects'

import About from '../client/components/About'
import Portfolio from '../client/containers/Portfolio'
import { ProjectView } from '../client/containers/ProjectView'

let AppComponent = (props) => {
  const { bannerOffset } = props

  return (
    <BrowserRouter>
      <App centered={false}>
        <AppHeader />
        <div className={styles.container}>
          <Switch>
            <Route exact path="/" component={() => <About bannerOffset={bannerOffset} />} />
            <Route exact path="/projects" component={Portfolio}/>
            <Route exact path="/projects/:id" component={ProjectView}/>
            <Route path="/admin/newproject" component={NewProject}/>
            <Route path="/admin/manageprojects" component={ManageProjects}/>
          </Switch>
        </div>
        <AppFooter />
      </App>
    </BrowserRouter>
  )
}

const mapState = state => ({
  bannerOffset: state.appBannerOffset
})

AppComponent = connect(mapState, null)(AppComponent)
export default cssModules(AppComponent, styles)
