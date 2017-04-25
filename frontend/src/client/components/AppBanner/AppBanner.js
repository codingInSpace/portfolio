import React from 'react'
import PropTypes from 'prop-types'

import Box from 'grommet/components/Box'
import Image from 'grommet/components/Image'
import Label from 'grommet/components/Label'
import Headline from 'grommet/components/Headline'

import cssModules from 'react-css-modules'
import styles from './index.module.scss'

const AppBanner = (props) => {
  const { primary, secondary, large } = props
  return (
	<Box pad={large ? 'large' : 'small'}
       colorIndex="neutral-2"
       align="center">
		<Box direction="row" align="center" pad={{ horizontal: 'large', vertical: 'none' }}>
			{ large ? (
				<div className={styles.image}>
					<Image src="assets/jonathan1.jpg"
                 size="small"
                 caption={primary || 'Jonathan Grangien'}
                 alt="jonathan" />
				</div>
					) : (
						<Box pad={large ? 'large' : 'medium'}>
							<Headline>{primary}</Headline>
						</Box>
					) }
			<Box pad={large ? 'large' : 'medium'}>
				{ secondary.map(text => (
					<div key={text.length().toString()}><Label margin="none">{text}</Label><br /></div>
        )) }
			</Box>
		</Box>
	</Box>
  )
}

AppBanner.propTypes = {
  primary: PropTypes.string,
  secondary: PropTypes.arrayOf(PropTypes.string),
  large: PropTypes.bool,
}

AppBanner.defaultProps = {
  primary: 'Jonathan Grangien',
  secondary: ['Developer', 'Web fullstack-er', 'Comp graphics enthusiast', 'MSc engineering student'],
  large: false,
}

export default cssModules(AppBanner, styles)
