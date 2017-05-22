import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import * as actions from './ducks/actions';

import Toast from 'grommet/components/Toast';

class AppToast extends React.Component {
  static propTypes = {
    status: PropTypes.string,
    msg: PropTypes.string
  }

  render() {
    const { status, msg } = this.props;
    const closeHandler = () => this.props.close();

    return msg !== '' ? <Toast status={status} onClose={closeHandler}>{msg}</Toast> : null
  }
}

const mapStateToProps = (state) => ({
  status: state.appToast.status,
  msg: state.appToast.msg
})

const mapDispatchToProps = (dispatch) => ({
  close: () => dispatch({type: actions.CLOSE_TOAST })
})

export default connect(mapStateToProps, mapDispatchToProps)(AppToast)
