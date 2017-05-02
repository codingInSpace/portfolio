import React from 'react'
import { connect } from 'react-redux'

import Heading from 'grommet/components/Heading'
import Section from 'grommet/components/Section'
import Anchor from 'grommet/components/Anchor'
import BackIcon from 'grommet/components/icons/base/LinkPrevious'

import AppBanner from '../../containers/AppBanner'

import setHeaderView from '../../../shared/HOC/setHeaderView'
import { projectsEntityThunks } from '../../../shared/entities/Projects'

class ProjectView extends React.Component {

  componentDidMount() {
    if (Object.keys(this.props.allProjects).length === 0)
      this.props.getProject(this.props.match.params.id)
  }

  render() {
    const id = this.props.match.params.id
    const project = this.props.allProjects[id]

    return (
      <div>
        <AppBanner large={false} />
        <Section pad="medium">
          <Anchor path="/projects"
                  icon={<BackIcon />} />
        </Section>
        <Section pad="none" align="center" textAlign="center">
          <Heading tag="h1"> { project ? project.title : '???' } </Heading>
        </Section>
        <Section pad="large" align="center">
          (image)
        </Section>
        <Section pad="small" align="center">
          { project ? project.projectteam : null }
        </Section>
        <Section pad="large" align="center">
          { project ? project.long_desc : null }
        </Section>
      </div>
    )
  }
}

const mapState = state => ({
  allProjects: state.projectsById
})

const mapDispatch = dispatch => ({
  getProject: id => dispatch(projectsEntityThunks.getOneProject(id))
})

export default connect(mapState, mapDispatch)(setHeaderView(ProjectView, false))
