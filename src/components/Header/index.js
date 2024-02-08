import {FaMoon} from 'react-icons/fa'

import {IoMenu} from 'react-icons/io5'

import {FiLogOut} from 'react-icons/fi'

import {BsBrightnessHigh} from 'react-icons/bs'

import NxtWatchContext from '../../context/nxtwatchContext'

import {
  NavBar,
  UnorderedList,
  NavItemContainer,
  NavListItem,
  Icons,
  IconImages,
  LogoutButton,
  SmallIconImages,
  WebsiteLogo,
  IconsButton,
} from './styledComponents'

const Header = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDarkTheme, changeTheme} = value
      const Theme = () => {
        changeTheme()
      }
      return (
        <NavBar>
          <UnorderedList>
            <NavListItem>
              <WebsiteLogo
                src={
                  isDarkTheme
                    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                }
                alt="websiteLogo"
              />
            </NavListItem>
            <NavItemContainer>
              <NavListItem>
                <IconsButton type="button" onClick={Theme} data-testid="theme">
                  <Icons isDarkTheme={isDarkTheme}>
                    {isDarkTheme ? <BsBrightnessHigh /> : <FaMoon />}
                  </Icons>
                </IconsButton>
              </NavListItem>

              <NavListItem>
                <IconImages
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  alt="profile"
                />
                <SmallIconImages>
                  <IoMenu />
                </SmallIconImages>
              </NavListItem>
              <NavListItem>
                <LogoutButton type="button" isDarkTheme={isDarkTheme}>
                  Logout
                </LogoutButton>
                <SmallIconImages>
                  <FiLogOut />
                </SmallIconImages>
              </NavListItem>
            </NavItemContainer>
          </UnorderedList>
        </NavBar>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default Header