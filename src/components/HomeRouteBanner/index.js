import {Component} from 'react'
import Popup from 'reactjs-popup'
import {AiOutlineClose} from 'react-icons/ai'
import {
  BannerContainer,
  BannerLogo,
  GetItButton,
  Para,
  PopupContainer,
  LeftContainer,
} from './styledComponents'

class HomeRouteBanner extends Component {
  state = {toDisplayBanner: true}

  onClickClose = () => {
    this.setState({
      toDisplayBanner: false,
    })
  }

  render() {
    const {toDisplayBanner} = this.state
    return (
      toDisplayBanner && (
        <BannerContainer>
          <LeftContainer>
            <BannerLogo
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
              alt="nxt watch logo"
            />
            <Para>Buy Nxt Watch Premium prepaid plans with UPI</Para>
            <GetItButton>GET IT NOW</GetItButton>
          </LeftContainer>
          <AiOutlineClose onClick={this.onClickClose} />
        </BannerContainer>
      )
    )
  }
}
export default HomeRouteBanner
