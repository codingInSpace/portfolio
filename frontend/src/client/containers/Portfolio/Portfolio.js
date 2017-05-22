import React from 'react'
import { connect } from 'react-redux'

import Box from 'grommet/components/Box'
import Heading from 'grommet/components/Heading'
import Label from 'grommet/components/Label'
import Tiles from 'grommet/components/Tiles'
import Tile from 'grommet/components/Tile'
import Section from 'grommet/components/Section'

import { withRouter } from 'react-router-dom'

import { projectsEntityThunks } from '../../../shared/entities/Projects'
import { tagsEntityThunks } from '../../../shared/entities/Tags'
import { imagesEntityThunks } from '../../../shared/entities/Images'
import setHeaderView from '../../../shared/HOC/setHeaderView'

import AppBanner from '../../containers/AppBanner'
import Project from './components/Project'

class Portfolio extends React.Component {
  componentWillMount() {
    this.getData()
  }

  getData() {
    this.props.getProjects()
    this.props.getTags()
    this.props.getImages()
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.projectsById !== this.props.projectsById) {
      this.setState({projects: nextProps.projectsById})
    }
  }

  goToProject(seriesIdx) {
    // Get corresponding project id
    const { projects } = this.props
    const id = Object.values(projects)[seriesIdx].id

    // Redirect
    this.props.history.push(`/projects/${id}`)
  }

  render() {
    const { projects, tagsByProjectId } = this.props

    const hasTags = (pId) => tagsByProjectId[pId] && tagsByProjectId[pId].length > 0
    const largeHorPadding = {horizontal: 'large', vertical: 'none'}

    return (
	<Box>
		<AppBanner large={false} />
		<Section pad="large" align="center" textAlign="center">
			<Heading tag="h1" margin="none">Projects</Heading>
		</Section>
		{ Object.values(projects).length > 0 ? (
		  <Section pad={largeHorPadding} margin={largeHorPadding} align="center" alignContent="center">
        <Tiles selectable={true} onSelect={ idx => this.goToProject(idx) } fill={true}>
          { Object.values(projects).map(project => (
            <Tile key={project.id} pad="small">
              <Project img={'assets/data.jpg'}
                       heading={project.title}
                       shortText={project.short_desc}
                       tags={ hasTags(project.id) ? tagsByProjectId[project.id] : [] } />
            </Tile>
            )) }
        </Tiles>
      </Section>
      ) : (
					<Box pad="large" align="center" textAlign="center">
						<Label>There are no projects in the database.</Label>
					</Box>
				) }
	</Box>
    )
  }
}

const mapState = state => ({
  projects: state.projectsById,
  tagsByProjectId: state.tagsByProjectId,
  imagesById: state.tagsByProjectId,
})

const mapDispatch = dispatch => ({
  getProjects: () => dispatch(projectsEntityThunks.getAllProjects()),
  getTags: () => dispatch(tagsEntityThunks.getAllTags()),
  getImages: () => dispatch(imagesEntityThunks.getAllImages()),
})

export default connect(mapState, mapDispatch)(setHeaderView(withRouter(Portfolio), false))

