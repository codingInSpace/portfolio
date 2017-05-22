import React from 'react'
import { connect } from 'react-redux'

import Heading from 'grommet/components/Heading'
import Section from 'grommet/components/Section'
import Box from 'grommet/components/Box'
import Image from 'grommet/components/Image'
import Anchor from 'grommet/components/Anchor'
import Paragraph from 'grommet/components/Paragraph'
import BackIcon from 'grommet/components/icons/base/LinkPrevious'

import AppBanner from '../../containers/AppBanner'
import Tag from '../../components/Tag'

import setHeaderView from '../../../shared/HOC/setHeaderView'
import { projectsEntityThunks } from '../../../shared/entities/Projects'
import { tagsEntityThunks } from '../../../shared/entities/Tags'
import { imagesEntityThunks } from '../../../shared/entities/Images'

class ProjectView extends React.Component {

  componentDidMount() {
    if (Object.keys(this.props.allProjects).length === 0)
      this.props.getProject(this.props.match.params.id)

    // TODO: Implement single image
    if (Object.keys(this.props.imagesById).length === 0)
      this.props.getImages()

    if (!this.props.tagsByProjectId[this.props.match.params.id])
      this.props.getTags()
  }

  render() {
    const id = this.props.match.params.id
    const project = this.props.allProjects[id]
    const { tagsByProjectId, imagesById } = this.props

    const hasTags = (pId) => tagsByProjectId[pId] && tagsByProjectId[pId].length > 0

    return (
      <div>
        <AppBanner large={false} />
        <Section pad="medium">
          <Anchor path="/projects"
                  icon={<BackIcon />} />
        </Section>
        <Section pad="none" align="center" textAlign="center">
          <Heading tag="h1" margin="none"> { project ? project.title : '???' } </Heading>
          <Box pad="small" direction="row">
            { project && hasTags(project.id) && tagsByProjectId[project.id].map(tag => (
              <Tag key={tag.id} label={tag.label} />
            ))}
          </Box>
        </Section>
        <Section pad="large" align="center">
          { project && imagesById[project.primary_image_id] && (
            <Image src={imagesById[project.primary_image_id].link}
                   size='large'
                   alt="Project image" />
          ) }
        </Section>
        <Section pad="small" align="center">
          { project ? project.projectteam : null }
        </Section>
        <Section pad="large" align="center">
          <Paragraph size="large">
          { project ? project.long_desc : null }
          </Paragraph>
        </Section>
      </div>
    )
  }
}

const mapState = state => ({
  allProjects: state.projectsById,
  tagsByProjectId: state.tagsByProjectId,
  imagesById: state.imagesById
})

const mapDispatch = dispatch => ({
  getProject: id => dispatch(projectsEntityThunks.getOneProject(id)),
  getTags: id => dispatch(tagsEntityThunks.getAllTags()),
  getImages: id => dispatch(imagesEntityThunks.getAllImages()),
})

export default connect(mapState, mapDispatch)(setHeaderView(ProjectView, false))
