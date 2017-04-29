import React from 'react'
import { connect } from 'react-redux'

import Heading from 'grommet/components/Heading'
import Section from 'grommet/components/Section'

import AppBanner from '../../containers/AppBanner'

class ProjectView extends React.Component {

  render() {
    const id = this.props.match.params.id
    const project = this.props.allProjects[id]

    return (
      <Section>
        <AppBanner large={false} />
        <Heading tag="h1"> { project ? project.title : '???' } </Heading>
      </Section>
    )
  }
}

const mapState = state => ({
  allProjects: state.projectsById
})

export default connect(mapState, null)(ProjectView)
