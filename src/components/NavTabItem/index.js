
import CommonContext from '../../ReactContext/NxtContext'
import {NavLinkBtn, Span} from './styledComponents'
import {RouteLink} from '../Home/styledComponents'

const NavTabItem = props => (
  <CommonContext.Consumer>
    {value => {
      const {darkMode} = value

      const {navTabDetails, sidebar, activeTabId} = props

      const {id, displayText, icon} = navTabDetails

      const isActive = activeTabId === id
      const activeColor = isActive ? '#ff0000' : ''

      const activeRouteLink = () => {
        switch (id) {
          case 'HOME':
            return '/'
          case 'TRENDING':
            return '/trending'
          case 'GAMING':
            return '/gaming'
          case 'SAVED':
            return '/saved-videos'
          default:
            return ''
        }
      }

      return (
        <RouteLink to={activeRouteLink}>
          <li>
            <NavLinkBtn
              isActive={isActive}
              darkMode={darkMode}
              sidebar={sidebar}
            >
              <Span activeColor={activeColor}>{icon}</Span>
              {displayText}
            </NavLinkBtn>
          </li>
        </RouteLink>
      )
    }}
  </CommonContext.Consumer>
)

export default NavTabItem
