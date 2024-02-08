import {Component} from 'react'

import {Redirect, Link} from 'react-router-dom'

import Cookies from 'js-cookie'

import {AiFillHome} from 'react-icons/ai'

import {HiFire} from 'react-icons/hi'

import {SiYoutubegaming} from 'react-icons/si'

import {RiPlayListAddFill} from 'react-icons/ri'

import {IoSearchOutline} from 'react-icons/io5'

import Header from '../Header'

import PremiumPlan from '../PremiumPlan'

import NxtWatchContext from '../../context/nxtwatchContext'

import {
  MainContainer,
  Container,
  FirstContainer,
  SecondContainer,
  MenuUnorderedList,
  MenuListItems,
  Icons,
  ContactHeading,
  ContactContainer,
  SocialIcons,
  SocialIconsContainer,
  EachItem,
  VideosContainer,
  Para,
  MenuName,
  SearchContainer,
  Search,
  ButtonElement,
} from './styledComponents'

class Home extends Component {
  state = {
    home: false,
    trending: false,
    gaming: false,
    saved: false,
    premium: true,
  }

  homeClicked = () => {
    this.setState({home: true, trending: false, gaming: false, saved: false})
  }

  trendingClicked = () => {
    this.setState({home: false, trending: true, gaming: false, saved: false})
  }

  gamingClicked = () => {
    this.setState({home: false, trending: false, gaming: true, saved: false})
  }

  savedClicked = () => {
    this.setState({
      home: false,
      trending: false,
      gaming: false,
      saved: true,
    })
  }

  removePremium = () => {
    this.setState({premium: false})
  }

  render() {
    const {home, trending, saved, gaming, premium} = this.state
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkTheme, activeTab} = value
          const backgroundColor = isDarkTheme ? '#606060' : '#e2e8f0'
          const color = isDarkTheme ? '#ffffff' : '#000000'
          return (
            <MainContainer isDarkTheme={isDarkTheme}>
              <Header />
              <Container>
                <FirstContainer isDarkTheme={isDarkTheme}>
                  <MenuUnorderedList>
                    <MenuListItems
                      onClick={this.homeClicked}
                      active={home}
                      backgroundColor={backgroundColor}
                    >
                      <EachItem>
                        <Icons active={home} color={color}>
                          <AiFillHome />
                        </Icons>
                        <MenuName
                          active={home}
                          color={color}
                          isDarkTheme={isDarkTheme}
                        >
                          Home
                        </MenuName>
                      </EachItem>
                    </MenuListItems>
                    <MenuListItems
                      onClick={this.trendingClicked}
                      active={trending}
                      backgroundColor={backgroundColor}
                    >
                      <EachItem>
                        <Icons active={trending} color={color}>
                          <HiFire />
                        </Icons>
                        <MenuName active={trending} color={color}>
                          Trending
                        </MenuName>
                      </EachItem>
                    </MenuListItems>
                    <MenuListItems
                      onClick={this.gamingClicked}
                      active={gaming}
                      backgroundColor={backgroundColor}
                    >
                      <EachItem>
                        <Icons active={gaming} color={color}>
                          <SiYoutubegaming />
                        </Icons>
                        <MenuName active={gaming} color={color}>
                          Gaming
                        </MenuName>
                      </EachItem>
                    </MenuListItems>
                    <MenuListItems
                      onClick={this.savedClicked}
                      active={saved}
                      backgroundColor={backgroundColor}
                    >
                      <EachItem>
                        <Icons active={saved} color={color}>
                          <RiPlayListAddFill />
                        </Icons>
                        <MenuName active={saved} color={color}>
                          Saved Videos
                        </MenuName>
                      </EachItem>
                    </MenuListItems>
                  </MenuUnorderedList>
                  <ContactContainer>
                    <ContactHeading isDarkTheme={isDarkTheme}>
                      CONTACT US
                    </ContactHeading>
                    <SocialIconsContainer>
                      <SocialIcons
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                        alt="facebook logo"
                      />
                      <SocialIcons
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                        alt="twitter logo"
                      />
                      <SocialIcons
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                        alt="linked in logo"
                      />
                    </SocialIconsContainer>
                    <Para isDarkTheme={isDarkTheme}>
                      Enjoy! Now to see your channels and recommendations!
                    </Para>
                  </ContactContainer>
                </FirstContainer>
                <SecondContainer>
                  {premium ? (
                    <PremiumPlan removePremium={this.removePremium} />
                  ) : null}
                  <VideosContainer isDarkTheme={isDarkTheme}>
                    <SearchContainer>
                      <Search
                        type="search"
                        isDarkTheme={isDarkTheme}
                        color={color}
                      />
                      <ButtonElement isDarkTheme={isDarkTheme}>
                        <IoSearchOutline />
                      </ButtonElement>
                    </SearchContainer>
                  </VideosContainer>
                </SecondContainer>
              </Container>
            </MainContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Home
