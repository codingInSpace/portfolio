import React from 'react'
import { connect } from 'react-redux'
import Section from 'grommet/components/Section'
import Box from 'grommet/components/Box'
import Heading from 'grommet/components/Heading'
import Form from 'grommet/components/Form'
import FormField from 'grommet/components/FormField'
import TextInput from 'grommet/components/TextInput'
import Footer from 'grommet/components/Footer'
import Button from 'grommet/components/Button'
import Anchor from 'grommet/components/Anchor'
import BackIcon from 'grommet/components/icons/base/LinkPrevious'

import setHeaderView from '../../../shared/HOC/setHeaderView'
import { updateProject } from './ducks/thunks'
import { projectsEntityThunks } from '../../../shared/entities/Projects'
import { tagsEntityThunks } from '../../../shared/entities/Tags'
import { imagesEntityThunks } from '../../../shared/entities/Images'

import ImageIdSelector from '../../components/ImageIdSelector'

class EditProject extends React.Component {
  state = {
    id: -1,
    title: '',
    shortDesc: '',
    longDesc: '',
    srcUrl: '',
    appDemoUrl: '',
    appDemoLabel: '',
    projectTeamDesc: '',
    primaryImageId: '',
    tagsString: '',
  }

  componentWillReceiveProps(nextProps) {
    const id = nextProps.match.params.id || this.props.params.id
    let exit = false

    if (Object.keys(nextProps.projects).length === 0) {
      this.props.getAllProjects()
      exit = true
    }

    if (Object.keys(nextProps.tags).length === 0) {
      this.props.getAllTags()
      exit = true
    }

    if (exit) return

    const project = nextProps.projects[id]
    this.updateStateWithDBData(project)
  }

  componentDidMount() {
    const { id } = this.props.match.params
    this.props.getAllImages()

    if (id && Object.keys(this.props.projects).length > 0) {
      const project = this.props.projects[id]
      this.updateStateWithDBData(project)
    }
  }

  updateStateWithDBData(project) {
    const projectTags = this.props.tags[project.id]

    let tagsString = ''
    for (let i in projectTags)
      tagsString += projectTags[i].label + ', '

    const payload = {
      id: project.id,
      title: project.title || '',
      shortDesc: project.short_desc || '',
      longDesc: project.long_desc || '',
      srcUrl: project.src_url || '',
      appUrl: project.app_url || '',
      appDemoLabel: project.app_link_label || '',
      projectTeamDesc: project.projectteam || '',
      primaryImageId: project.primary_image_id,
      tagsString
    }

    this.setState({...payload})
  }

  updateText(value, attribute) {
    switch(attribute) {
      case 'title':
        this.setState({...this.state, title: value})
        break;
      case 'shortDesc':
        this.setState({...this.state, shortDesc: value})
        break;
      case 'longDesc':
        this.setState({...this.state, longDesc: value})
        break;
      case 'srcUrl':
        this.setState({...this.state, srcUrl: value})
        break;
      case 'appDemoUrl':
        this.setState({...this.state, appDemoUrl: value})
        break;
      case 'appDemoLabel':
        this.setState({...this.state, appDemoLabel: value})
        break;
      case 'projectTeamDesc':
        this.setState({...this.state, projectTeamDesc: value})
        break;
      case 'primaryImageId':
        this.setState({...this.state, primaryImageId: value})
        break;
      case 'tagsString':
        this.setState({...this.state, tagsString: value})
        break;
    }
  }

  updateSelectedImageId(value) {
    this.setState({...this.state, primaryImageId: value})
  }

  submit() {
    this.props.submitData(this.state)
  }

  render() {
    const { title, shortDesc, longDesc, srcUrl, appDemoLabel, appDemoUrl, projectTeamDesc, primaryImageId, tagsString } = this.state
    const { images } = this.props

    const shouldDisableButton = !title || !shortDesc || !tagsString
    const buttonHandler = shouldDisableButton ? undefined : () => this.submit()

    const selectableImages = []

    for (let i = 0; i < Object.keys(images).length; i++) {
      console.log('loop')
      const id = Object.values(images)[i].id
      const desc = Object.values(images)[i].description
      selectableImages.push({
        "value": id,
        "sub": desc,
        "label": (
          <Box direction='row' justify='between'>
            <span>{id}</span>
            <span className='secondary'>{desc}</span>
          </Box>
        )
      })
    }

    return (
      <Section pad="large">
        <Box align="start" pad="medium">
          <Anchor path="/admin/manageprojects"
                  icon={<BackIcon />} />
        </Box>
        <Box align="center">
          <Heading tag="h2" margin="none">Edit {title}</Heading>
        </Box>
        <Box align="center" pad="large">
          <Form>
            <FormField label="Title">
              <TextInput placeHolder="Nice project"
                         onDOMChange={e => this.updateText(e.target.value, 'title')}
                         value={title} />
            </FormField>
            <FormField label="Short description">
              <TextInput onDOMChange={e => this.updateText(e.target.value, 'shortDesc')}
                         value={shortDesc} />
            </FormField>
            <FormField label="Long description">
              <TextInput onDOMChange={e => this.updateText(e.target.value, 'longDesc')}
                         value={longDesc} />
            </FormField>
            <FormField label="Source url">
              <TextInput onDOMChange={e => this.updateText(e.target.value, 'srcUrl')}
                         value={srcUrl} />
            </FormField>
            <FormField label="App demo url">
              <TextInput onDOMChange={e => this.updateText(e.target.value, 'appDemoUrl')}
                         value={appDemoUrl} />
            </FormField>
            <FormField label="Label for app demo url">
              <TextInput placeHolder="Try it!"
                         onDOMChange={e => this.updateText(e.target.value, 'appDemoLabel')}
                         value={appDemoLabel} />
            </FormField>
            <FormField label="Project team description">
              <TextInput placeHolder="Solo project"
                         onDOMChange={e => this.updateText(e.target.value, 'projectTeamDesc')}
                         value={projectTeamDesc} />
            </FormField>
            <FormField label="Primary image id">
              <ImageIdSelector images={selectableImages}
                               onSelect={val => this.updateSelectedImageId(val)}
                               value={primaryImageId} />
            </FormField>
            <FormField label="Tags" help="Separate by commas. Current tags overridden.">
              <TextInput placeHolder="AI, Machine Learning"
                         onDOMChange={e => this.updateText(e.target.value, 'tagsString')}
                         value={tagsString} />
            </FormField>
            <Footer pad={{horizontal: 'none', vertical: 'medium'}}>
              <Button primary={true}
                      label="Update"
                      fill={true}
                      onClick={buttonHandler} />
            </Footer>
          </Form>
        </Box>
      </Section>
    )
  }
}

const mapState = state => ({
  projects: state.projectsById,
  tags: state.tagsByProjectId,
  images: state.imagesById
})

const mapDispatch = dispatch => ({
  submitData: data => dispatch(updateProject(data)),
  getAllProjects: () => dispatch(projectsEntityThunks.getAllProjects()),
  getAllTags: () => dispatch(tagsEntityThunks.getAllTags()),
  getAllImages: () => dispatch(imagesEntityThunks.getAllImages())
})

export default connect(mapState, mapDispatch)(setHeaderView(EditProject, true))
