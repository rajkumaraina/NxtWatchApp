import styled from 'styled-components'

export const NavBar = styled.nav`
  width: 100%;
  display: flex;
  justify-content: center;
  height: 10%;
  align-items: center;
`
export const UnorderedList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0px;
  width: 100%;
  @media (max-width: 576px) {
    padding: 0;
  }
`
export const NavItemContainer = styled.div`
  display: flex;
  align-items: center;
`
export const NavListItem = styled.li`
  list-style-type: none;
  margin: 8px;
  margin-right: 25px;
  @media (max-width: 576px) {
    margin-right: 12px;
  }
`
export const WebsiteLogo = styled.img`
  width: 135px;
  height: 30px;
`
export const IconsButton = styled.button`
  background-color: transparent;
  cursor: pointer;
  outline: none;
  border: 0px none;
`
export const Icons = styled.p`
  font-size: 30px;
  margin-top: 32px;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#000000')};
  @media (max-width: 576px) {
    font-size: 23px;
    margin-top: 28px;
  }
`
export const IconImages = styled.img`
  width: 35px;
  height: 35px;
  @media (max-width: 576px) {
    display: none;
  }
`
export const LogoutButton = styled.button`
  width: 85px;
  height: 35px;
  border: 2px solid ${props => (props.isDarkTheme ? '#ffffff' : '#3b82f6')};
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#3b82f6')};
  border-radius: 3px;
  font-weight: bold;
  outline: none;
  cursor: pointer;
  background-color: transparent;
  @media (max-width: 576px) {
    display: none;
  }
`
export const SmallIconImages = styled.p`
  font-size: 28px;
  display: none;
  @media (max-width: 576px) {
    display: flex;
  }
`
