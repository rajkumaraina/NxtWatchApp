import React from 'react'

const NxtWatchContext = React.createContext({
  isDarkTheme: false,
  changeTheme: () => {},
  activeTab: 'HOME',
})

export default NxtWatchContext
