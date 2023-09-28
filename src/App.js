import {Component} from 'react'

import Cookies from 'js-cookie'
import {AiFillHome, AiOutlineFire} from 'react-icons/ai'

import {IoLogoGameControllerB} from 'react-icons/io'
import {BiAddToQueue} from 'react-icons/bi'

import './App.css'
import {Switch, Route, Link} from 'react-router-dom'

import Login from './components/Login'
import Home from './components/Home'
import Header from './components/Header'
import Tabs from './components/Tabs'

import {
  HomeContainer,
  HomeLeftContainer,
  TabsContainer,
  Para,
  GlobalStyle,
  LinkItem,
  TabsListItem,
  HomeLeftAndRightContainer,
  HomeRightContainer,
} from './styledComponents'

// Replace your code here

const tabsList = [
  {
    tabId: 1,
    icon: <AiFillHome />,
    displayText: 'Home',
    link: '/',
  },
  {
    tabId: 2,
    icon: <AiOutlineFire />,
    displayText: 'Trending',
    link: '/trending',
  },
  {
    tabId: 3,
    icon: <IoLogoGameControllerB />,
    displayText: 'Gaming',
    link: '/gaming',
  },
  {
    tabId: 4,
    icon: <BiAddToQueue />,
    displayText: 'Saved Videos',
    link: '/saved-videos',
  },
]

class App extends Component {
  state = {isDarkTheme: false, searchText: '', activeRoute: 'Home'}

  updateTheme = () => {
    this.setState(prevState => ({
      isDarkTheme: !prevState.isDarkTheme,
    }))
  }

  onClickHomeRoute = () => {
    console.log('home route is clicked')
    this.setState({
      activeRoute: 'Home',
    })
  }

  onClickTrendingRoute = () => {
    console.log('trending route is clicked')
    this.setState({
      activeRoute: 'Trending',
    })
  }

  onClickGameRoute = () => {
    console.log('game route is clicked')
    this.setState({
      activeRoute: 'Game',
    })
  }

  onClickSavedRoute = () => {
    console.log('saved route is clicked')
    this.setState({
      activeRoute: 'Saved',
    })
  }

  render() {
    const {isDarkTheme, activeRoute} = this.state
    const bgColor = isDarkTheme ? '#181818' : '#f9f9f9'
    console.log('is dark theme', activeRoute)

    const webSiteLogo = isDarkTheme
      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

    return (
      <HomeContainer
        isDarkTheme={isDarkTheme}
        color={bgColor}
        data-testid="home"
      >
        <Header
          isDarkTheme={isDarkTheme}
          updateTheme={this.updateTheme}
          webSiteLogo={webSiteLogo}
        />
        <HomeLeftAndRightContainer>
          <Tabs
            isDarkTheme={isDarkTheme}
            updateTheme={this.updateTheme}
            activeRoute={activeRoute}
            onClickHomeRoute={this.onClickHomeRoute}
            onClickTrendingRoute={this.onClickTrendingRoute}
            onClickGameRoute={this.onClickGameRoute}
            onClickSavedRoute={this.onClickSavedRoute}
          />
          <HomeRightContainer>
            <Switch>
              <Route exact path="/" component={Home} />
            </Switch>
          </HomeRightContainer>
        </HomeLeftAndRightContainer>
      </HomeContainer>
    )
  }
}

export default App
