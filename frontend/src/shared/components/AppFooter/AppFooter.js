import React from 'react'
import Footer from 'grommet/components/Footer'
import Box from 'grommet/components/Box'
import Anchor from 'grommet/components/Anchor'

const AppFooter = () => (
	<Footer size="large"
					justify="between"
					align="end"
					pad="large">
		<Box>jonathan.grangien@gmail.com</Box>
		<Anchor path="/admin/login" label="login" />
	</Footer>
)

export default AppFooter
