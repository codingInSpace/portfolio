import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import 'grommet/scss/hpe/index'

import AppComponent from './App'

ReactDOM.render(
	<div>
  <AppContainer>
		<AppComponent/>
  </AppContainer></div>,
  document.getElementById('app')
);

//if (module.hot) {
//  module.hot.accept('./routes', () => {
//    ReactDOM.render(
//      <AppContainer>
//				<AppComponent/>
//      </AppContainer>,
//      document.getElementById('app')
//    );
//  });
//}
