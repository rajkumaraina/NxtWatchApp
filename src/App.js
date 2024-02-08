import {Switch, Route} from 'react-router-dom'

import Login from './components/LoginPage'

import ProtectedRoute from './components/ProtectedRoute'

import Home from './components/HomePage'

import './App.css'

// Replace your code here
const App = () => (
  <Switch>
    <Route exact path="/login" component={Login} />
    <ProtectedRoute exact path="/" component={Home} />
  </Switch>
)

export default App
