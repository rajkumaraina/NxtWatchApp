import {Switch, Route} from 'react-router-dom'

import {Component} from 'react'

import Login from './components/LoginPage'

import ProtectedRoute from './components/ProtectedRoute'

import Home from './components/HomePage'

import Video from './components/Video'

import Trending from './components/Trending'

import Gaming from './components/Gaming'

import NxtWatchContext from './context/nxtwatchContext'

import './App.css'

class App extends Component {
  state = {
    isDarkTheme: false,
    home: true,
    trending: false,
    gaming: false,
    saved: false,
    activeTab: 'Home',
  }

  changeActiveTab = id => {
    this.setState({activeTab: id}, this.MenuClicked)
  }

  MenuClicked = () => {
    const {activeTab} = this.state
    if (activeTab === 'Home') {
      this.setState({home: true, trending: false, gaming: false, saved: false})
    } else if (activeTab === 'Trending') {
      this.setState({home: false, trending: true, gaming: false, saved: false})
    } else if (activeTab === 'Gaming') {
      this.setState({home: false, trending: false, gaming: true, saved: false})
    } else if (activeTab === 'Saving') {
      this.setState({
        home: false,
        trending: false,
        gaming: false,
        saved: true,
      })
    }
  }

  changeTheme = () => {
    this.setState(prevState => ({isDarkTheme: !prevState.isDarkTheme}))
  }

  render() {
    const {isDarkTheme, home, trending, saved, gaming, activeTab} = this.state
    return (
      <NxtWatchContext.Provider
        value={{
          isDarkTheme,
          home,
          trending,
          saved,
          activeTab,
          gaming,
          changeTheme: this.changeTheme,
          MenuClicked: this.MenuClicked,
          changeActiveTab: this.changeActiveTab,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/videos/:id" component={Video} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
        </Switch>
      </NxtWatchContext.Provider>
    )
  }
}
export default App
