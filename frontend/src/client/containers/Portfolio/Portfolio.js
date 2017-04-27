import React from 'react'
import { connect } from 'react-redux'

import Box from 'grommet/components/Box'
import Heading from 'grommet/components/Heading'
import Label from 'grommet/components/Label'

import { projectsEntityThunks } from '../../../shared/entities/Projects'
import AppBanner from '../../components/AppBanner'

class Portfolio extends React.Component {
  componentWillMount() {
    this.props.getProjects()
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.projectsById !== this.props.projectsById) {
      this.setState({projects: nextProps.projectsById})
    }
  }

  render() {
    const { projects } = this.props

    return (
	<Box>
		<AppBanner large={false} />
		<Box pad="medium" align="center" textAlign="center">
			<Heading tag="h1" margin="none">Projects</Heading>
		</Box>
		{ projects.length > 0 ?
					projects.map(project => (
						<Box key={project.id} pad="small">
							<Heading tag="h3" margin="none">{project.title}</Heading>
							<Label margin="none">{project.short_desc}</Label>
						</Box>
					))
				: (
					<Box pad="large" align="center" textAlign="center">
						<Label>There are no projects in the database.</Label>
					</Box>
				) }
	</Box>
    )
  }
}

const mapState = state => ({
  projects: state.projectsById
})

const mapDispatch = dispatch => ({
  getProjects: () => dispatch(projectsEntityThunks.getAllProjects())
})

export default connect(mapState, mapDispatch)(Portfolio)

