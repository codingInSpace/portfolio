import React from 'react'
import { connect } from 'react-redux'

import Box from 'grommet/components/Box'
import Heading from 'grommet/components/Heading'
import Label from 'grommet/components/Label'
import Section from 'grommet/components/Section'

import AppBanner from '../../containers/AppBanner'

class ProjectView extends React.Component {

  render() {
    const project = this.props.allProjects[this.props.params.id]
    return (
      <Section>
        <AppBanner large={false} />
        <Heading tag="h1"> { project.title } </Heading>
      </Section>
    )
  }
}

const mapState = state => ({
  allProjects: state.projectsById
})

export default connect(mapState, null)(ProjectView)
