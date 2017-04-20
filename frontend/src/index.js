import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import 'grommet/scss/hpe/index'

//import { Provider } from 'react-redux'
//import { createStore, applyMiddleware } from 'redux';

import AppComponent from './App'

ReactDOM.render(
	<div>
  <AppContainer>
		<AppComponent/>
  </AppContainer></div>,
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept('./App', () => {
    ReactDOM.render(
      <AppContainer>
				<AppComponent/>
      </AppContainer>,
      document.getElementById('app')
    );
  });
}
