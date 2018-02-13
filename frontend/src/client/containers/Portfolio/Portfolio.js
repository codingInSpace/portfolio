import React from 'react'
import { connect } from 'react-redux'

import Box from 'grommet/components/Box'
import Heading from 'grommet/components/Heading'
import Label from 'grommet/components/Label'
import Tiles from 'grommet/components/Tiles'
import Tile from 'grommet/components/Tile'
import Section from 'grommet/components/Section'
import Spinning from 'grommet/components/icons/Spinning'

import { withRouter } from 'react-router-dom'

import { getAllProjects } from '../../../shared/entities/Projects'
import { tagsEntityThunks } from '../../../shared/entities/Tags'
import { getAllImages } from '../../../shared/entities/Images'
import setHeaderView from '../../../shared/HOC/setHeaderView'

import AppBanner from '../../containers/AppBanner'
import Project from './components/Project'

class Portfolio extends React.Component {
  componentWillMount() {
    this.getData()
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.projectsById !== this.props.projectsById) {
      this.setState({projects: nextProps.projectsById})
    }
  }

  getData() {
    this.props.getProjects()
    this.props.getTags()
    this.props.getImages()
  }

  goToProject(seriesIdx) {
    // Get corresponding project id
    const { projects } = this.props
    const id = Object.values(projects)[seriesIdx].id

    // Redirect
    this.props.history.push(`/projects/${id}`)
  }

  render() {
    const { projects, tagsByProjectId, imagesById } = this.props

    const hasTags = (pId) => tagsByProjectId[pId] && tagsByProjectId[pId].length > 0
    const largeHorPadding = {horizontal: 'large', vertical: 'none'}

    return (
	<Section>
		<Section pad="large" align="center" textAlign="center">
			<Heading tag="h2" margin="none">Some work</Heading>
		</Section>
		{ Object.values(projects).length > 0 ? (
		  <Section pad={largeHorPadding} margin={largeHorPadding} align="center" alignContent="center">
        <Tiles selectable={true} onSelect={ idx => this.goToProject(idx) } fill={true}>
          { Object.values(projects).map(project => (
            <Tile key={project.id} size="medium" pad="none">
              <Project img={imagesById[project.primary_image_id] ? imagesById[project.primary_image_id].link : undefined}
                       heading={project.title}
                       shortText={project.short_desc}
                       tags={ hasTags(project.id) ? tagsByProjectId[project.id] : [] } />
            </Tile>
            )) }
        </Tiles>
      </Section>
      ) : (
					<Box pad="large" align="center" textAlign="center">
            { this.props.projectsLoading ? <Spinning size="large"/> : (
              <Label>There are no projects in the database.</Label>
            ) }
					</Box>
				) }
	</Section>
    )
  }
}

const mapState = state => ({
  projects: state.projectsById,
  tagsByProjectId: state.tagsByProjectId,
  imagesById: state.imagesById,
  projectsLoading: state.projectsLoading,
})

const mapDispatch = dispatch => ({
  getProjects: () => dispatch(getAllProjects()),
  getTags: () => dispatch(tagsEntityThunks.getAllTags()),
  getImages: () => dispatch(getAllImages()),
})

export default connect(mapState, mapDispatch)(setHeaderView(withRouter(Portfolio), false))

