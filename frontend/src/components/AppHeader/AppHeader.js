import React from 'react'
import PropTypes from 'prop-types'

import Header from 'grommet/components/Header'
import Title from 'grommet/components/Title'
import Menu from 'grommet/components/Menu'
import Anchor from 'grommet/components/Anchor'
import Box from 'grommet/components/Box'

const AppHeader = (props) => (
	<Header size="medium"
					fixed={true}
					colorIndex="neutral-2"
					justify="between"
					pad={{horizontal: 'medium', vertical: 'none'}}>
			<Title>
				<Anchor path="/" label="JG"/>
			</Title>
		<Box pad={{horizontal: 'small', vertical: 'none'}}>
			<Menu inline={true}
						responsive={true}
						direction="row">
				<Anchor path="/" label="ABOUT"/>
				<Anchor path="/projects" label="PROJECTS"/>
			</Menu>
		</Box>
	</Header>
)

export default AppHeader
