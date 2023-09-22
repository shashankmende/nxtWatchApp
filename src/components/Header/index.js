import {Link} from 'react-router-dom'
import {IconContext} from 'react-icons'

import {FaMoon} from 'react-icons/fa'
import {BsBrightnessHigh} from 'react-icons/bs'

import {
  HeaderContainer,
  HeaderElementsContainer,
  WebsiteLogo,
  RightSideContainer,
  ProfileIcon,
  ThemeIcon,
  LogOutBtn,
} from './styledComponent'

const Header = props => {
  const {isDarkTheme, updateTheme, webSiteLogo, themeIcon} = props

  const onClickThemeIcon = () => {
    updateTheme()
  }

  return (
    <HeaderContainer>
      <HeaderElementsContainer>
        <Link to="/">
          <WebsiteLogo src={webSiteLogo} alt="nxt watch logo" />
        </Link>
        <RightSideContainer>
          <IconContext.Provider value={{size: 30}}>
            {!isDarkTheme ? (
              <FaMoon onClick={onClickThemeIcon} />
            ) : (
              <IconContext.Provider value={{color: 'white', size: 30}}>
                <BsBrightnessHigh onClick={onClickThemeIcon} />
              </IconContext.Provider>
            )}
          </IconContext.Provider>

          <ProfileIcon
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png "
            alt="profile"
          />
          <LogOutBtn>Logout</LogOutBtn>
        </RightSideContainer>
      </HeaderElementsContainer>
    </HeaderContainer>
  )
}
export default Header
