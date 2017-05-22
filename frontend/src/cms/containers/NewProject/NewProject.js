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

import setHeaderView from '../../../shared/HOC/setHeaderView'

import { submitNewProject } from './ducks/thunks'
import { FINISH_CLEAR_NEW_PROJECT_FORM } from './ducks/actions'

class NewProject extends React.Component {
  constructor(props) {
    super(props)
    this.defaultState = {
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

    this.state = {...this.defaultState}
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.formToBeCleared) {
      this.clearForm()
    }
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
      case 'tagsString':
        this.setState({...this.state, tagsString: value})
        break;
      case 'primaryImageId':
        this.setState({...this.state, primaryImageId: value})
        break;
      default:
        break;

    }
  }

  submit() {
    // send data
    this.props.submitData(this.state)
  }

  clearForm() {
    this.setState(this.defaultState)
    this.props.doneClearing()
  }

  render() {
    const { title, shortDesc, longDesc, srcUrl, appDemoLabel, appDemoUrl, projectTeamDesc, primaryImageId, tagsString } = this.state

    const shouldDisableButton = !title || !shortDesc || !tagsString
    const buttonHandler = shouldDisableButton ? undefined : () => this.submit()

    return (
      <Section pad="large">
        <Heading tag="h2" margin="none">New Project</Heading>
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
            <FormField label="Primary Image">
              <TextInput placeHolder="img id"
                         onDOMChange={e => this.updateText(e.target.value, 'primaryImageId')}
                         value={primaryImageId} />
            </FormField>
            <FormField label="Tags" help="Separate by commas">
              <TextInput placeHolder="AI, Machine Learning"
                         onDOMChange={e => this.updateText(e.target.value, 'tagsString')}
                         value={tagsString} />
            </FormField>
            <Footer pad={{horizontal: 'none', vertical: 'medium'}}>
              <Button primary={true}
                      label="Submit"
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
  formToBeCleared: state.newProjectFormToBeCleared
})

const mapDispatch = dispatch => ({
  submitData: data => dispatch(submitNewProject(data)),
  doneClearing: () => dispatch({type: FINISH_CLEAR_NEW_PROJECT_FORM})
})

export default connect(mapState, mapDispatch)(setHeaderView(NewProject, true))

