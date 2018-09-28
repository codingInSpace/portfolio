import React from 'react';

import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import 'grommet/scss/hpe/index';

import { AppComponent } from './app';

const render = (Component) => {
  ReactDOM.render(
	<AppContainer>
		<Component />
	</AppContainer>,
    document.getElementById('app')
  );
};

render(AppComponent);

if (module.hot) {
  module.hot.accept(() => {
    render(AppComponent);
  });
}
