import {Component} from 'react'
import {Link} from 'react-router-dom'

import Cookies from 'js-cookie'
import {AiFillHome, AiOutlineFire} from 'react-icons/ai'

import {IoLogoGameControllerB} from 'react-icons/io'
import {BiAddToQueue} from 'react-icons/bi'
import {IconContext} from 'react-icons'
import Header from '../Header'

import {
  HomeContainer,
  HomeLeftContainer,
  TabsContainer,
  Para,
  GlobalStyle,
} from './styledComponent'

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
      <HomeContainer color={bgColor} data-testid="home">
        <Header
          isDarkTheme={isDarkTheme}
          updateTheme={this.updateTheme}
          webSiteLogo={webSiteLogo}
        />
        <HomeLeftContainer>
          <Link to="/">
            <GlobalStyle />
            <TabsContainer>
              <IconContext.Provider value={{size: 25}}>
                <AiFillHome />
              </IconContext.Provider>

              <Para>Home</Para>
            </TabsContainer>
          </Link>
          <Link to="/trending">
            <TabsContainer>
              <IconContext.Provider value={{size: 25}}>
                <AiOutlineFire />
              </IconContext.Provider>

              <Para>Trending</Para>
            </TabsContainer>
          </Link>
          <Link to="/gaming">
            <TabsContainer>
              <IconContext.Provider value={{size: 25}}>
                <IoLogoGameControllerB />
              </IconContext.Provider>

              <Para>Gaming</Para>
            </TabsContainer>
          </Link>
          <Link to="/saved-videos">
            <TabsContainer>
              <IconContext.Provider value={{size: 25}}>
                <BiAddToQueue />
              </IconContext.Provider>

              <Para>Saved Videos</Para>
            </TabsContainer>
          </Link>
        </HomeLeftContainer>
      </HomeContainer>
    )
  }
}

export default Home
