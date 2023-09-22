import {Link, withRouter} from 'react-router-dom'
import {IconContext} from 'react-icons'

import {FaMoon} from 'react-icons/fa'
import {BsBrightnessHigh} from 'react-icons/bs'
import Popup from 'reactjs-popup'
import Cookies from 'js-cookie'

import {
  HeaderContainer,
  HeaderElementsContainer,
  WebsiteLogo,
  RightSideContainer,
  ProfileIcon,
  ThemeIconButton,
  LogOutBtn,
  LogOutDark,
  PopupContainer,
  ButtonContainer,
  Para,
  CancelButton,
  ConfirmButton,
} from './styledComponent'

const Header = props => {
  const {isDarkTheme, updateTheme, webSiteLogo} = props

  const onClickThemeIcon = () => {
    updateTheme()
  }

  const onClickConfirmBtn = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }

  return (
    <HeaderContainer>
      <HeaderElementsContainer>
        <Link to="/">
          <WebsiteLogo src={webSiteLogo} alt="nxt watch logo" />
        </Link>
        <RightSideContainer>
          <ThemeIconButton data-testid="theme">
            <IconContext.Provider value={{size: 30}}>
              {!isDarkTheme ? (
                <FaMoon onClick={onClickThemeIcon} />
              ) : (
                <IconContext.Provider value={{color: 'white', size: 30}}>
                  <BsBrightnessHigh onClick={onClickThemeIcon} />
                </IconContext.Provider>
              )}
            </IconContext.Provider>
          </ThemeIconButton>
          <ProfileIcon
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png "
            alt="profile"
          />
          <Popup
            modal
            trigger={
              isDarkTheme ? (
                <LogOutDark>Logout</LogOutDark>
              ) : (
                <LogOutBtn>Logout</LogOutBtn>
              )
            }
          >
            {close => (
              <PopupContainer isDarkTheme={isDarkTheme}>
                <Para isDarkTheme={isDarkTheme}>
                  Are you sure,you want to logout?
                </Para>
                <ButtonContainer>
                  <CancelButton
                    isDarkTheme={isDarkTheme}
                    onClick={() => close()}
                  >
                    Cancel
                  </CancelButton>
                  <ConfirmButton
                    isDarkTheme={isDarkTheme}
                    onClick={onClickConfirmBtn}
                  >
                    Confirm
                  </ConfirmButton>
                </ButtonContainer>
              </PopupContainer>
            )}
          </Popup>
        </RightSideContainer>
      </HeaderElementsContainer>
    </HeaderContainer>
  )
}
export default withRouter(Header)
