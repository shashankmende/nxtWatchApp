import styled, {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    list-style-type:none;
    text-decoration:none;

`

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const HomeContainer = styled.div`
  background-color: ${props => props.color};
  height: 100vh;
`

export const HomeLeftContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const TabsContainer = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;
  width: 20%;

  height: 50px;
  cursor: pointer;
  outline: none;
  border: none;
  background-color: transparent;
`

export const Para = styled.p`
  font-family: 'Roboto';
  margin-left: 20px;
  font-size: 18px;
`
