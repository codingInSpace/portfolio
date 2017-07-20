import React from 'react';

/**
 * Higher order component to provide a component with window width prop, i.e. for responisveness
 * Provides wrapped component with a ref to be able to check that
 * setState is not called on an unmounted component.
 * @param {Component} BaseComponent - A JSX Component
 */
const provideWindowWidth = (BaseComponent) => {
  class ScreenWidth extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        id: Math.random().toString(34).substring(2,18),
        width: 1980,
      };
    }

    componentWillMount() {
      this.setState({ ...this.state, width: window.innerWidth });
      window.addEventListener('resize', this.measure.bind(this));
    }

    componentWillUnmount() {
      window.removeEventListener('resize', this.measure.bind(this));
    }

    measure() {
      const { id } = this.state
      if (this.refs[id]) {
        this.setState({...this.state, width: window.innerWidth});
      }
    }

    render() {
      const { id, width } = this.state
      return <BaseComponent {...this.props} ref={id} width={width} />;
    }
  }

  return ScreenWidth;
}

export default provideWindowWidth
