import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const HeaderElementsContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  margin-top: 15px;
  margin-bottom: 15px;
`

export const WebsiteLogo = styled.img`
  width: 200px;
`

export const RightSideContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 250px;
`

export const ThemeIconButton = styled.button`
  border: none;
  background-color: transparent;
`

export const ProfileIcon = styled.img`
  width: 50px;
  height: 50px;
`
export const LogOutBtn = styled.button`
  border: 1px solid #3b82f6;
  border-radius: 5px;
  padding: 10px;
  color: #3b82f6;
  background-color: transparent;
  font-family: 'Roboto';
  font-weight: bold;
  cursor: pointer;
  outline: none;
`
export const LogOutDark = styled(LogOutBtn)`
  color: #ffffff;
  border: 1px solid #ffffff;
`
export const PopupContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.isDarkTheme ? '#ffffff' : '#313131')};
  border-radius: 8px;
  padding: 20px;
`
export const Para = styled.p`
  font-family: 'Roboto';
  color: ${props => (props.isDarkTheme ? 'black' : '#ffffff')};
  margin-bottom: 15px;
`
export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const CancelButton = styled.button`
  font-family: 'Roboto';
  border: 1px solid ${props => (props.isDarkTheme ? 'black' : '#ffffff')};
  padding: 10px;
  border-radius: 8px;
  color: ${props => (props.isDarkTheme ? 'black' : '#ffffff')};
  background-color: transparent;
  margin-right: 10px;
`

export const ConfirmButton = styled(CancelButton)`
  background-color: #3b82f6;
`
