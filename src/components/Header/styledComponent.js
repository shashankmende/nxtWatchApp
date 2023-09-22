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

export const ThemeIcon = styled.div`
  height: 150px;
  border: 2px solid red;
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
