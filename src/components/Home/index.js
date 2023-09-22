import {Redirect} from 'react-router-dom'
import {Component} from 'react'

import Cookies from 'js-cookie'

import Header from '../Header'

import {HomeContainer} from './styledComponent'

class Home extends Component {
  state = {isDarkTheme: false, searchText: ''}

  updateTheme = () => {
    this.setState(prevState => ({
      isDarkTheme: !prevState.isDarkTheme,
    }))
  }

  render() {
    const {isDarkTheme} = this.state
    const bgColor = isDarkTheme ? '#181818' : '#f9f9f9'
    console.log('is dark theme', bgColor)

    const webSiteLogo = isDarkTheme
      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

    return (
      <HomeContainer color={bgColor}>
        <Header
          isDarkTheme={isDarkTheme}
          updateTheme={this.updateTheme}
          webSiteLogo={webSiteLogo}
        />
      </HomeContainer>
    )
  }
}

export default Home
