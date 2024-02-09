import React from 'react'

const NxtWatchContext = React.createContext({
  isDarkTheme: false,
  home: false,
  trending: false,
  activeTab: 'home',
  gaming: false,
  saved: false,
  MenuClicked: () => {},
  changeTheme: () => {},
})

export default NxtWatchContext
