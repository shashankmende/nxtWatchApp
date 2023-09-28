import styled from 'styled-components'
import Popup from 'reactjs-popup'

export const BannerContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;

  padding: 20px;
`

export const BannerLogo = styled.img`
  width: 150px;
`

export const Para = styled.p`
  font-family: 'Roboto';
`
export const GetItButton = styled.button`
  border: 1px solid;
  font-family: 'Roboto';
  background-color: transparent;
  align-self: flex-start;
  padding: 10px;
`

export const PopupContainer = styled(Popup)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: 2px solid yellow;
`

export const LeftContainer = styled.div``
