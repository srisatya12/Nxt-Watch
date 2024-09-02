
import styled from 'styled-components'

// {Navbar,NavWebLogo,NavCont,NavButton,LogoutBtn,ThemeBtn,
// ProfileImg,ProfileBtn,PopupCont,UlPopupCont,CloseBtn,NavLinkBtn,NavPopupCont,
//  PopupLogoutCont,PopupLogoutCard,BtnCont,PopupLogoutCancelBtn,PopupLogoutConfirmBtn,Para}

export const Navbar = styled.nav`
  background-color: ${props => (props.darkMode ? '#231f20' : '#ffffff')};
  padding: 5px;
  padding-left: 15px;
  padding-right: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (min-width: 768px) {
    padding-left: 50px;
    padding-right: 50px;
  }
`
export const NavWebLogo = styled.img`
  width: 100px;
  @media screen and (min-width: 768px) {
    width: 130px;
  }
`
export const NavCont = styled.ul`
  list-style-type: none;
  padding-left: 0px;
  display: flex;
  align-items: center;
  gap: 10px;
  @media screen and (min-width: 768px) {
    // gap: 30px;
  }
`
export const NavButton = styled.button`
  background: transparent;
  border: 0px;
  outline: none;
  cursor: pointer;
  font-size: 25px;
  @media screen and (min-width: 768px) {
    display: none;
  }
  color: ${props => (props.darkMode ? '#f9f9f9' : '#181818')};
`
export const ThemeBtn = styled(NavButton)`
  display: block;
  color: ${props => (props.darkMode ? '#f9f9f9' : '#181818')};
  @media screen and (min-width: 768px) {
    margin-top: 8px;
  }
`
export const ProfileBtn = styled(NavButton)`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
  }
`
export const LogoutBtn = styled.button`
  background: transparent;
  border: 1px solid ${props => (props.darkMode ? '#f9f9f9' : '#3b82f6')};
  outline: none;
  cursor: pointer;
  width: 100px;
  height: 30px;
  border-radius: 2px;
  color: ${props => (props.darkMode ? '#f9f9f9' : '#3b82f6')};
  font-size: 15px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const ProfileImg = styled.img`
  width: 32px;
  margin-right: 25px;
  margin-left: 15px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const NavPopupCont = styled.div`
  background-color: ${props => (props.darkMode ? '#181818' : '#f9f9f9')};
  padding-top: 30px;
  padding-bottom: 30px;
  display: flex;
  flex-direction: column;
`

export const PopupCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 95vh;
`
export const UlPopupCont = styled.ul`
  list-style-type: none;
  padding-left: 0px;
`
export const CloseBtn = styled(ThemeBtn)`
  align-self: flex-end;
  padding-right: 30px;
  font-size: 35px;
  color: ${props => (props.darkMode ? '#f9f9f9' : '#181818')};
`
export const PopupLogoutCont = styled.div`
  background-color: #0a0a0a5e;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`
export const PopupLogoutCard = styled.div`
  width: 300px;
  padding: 30px;
  padding-top: 20px;
  background-color: ${props => (props.darkMode ? '#181818' : '#ffffff')};
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const BtnCont = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  margin-top: 20px;
`
export const PopupLogoutCancelBtn = styled(LogoutBtn)`
  width: 100px;
  height: 45px;
  display: block;
`
export const PopupLogoutConfirmBtn = styled(LogoutBtn)`
  width: 100px;
  height: 45px;
  background-color: #3b82f6;
  color: #ffffff;
  display: block;
`
export const Para = styled.p`
  color: ${props => (props.darkMode ? '#ffffff' : '#00306e')};
  font-size: 16px;
`
export const PopupContent = styled.div`
  min-height: 100vh;
  width: 100vw;
`
