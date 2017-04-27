import React from 'react'
import Section from 'grommet/components/Section'
import Box from 'grommet/components/Box'
import Heading from 'grommet/components/Heading'
import Form from 'grommet/components/Form'
import FormField from 'grommet/components/FormField'
import TextInput from 'grommet/components/TextInput'
import Footer from 'grommet/components/Footer'
import Button from 'grommet/components/Button'

class NewProject extends React.Component {
  state = {
    title: '',
    shortDesc: '',
    longDesc: '',
    srcUrl: '',
    appDemoUrl: '',
    appDemoLabel: '',
    projectTeamDesc: '',
    tagsString: '',
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
      default:
        break;

    }
  }

  submit() {
    // send data
    console.log(this.state)
  }

  render() {
    const { title, shortDesc, longDesc, srcUrl, appDemoLabel, appDemoUrl, projectTeamDesc, tagsString } = this.state

    const shouldDisableButton = !title || !shortDesc || !tagsString
    const buttonHandler = shouldDisableButton ? undefined : () => this.submit()

    return (
      <Section pad="large">
        <Heading tag="h2" margin="none">New Project</Heading>
        <Box align="center" pad="large">
          <Form>
            <FormField label="Title">
              <TextInput placeHolder="Nice project"
                         onDOMChange={e => this.updateText(e.target.value, 'title')} />
            </FormField>
            <FormField label="Short description">
              <TextInput onDOMChange={e => this.updateText(e.target.value, 'shortDesc')} />
            </FormField>
            <FormField label="Long description">
              <TextInput onDOMChange={e => this.updateText(e.target.value, 'longDesc')} />
            </FormField>
            <FormField label="Source url">
              <TextInput onDOMChange={e => this.updateText(e.target.value, 'srcUrl')} />
            </FormField>
            <FormField label="App demo url">
              <TextInput onDOMChange={e => this.updateText(e.target.value, 'appDemoUrl')} />
            </FormField>
            <FormField label="Label for app demo url">
              <TextInput placeHolder="Try it!"
                         onDOMChange={e => this.updateText(e.target.value, 'appDemoLabel')} />
            </FormField>
            <FormField label="Project team description">
              <TextInput placeHolder="Solo project"
                         onDOMChange={e => this.updateText(e.target.value, 'projectTeamDesc')} />
            </FormField>
            <FormField label="Tags">
              <TextInput placeHolder="AI, Machine Learning"
                         onDOMChange={e => this.updateText(e.target.value, 'tagsString')} />
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

export default NewProject

