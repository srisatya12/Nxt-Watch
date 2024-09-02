import Header from '../Header'
import Sidebar from '../Sidebar'
import CommonContext from '../../ReactContext/NxtContext'
import {
  HomeBgCont,
  HomeCont,
  HomeRightCont,
  EmptyViewCont,
  EmptyImg,
  EmptyHeading,
} from '../Home/styledComponents'

const NotFound = () => {
  const renderNotFoundView = () => (
    <CommonContext.Consumer>
      {value => {
        const {darkMode} = value

        const NotFoundSrc = darkMode
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'

        return (
          <EmptyViewCont>
            <EmptyImg src={NotFoundSrc} alt="not found" />
            <EmptyHeading darkMode={darkMode}>Page Not Found</EmptyHeading>
            <EmptyHeading as="p" para darkMode={darkMode}>
              we are sorry, the page you requested could not be found.
            </EmptyHeading>
          </EmptyViewCont>
        )
      }}
    </CommonContext.Consumer>
  )

  return (
    <CommonContext.Consumer>
      {value => {
        const {darkMode} = value

        return (
          <HomeBgCont darkMode={darkMode}>
            <Header />
            <HomeCont>
              <Sidebar />
              <HomeRightCont>{renderNotFoundView()}</HomeRightCont>
            </HomeCont>
          </HomeBgCont>
        )
      }}
    </CommonContext.Consumer>
  )
}

export default NotFound