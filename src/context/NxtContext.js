import React from 'react'

const NxtContext = React.createContext({
  isDarkTheme: false,
  activeRoute: 'Home',
  updateTheme: () => {},
  onClickHomeRoute: () => {},
  onClickTrendingRoute: () => {},
  onClickGameRoute: () => {},
  onClickSavedRoute: () => {},
})

export default NxtContext
