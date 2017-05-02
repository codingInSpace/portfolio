import React from 'react'
import { connect } from 'react-redux'

import Section from 'grommet/components/Section'
import Heading from 'grommet/components/Heading'
import Box from 'grommet/components/Box'
import Button from 'grommet/components/Button'
import TrashIcon from 'grommet/components/icons/base/Trash'
import EditIcon from 'grommet/components/icons/base/Edit'

import { projectsEntityThunks } from '../../../shared/entities/Projects'
import { deleteProject } from './ducks/thunks'
import setHeaderView from '../../../shared/HOC/setHeaderView'

class ManageProjects extends React.Component {
  componentWillMount() {
    this.props.getProjects()
  }

  deleteProject(id) {
    this.props.delete(id)
  }

  render () {
    const { projects } = this.props

    const smallHorizontal = {
      horizontal: 'small',
      vertical: 'none'
    }

    return (
      <div>
        <Section pad="large">
          <Heading tag="h2" margin="none">Manage Projects</Heading>
        </Section>
        <Section pad="large">
          { projects && Object.values(projects).map(project => (
            <Box key={project.id}
                 colorIndex={project.id % 2 === 0 ? "light-1" : "light-2"}
                 direction="row"
                 justify="between"
                 full="horizontal"
                 pad="large">
              <Box size="medium" direction="column">
                <Heading tag="h3" margin="none">{project.title}</Heading>
                {project.short_desc}
              </Box>
              <Box pad="small" direction="column" justify="center">
                (tags)
              </Box>
              <Box direction="row" align="center">
                <Box pad={smallHorizontal}>
                  <Button accent={true}
                          icon={<EditIcon />}
                          label="Edit" />
                </Box>
                <Box pad={smallHorizontal}>
                  <Button critical={true}
                          icon={<TrashIcon />}
                          onClick={() => this.deleteProject(project.id)}
                          label="Delete" />
                </Box>
              </Box>
            </Box>
          ))}
        </Section>
      </div>
    )
  }
}

const mapState = state => ({
  projects: state.projectsById
})

const mapDispatch = dispatch => ({
  getProjects: id => dispatch(projectsEntityThunks.getAllProjects()),
  delete: id => dispatch(deleteProject(id))
})

export default connect(mapState, mapDispatch)(setHeaderView(ManageProjects, true))
