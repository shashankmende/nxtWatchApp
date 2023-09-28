import {Component} from 'react'

import {AiFillHome, AiOutlineFire} from 'react-icons/ai'

import {IoLogoGameControllerB} from 'react-icons/io'
import {BiAddToQueue} from 'react-icons/bi'
import {IconContext} from 'react-icons'

import {
  HomeLeftContainer,
  TabsContainer,
  Para,
  LinkItem,
  GlobalStyle,
  TabsListItem,
} from './styledComponents'

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

const Tabs = props => {
  const {
    activeRoute,
    isDarkTheme,
    onClickHomeRoute,
    onClickTrendingRoute,
    onClickGameRoute,
    onClickSavedRoute,
    updateTheme,
  } = props

  const onClickTab = () => {
    switch (activeRoute) {
      case 'Home':
        console.log('home tab is clicked')
        return onClickHomeRoute()

      case 'Trending':
        return onClickTrendingRoute()

      case 'Game':
        return onClickGameRoute()

      case 'Saved':
        return onClickSavedRoute()

      default:
        return null
    }
  }

  return (
    <HomeLeftContainer>
      {tabsList.map(each => {
        const isClicked = activeRoute === each.displayText
        return (
          <LinkItem to={each.link}>
            <TabsListItem
              key={each.id}
              isDarkTheme={isDarkTheme}
              isClicked={isClicked}
              onClick={onClickTab}
            >
              <TabsContainer isDarkTheme={isDarkTheme} isClicked={isClicked}>
                <IconContext.Provider
                  value={{
                    color: isClicked ? 'red' : '',
                    size: 25,
                  }}
                >
                  {each.icon}
                </IconContext.Provider>

                <Para>{each.displayText}</Para>
              </TabsContainer>
            </TabsListItem>
          </LinkItem>
        )
      })}
    </HomeLeftContainer>
  )
}

export default Tabs
