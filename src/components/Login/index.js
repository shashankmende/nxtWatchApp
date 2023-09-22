import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import {
  LoginContainer,
  FormContainer,
  CompanyImg,
  InputContainer,
  Label,
  Input,
  GlobalStyle,
  CheckBoxInput,
  LoginBtn,
  ErrorPara,
} from './styledComponent'

class Login extends Component {
  state = {
    usernameInput: '',
    passwordInput: '',
    showPassword: false,
    ErrorMsg: '',
  }

  onSubmitSuccess = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    const {history} = this.props
    history.replace('/')
    console.log('history obj', history)
    this.setState({
      ErrorMsg: '',
    })
  }

  onSubmitFailure = error => {
    this.setState({
      ErrorMsg: `*${error}`,
    })
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {usernameInput, passwordInput} = this.state
    const userDetails = {
      username: usernameInput,
      password: passwordInput,
    }
    const stringifiedDetails = JSON.stringify(userDetails)
    const loginUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: stringifiedDetails,
    }
    const response = await fetch(loginUrl, options)
    const data = await response.json()
    console.log('data', data)
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  onChangeUsername = event => {
    this.setState({
      usernameInput: event.target.value,
    })
  }

  onChangePassword = event => {
    this.setState({
      passwordInput: event.target.value,
    })
  }

  onClickShowPassword = () => {
    this.setState(prevState => ({
      showPassword: !prevState.showPassword,
    }))
  }

  render() {
    const {usernameInput, passwordInput, showPassword, ErrorMsg} = this.state
    const textType = showPassword ? 'text' : 'password'
    console.log('show password', showPassword)
    console.log('username', usernameInput)
    console.log('password', passwordInput)
    return (
      <LoginContainer>
        <FormContainer>
          <GlobalStyle />
          <CompanyImg
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="website logo"
          />
          <InputContainer>
            <Label htmlFor="username">USERNAME</Label>
            <Input
              id="username"
              type="text"
              placeholder="Username"
              onChange={this.onChangeUsername}
            />
          </InputContainer>
          <InputContainer>
            <Label htmlFor="password">PASSWORD</Label>
            <Input
              id="password"
              type={textType}
              placeholder="Password"
              onChange={this.onChangePassword}
            />
          </InputContainer>
          <CheckBoxInput>
            <Input
              id="checkbox"
              type="checkbox"
              placeholder="Password"
              onClick={this.onClickShowPassword}
            />
            <Label htmlFor="checkbox">Show Password</Label>
          </CheckBoxInput>
          <LoginBtn type="submit" onClick={this.onSubmitForm}>
            Login
          </LoginBtn>
          <ErrorPara>{ErrorMsg}</ErrorPara>
        </FormContainer>
      </LoginContainer>
    )
  }
}

export default Login
