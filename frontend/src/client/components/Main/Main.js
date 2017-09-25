import React from 'react'

import cssModules from 'react-css-modules'
import setHeaderView from '../../../shared/HOC/setHeaderView'
import provideWindowWidth from '../../../shared/HOC/provideWindowWidth'

import AppBanner from '../../containers/AppBanner'
import Portfolio from '../../containers/Portfolio'
import * as styles from './index.module.scss'

let Main = (props) => {
  const isOffset = props.bannerOffset > 0

  const offsetStyle = {
    paddingTop: props.bannerOffset
  }

  return (
		<div>
			<AppBanner large />
			<div style={isOffset ? offsetStyle : {}}>
        <Portfolio />
			</div>
		</div>
  )
}

Main = cssModules(Main, styles)
Main = setHeaderView(Main, false)
Main = provideWindowWidth(Main)
export default Main
