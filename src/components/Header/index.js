import {Component} from 'react'
import {withRouter} from 'react-router-dom'
import Popup from 'reactjs-popup'
import Cookies from 'js-cookie'
import {AiFillHome} from 'react-icons/ai'
import {FaFire, FaMoon} from 'react-icons/fa'
import {SiYoutubegaming} from 'react-icons/si'
import {MdClose, MdPlaylistAdd} from 'react-icons/md'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FiLogOut, FiSun} from 'react-icons/fi'
import CommonContext from '../../ReactContext/NxtContext'
import NavTabItem from '../NavTabItem'

import {
  Navbar,
  NavWebLogo,
  NavCont,
  NavButton,
  LogoutBtn,
  ThemeBtn,
  ProfileImg,
  PopupCont,
  UlPopupCont,
  CloseBtn,
  NavPopupCont,
  PopupLogoutCont,
  PopupLogoutCard,
  BtnCont,
  PopupLogoutCancelBtn,
  PopupLogoutConfirmBtn,
  Para,
  PopupContent,
} from './styledComponents'
import {RouteLink} from '../Home/styledComponents'

const IconComponent1 = () => <AiFillHome />

const IconComponent2 = () => <FaFire />

const IconComponent3 = () => <SiYoutubegaming />

const IconComponent4 = () => <MdPlaylistAdd />

const navTabsList = [
  {
    id: 'HOME',
    displayText: 'Home',
    icon: <IconComponent1 />,
  },
  {
    id: 'TRENDING',
    displayText: 'Trending',
    icon: <IconComponent2 />,
  },
  {
    id: 'GAMING',
    displayText: 'Gaming',
    icon: <IconComponent3 />,
  },
  {
    id: 'SAVED',
    displayText: 'Saved videos',
    icon: <IconComponent4 />,
  },
]

class Header extends Component {
  state = {activeTabId: navTabsList[0].id}

  componentDidMount() {
    const {match} = this.props
    const {path} = match

    const activeRouteLink = () => {
      switch (path) {
        case '/':
          return 'HOME'
        case '/trending':
          return 'TRENDING'
        case '/gaming':
          return 'GAMING'
        case '/saved-videos':
          return 'SAVED'
        default:
          return ''
      }
    }
    const activeTabId = activeRouteLink()
    this.setState({activeTabId})
  }

  render() {
    const {activeTabId} = this.state

    return (
      <CommonContext.Consumer>
        {value => {
          const {darkMode, changeTheme} = value

          const logoSrc = darkMode
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

          const onLogout = () => {
            const {history} = this.props
            Cookies.remove('jwt_token')
            history.replace('/login')
          }

          return (
            <Navbar darkMode={darkMode}>
              <RouteLink to="/">
                <NavWebLogo src={logoSrc} alt="website logo" />
              </RouteLink>
              <NavCont>
                <li>
                  <ThemeBtn
                    data-testid="theme"
                    type="button"
                    darkMode={darkMode}
                    onClick={changeTheme}
                  >
                    {darkMode ? <FiSun /> : <FaMoon />}
                  </ThemeBtn>
                </li>
                <li>
                  <Popup
                    modal
                    trigger={
                      <NavButton type="button" darkMode={darkMode}>
                        <GiHamburgerMenu />
                      </NavButton>
                    }
                  >
                    {close => (
                      <NavPopupCont darkMode={darkMode}>
                        <CloseBtn
                          type="button"
                          darkMode={darkMode}
                          onClick={() => close()}
                        >
                          <MdClose />
                        </CloseBtn>
                        <PopupContent>
                          <PopupCont>
                            <UlPopupCont>
                              {navTabsList.map(eachItem => (
                                <NavTabItem
                                  navTabDetails={eachItem}
                                  activeTabId={activeTabId}
                                  key={eachItem.id}
                                />
                              ))}
                            </UlPopupCont>
                          </PopupCont>
                        </PopupContent>
                      </NavPopupCont>
                    )}
                  </Popup>

                  <ProfileImg
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                    alt="profile"
                  />
                </li>

                <li>
                  <Popup
                    modal
                    trigger={
                      <div>
                        <NavButton type="button" darkMode={darkMode}>
                          <FiLogOut />
                        </NavButton>
                        <LogoutBtn type="button" darkMode={darkMode}>
                          Logout
                        </LogoutBtn>
                      </div>
                    }
                  >
                    {close => (
                      <PopupContent>
                        <PopupLogoutCont>
                          <PopupLogoutCard darkMode={darkMode}>
                            <Para darkMode={darkMode}>
                              Are you sure, you want to logout?
                            </Para>
                            <BtnCont>
                              <PopupLogoutCancelBtn
                                type="button"
                                onClick={() => close()}
                              >
                                Cancel
                              </PopupLogoutCancelBtn>
                              <PopupLogoutConfirmBtn
                                type="button"
                                onClick={onLogout}
                              >
                                Confirm
                              </PopupLogoutConfirmBtn>
                            </BtnCont>
                          </PopupLogoutCard>
                        </PopupLogoutCont>
                      </PopupContent>
                    )}
                  </Popup>
                </li>
              </NavCont>
            </Navbar>
          )
        }}
      </CommonContext.Consumer>
    )
  }
}
export default withRouter(Header)