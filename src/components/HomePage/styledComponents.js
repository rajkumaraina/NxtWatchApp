import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#ffffff')};
  height: 100vh;
`
export const Container = styled.div`
  display: flex;
  height: 90%;
`
export const FirstContainer = styled.div`
  width: 25%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${props => (props.isDarkTheme ? '#333333' : '#ffffff')};
`
export const SecondContainer = styled.div`
  width: 75%;
`
export const MenuUnorderedList = styled.ul`
  padding: 0px;
  display: flex;
  flex-direction: column;
`
export const MenuListItems = styled.li`
  list-style-type: none;
  padding: 6px;
  background-color: ${props =>
    props.active ? props.backgroundColor : 'transparent'};
  padding-left: 15px;
  cursor: pointer;
`
export const EachItem = styled.div`
  display: flex;
  background-color: transparent;
  align-items: center;
`
export const Icons = styled.p`
  font-size: 25px;
  margin: 0px;
  margin-left: 20px;
  color: ${props => (props.active ? '#ff0000' : props.color)};
`
export const MenuName = styled.p`
  font-size: 18px;
  margin: 0px;
  margin-left: 25px;
  margin-bottom: 6px;
  color: ${props => props.color};
  font-weight: ${props => (props.active ? 'bold' : 'light')};
`
export const ContactContainer = styled.div`
  margin-left: 25px;
  width: 60%;
`
export const ContactHeading = styled.h1`
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#000000')};
  font-size: 20px;
`
export const SocialIconsContainer = styled.div`
  display: flex;
`
export const SocialIcons = styled.img`
  width: 35px;
  height: 35px;
  margin: 5px;
`
export const Para = styled.p`
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#000000')};
  font-weight: 500;
  font-size: 17px;
`
export const VideosContainer = styled.div`
  height: 100%;
  background-color: ${props => (props.isDarkTheme ? '#000000' : ' #f1f1f1')};
  padding-top: 30px;
`
export const SearchContainer = styled.div`
  width: 350px;
  background-color: transparent;
  padding: 0px;
  display: flex;
  justify-content: space-between;
  border: 1px solid ${props => (props.isDarkTheme ? '#ffffff' : '#333333')};
  background-color: transparent;
  margin-left: 18px;
`
export const Search = styled.input`
  padding: 8px;
  width: 85%;
  background-color: ${props => (props.isDarkTheme ? '#000000' : '#ffffff')};
  color: ${props => props.color};
  outline: none;
  border: 0 none;
`
export const ButtonElement = styled.button`
  text-align: center;
  border: 0 none;
  width: 15%;
  font-size: 18px;
  background-color: ${props => (props.isDarkTheme ? '#333333' : '#f1f1f1')};
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#333333')};
`
