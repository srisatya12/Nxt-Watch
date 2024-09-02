
import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import CommonContext from '../../ReactContext/NxtContext'

import {
  LoginBgCont,
  Form,
  LoginImg,
  Label,
  Input,
  CheckBoxInput,
  ShowPassCont,
  LoginBtn,
  LabelShowPass,
  ErrorPara,
} from './styledComponents'

class Login extends Component {
  state = {
    username: '',
    password: '',
    isPasswordVisible: false,
    isHavingErr: false,
    errorMsg: '',
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onChangeShowPassword = () => {
    this.setState(prevState => ({
      isPasswordVisible: !prevState.isPasswordVisible,
    }))
  }

  onSuccessfulResponse = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    this.setState({isHavingErr: false})
    history.replace('/')
  }

  onFailureResponse = errorMsg => {
    this.setState({errorMsg, isHavingErr: true})
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok === true) {
      this.onSuccessfulResponse(data.jwt_token)
    } else {
      this.onFailureResponse(data.error_msg)
    }
  }

  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    const {
      username,
      password,
      isPasswordVisible,
      isHavingErr,
      errorMsg,
    } = this.state
    const showPassword = isPasswordVisible ? 'text' : 'password'

    return (
      <CommonContext.Consumer>
        {value => {
          const {darkMode} = value

          const logoSrc = darkMode
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

          return (
            <LoginBgCont darkMode={darkMode}>
              <Form darkMode={darkMode} onSubmit={this.onSubmitForm}>
                <LoginImg src={logoSrc} alt="website logo" />
                <Label darkMode={darkMode} htmlFor="username">
                  USERNAME
                </Label>
                <Input
                  value={username}
                  darkMode={darkMode}
                  id="username"
                  type="text"
                  placeholder="Username"
                  onChange={this.onChangeUsername}
                />
                <Label darkMode={darkMode} htmlFor="password">
                  PASSWORD
                </Label>
                <Input
                  value={password}
                  darkMode={darkMode}
                  id="password"
                  type={showPassword}
                  placeholder="Password"
                  onChange={this.onChangePassword}
                />
                <ShowPassCont>
                  <CheckBoxInput
                    id="showPassword"
                    type="checkbox"
                    onChange={this.onChangeShowPassword}
                  />
                  <LabelShowPass darkMode={darkMode} htmlFor="showPassword">
                    Show Password
                  </LabelShowPass>
                </ShowPassCont>
                <LoginBtn type="submit">Login</LoginBtn>
                {isHavingErr && <ErrorPara>*{errorMsg}</ErrorPara>}
              </Form>
            </LoginBgCont>
          )
        }}
      </CommonContext.Consumer>
    )
  }
}

export default Login
