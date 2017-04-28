import React from 'react'
import { Provider } from 'react-redux'
import { store } from './store'

import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import 'grommet/scss/hpe/index'

import { AppComponent } from './app'

const Content = () => (
  <Provider store={store}>
    <AppContainer>
      <AppComponent />
    </AppContainer>
  </Provider>
)

ReactDOM.render( <Content />, document.getElementById('app') )

if (module.hot) {
  module.hot.accept('./app/App', () => {
    ReactDOM.render( <Content />, document.getElementById('app') )
  })
}
