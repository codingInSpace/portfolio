import React from 'react'
import { connect } from 'react-redux'

import marked from 'marked'
import cssModules from 'react-css-modules'

import Heading from 'grommet/components/Heading'
import Section from 'grommet/components/Section'
import Box from 'grommet/components/Box'
import Image from 'grommet/components/Image'
import Anchor from 'grommet/components/Anchor'
import BackIcon from 'grommet/components/icons/base/LinkPrevious'
import GithubIcon from 'grommet/components/icons/base/SocialGithub'
import ExternalLink from 'grommet/components/icons/base/Link'
import Sidebar from 'grommet/components/Sidebar'
import Header from 'grommet/components/Header'
import Title from 'grommet/components/Title'
import Paragraph from 'grommet/components/Paragraph'

import styles from './index.module.scss';
import Tag from '../../components/Tag'
import SocialIcons from '../../../shared/components/SocialIcons'

import setHeaderView from '../../../shared/HOC/setHeaderView'
import { getOneProject } from '../../../shared/entities/Projects'
import { tagsEntityThunks } from '../../../shared/entities/Tags'
import { getAllImages } from '../../../shared/entities/Images'

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
    const hasLinks = project && (project.app_url || project.src_url)

    const hasTags = (pId) => tagsByProjectId[pId] && tagsByProjectId[pId].length > 0

    const PageSideBar = () => (
      <Sidebar fixed={false}
               full={false}>
        <Header pad='medium'
          justify='start'>
          <Anchor path="/"
                  icon={<BackIcon />} />
          <Title>Jonathan's site</Title>
        </Header>
        <Box flex='grow'
          justify='start'
          align='start'>
          <Box pad={{horizontal: 'medium', vertical: 'none'}}>
            <Paragraph size="large" margin="none">I'm a developer from Sweden with a passion for front end development, computer graphics and visualization.</Paragraph>
            <Paragraph size="large">Feel free to contact me about anything except snakes.</Paragraph>
          </Box>
          <Box pad={{horizontal: 'small', vertical: 'none'}}>
            <SocialIcons />
          </Box>
        </Box>
      </Sidebar>
    )

    return (
      <div>
        <Box direction="row">
        <PageSideBar />
        <Box full="horizontal">
        <Section pad="small" direction="row" className={styles.header}>
        </Section>
        <Section pad="medium" align="center" textAlign="center">
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
          <div className={styles.longDescOverride}
               dangerouslySetInnerHTML={{ __html: project ? marked(project.long_desc) : null } } />
        </Section>
        { hasLinks ? (
        <Section pad="large" justify="center" direction="row">
          { project.app_url.length > 0 ? (
            <Box pad="small">
              <Anchor label={project.app_link_label || 'Try it'}
                      href={project.app_url}
                      icon={<ExternalLink />}
                      target="_blank" />
            </Box>
            ) : null }
          { project.src_url.length > 0 ? (
            <Box pad="small">
              <Anchor label="Source"
                      href={project.src_url}
                      icon={<GithubIcon />}
                      target="_blank" />
            </Box>
          ) : null }
        </Section>
        ) : null }
        </Box>
        </Box>
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
  getProject: id => dispatch(getOneProject(id)),
  getTags: () => dispatch(tagsEntityThunks.getAllTags()),
  getImages: () => dispatch(getAllImages()),
})

ProjectView = setHeaderView(ProjectView, false)
ProjectView = cssModules(ProjectView, styles)
export default connect(mapState, mapDispatch)(ProjectView)
