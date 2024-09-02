
import {Component} from 'react'
import {withRouter} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {FaFire} from 'react-icons/fa'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'
import CommonContext from '../../ReactContext/NxtContext'
import NavTabItem from '../NavTabItem'
import {
  SidebarCont,
  UlSidebarCont,
  SocialLinkCont,
  Heading,
  LinksCont,
  LinkImg,
} from './styledComponents'

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

class Sidebar extends Component {
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
          const {darkMode} = value

          return (
            <SidebarCont darkMode={darkMode}>
              <UlSidebarCont>
                {navTabsList.map(eachItem => (
                  <NavTabItem
                    navTabDetails={eachItem}
                    activeTabId={activeTabId}
                    key={eachItem.id}
                    sidebar
                  />
                ))}
              </UlSidebarCont>
              <SocialLinkCont>
                <Heading as="p" darkMode={darkMode}>
                  CONTACT US
                </Heading>
                <LinksCont>
                  <LinkImg
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                    alt="facebook logo"
                  />
                  <LinkImg
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                    alt="twitter logo"
                  />
                  <LinkImg
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                    alt="linked in logo"
                  />
                </LinksCont>
                <Heading as="p" para darkMode={darkMode}>
                  Enjoy! Now to see your channels and recommendations!
                </Heading>
              </SocialLinkCont>
            </SidebarCont>
          )
        }}
      </CommonContext.Consumer>
    )
  }
}
export default withRouter(Sidebar)
