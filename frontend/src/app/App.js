import React from 'react'
import { connect } from 'react-redux'
import App from 'grommet/components/App'
import cssModules from 'react-css-modules'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import styles from './app.module.scss';

import { AppHeader } from '../shared/containers/AppHeader'
import AppFooter from '../shared/components/AppFooter'
import { AppToast } from '../shared/containers/AppToast'

import { NewProject } from '../cms/containers/NewProject'
import ManageProjects from '../cms/containers/ManageProjects'
import EditProject from '../cms/containers/EditProject'
import ManageImages from '../cms/containers/ManageImages'

import About from '../client/components/About'
import Portfolio from '../client/containers/Portfolio'
import { ProjectView } from '../client/containers/ProjectView'

let AppComponent = (props) => {
  const { bannerOffset } = props

  return (
    <BrowserRouter>
      <App centered={false}>
        <AppHeader />
        <AppToast />
        <div className={styles.container}>
          <Switch>
            <Route exact path="/" component={() => <About bannerOffset={bannerOffset} />} />
            <Route exact path="/projects" component={Portfolio}/>
            <Route exact path="/projects/:id" component={ProjectView}/>
            <Route exact path="/admin/newproject" component={NewProject}/>
            <Route exact path="/admin/manageprojects" component={ManageProjects}/>
            <Route exact path="/admin/manageprojects/:id" component={EditProject}/>
            <Route exact path="/admin/images" component={ManageImages}/>
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
