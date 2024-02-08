import {Switch, Route} from 'react-router-dom'

import {Component} from 'react'

import Login from './components/LoginPage'

import ProtectedRoute from './components/ProtectedRoute'

import Home from './components/HomePage'

import NxtWatchContext from './context/nxtwatchContext'

import './App.css'

class App extends Component {
  state = {isDarkTheme: false}

  changeTheme = () => {
    this.setState(prevState => ({isDarkTheme: !prevState.isDarkTheme}))
  }

  render() {
    const {isDarkTheme} = this.state
    return (
      <NxtWatchContext.Provider
        value={{
          isDarkTheme,
          changeTheme: this.changeTheme,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
        </Switch>
      </NxtWatchContext.Provider>
    )
  }
}
export default App
