import React from 'react'
import { connect } from 'react-redux'

import LoginForm from 'grommet/components/LoginForm'
import Section from 'grommet/components/Section'
import Label from 'grommet/components/Label'

import setHeaderView from '../../../shared/HOC/setHeaderView'
import { loginUserThunk } from './ducks'

let Login = (props) => {

  const submitLogin = (data) => {
    const payload = {
      email: data.username,
      password: data.password
    }

    props.login(payload)
  }

  return (
    <Section pad="large"
             align="center">
      <LoginForm onSubmit={data => submitLogin(data)}
                 logo={<Label size="large">JG</Label>} />
    </Section>
  )
}

const mapState = state => ({
  user: state.user
})

const mapDispatch = dispatch => ({
  login: data => dispatch(loginUserThunk(data))
})

Login = setHeaderView(Login, true)
export default connect(mapState, mapDispatch)(Login)