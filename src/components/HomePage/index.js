import {Component} from 'react'

import {NavBar, UnorderedList} from './styledComponents'

class Home extends Component {
  state = {}

  render() {
    return (
      <NavBar>
        <UnorderedList>
          <p>Hii</p>
          <p>Heelo</p>
        </UnorderedList>
      </NavBar>
    )
  }
}

export default Home
