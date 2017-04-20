import React from 'react'
import PropTypes from 'prop-types'

import Header from 'grommet/components/Header'
import Title from 'grommet/components/Title'
import Menu from 'grommet/components/Menu'
import Anchor from 'grommet/components/Anchor'
import Box from 'grommet/components/Box'
import Image from 'grommet/components/Image'
import Label from 'grommet/components/Label'
import Headline from 'grommet/components/Headline'

import styles from './index.module.scss';
import cssModules from 'react-css-modules';

class AppBanner extends React.Component {
	static propTypes = {
		primary: PropTypes.string,
		secondary: PropTypes.array,
		large: PropTypes.bool,
	}

	render() {
		let { primary, secondary, large } = this.props

		primary = primary || 'Jonathan Grangien'
		secondary = secondary || ['Developer', 'Web fullstack-er', 'Comp graphics enthusiast', 'MSc engineering student']

		return (
			<Box pad={large ? "large" : "small"}
					colorIndex="neutral-2"
					align="center">
					<Box direction="row" align="center" pad={{horizontal: "large", vertical: "none"}}>
					{ large ? (
						<div className={styles.image}>
							<Image src="assets/jonathan1.jpg" 
										size="small" 
										caption={primary || 'Jonathan Grangien'} 
										alt="jonathan"/>
						</div>
					) : (
						<Box pad={large ? "large" : "medium"}>
							<Headline>{primary}</Headline>
						</Box>
					) }
					<Box pad={large ? "large" : "medium"}>
					{ secondary.map((text, i) => (
						<div key={i}><Label margin="none">{text}</Label><br/></div>
					 )) }
					</Box>
				</Box>
			</Box>
		)
	}
}

export default cssModules(AppBanner, styles)
