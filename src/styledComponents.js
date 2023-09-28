import styled, {createGlobalStyle} from 'styled-components'
import {Link} from 'react-router-dom'

export const GlobalStyle = createGlobalStyle`
    list-style-type:none;
    text-decoration:none;

`

export const HomeContainer = styled.div`
  background-color: ${props => props.color};
  height: 100vh;
  color: ${props => (props.isDarkTheme ? '#ffffff' : 'black')};
`

export const HomeLeftContainer = styled.ul`
  display: flex;
  flex-direction: column;

  width: 15%;
`
export const TabsListItem = styled.li`
  list-style-type: none;

  text-decoration: none;
  background-color: ${props => (props.isClicked ? '#cccccc' : '')};
`

export const TabsContainer = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;
  border: 2px solid black;
  height: 50px;
  cursor: pointer;
  outline: none;
  border: none;
  background-color: transparent;
  /*color: ${props => (props.isDarkTheme ? '#ffffff' : 'black')};*/
`

export const Para = styled.p`
  font-family: 'Roboto';
  margin-left: 20px;
  font-size: 18px;
`

export const LinkItem = styled(Link)`
  list-style-type: none;
  text-decoration: none;
`

export const HomeLeftAndRightContainer = styled.div`
  display: flex;
  flex-direction: row;
`
export const HomeRightContainer = styled.div`
  border: 2px solid red;
  margin-left: 20px;
  display: flex;
  width: 100%;
  height: 100vh;
  flex-direction: column;
  justify-content: space-between;
`
