import React from 'react'
import PropTypes from 'prop-types'

import Box from 'grommet/components/Box'
import Heading from 'grommet/components/Heading'
import Label from 'grommet/components/Label'

import axios from 'axios'
import AppBanner from '../AppBanner'

class Portfolio extends React.Component {
	state = {
		projects: []
	}

	componentWillMount() {
		axios.get(`${process.env.API_HOST}/projects`)
		.then(response => { 
			this.setState({projects: response.data})
		})
		.catch(error => console.log(error))
	}
	
	render() {
		const { projects } = this.state
		
		return (
			<Box>
				<AppBanner large={false}/>
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

export default Portfolio

