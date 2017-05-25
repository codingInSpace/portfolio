import React from 'react'
import { connect } from 'react-redux'

import LoginForm from 'grommet/components/LoginForm'
import Section from 'grommet/components/Section'
import Anchor from 'grommet/components/Anchor'

import setHeaderView from '../../../shared/HOC/setHeaderView'
import { loginUserThunk } from './ducks'

let Login = (props) => {

  const submitLogin = (data) => {
    const payload = {
      email: data.username,
      password: data.password
    }

    console.log(payload)
    props.login(payload)
  }

  return (
    <Section pad="large"
             align="center">
      <LoginForm onSubmit={data => submitLogin(data)}
                 logo={<Anchor label="JG" />} />
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