import React from 'react'

import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import 'grommet/scss/hpe/index'

import { AppComponent } from './app'
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

const httpLink = createHttpLink({
  uri: 'http://localhost:4000'
})

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})

const render = (Component) => {
  ReactDOM.render(
	<AppContainer>
		<ApolloProvider client={client}>
			<Component />
		</ApolloProvider>
	</AppContainer>,
    document.getElementById('app')
  )
}

render(AppComponent)

if (module.hot) {
  module.hot.accept(() => {
    render(AppComponent)
  })
}
