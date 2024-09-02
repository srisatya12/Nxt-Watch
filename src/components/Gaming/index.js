
import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {SiYoutubegaming} from 'react-icons/si'
import Header from '../Header'
import Sidebar from '../Sidebar'
import CommonContext from '../../ReactContext/NxtContext'
import GamingListItem from '../GamingListItem'
import {
  HomeCont,
  HomeRightCont,
  HomeResultCont,
  EmptyViewCont,
  EmptyImg,
  EmptyHeading,
  RetryBtn,
  LoaderCont,
} from '../Home/styledComponents'
import {
  TrendingLogoCont,
  TrendingImgCont,
  TrendingBgCont,
} from '../Trending/styledComponents'
import {GamingUlCont} from './styledComponents'

const activeApiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  loading: 'LOADING',
  failure: 'FAILURE',
}

class Gaming extends Component {
  state = {
    gamingVideosList: [],
    apiStatus: activeApiStatusConstants.initial,
  }

  componentDidMount() {
    this.getGamingVideosList()
  }

  onSuccessFulResponse = gamingVideosList => {
    this.setState({
      gamingVideosList,
      apiStatus: activeApiStatusConstants.success,
    })
  }

  onFailureResponse = () => {
    this.setState({apiStatus: activeApiStatusConstants.failure})
  }

  getGamingVideosList = async () => {
    this.setState({apiStatus: activeApiStatusConstants.loading})

    const jwtToken = Cookies.get('jwt_token')

    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const url = 'https://apis.ccbp.in/videos/gaming'

    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok === true) {
      const formattedVideosList = data.videos.map(eachItem => ({
        id: eachItem.id,
        title: eachItem.title,
        thumbnailUrl: eachItem.thumbnail_url,
        viewCount: eachItem.view_count,
      }))

      this.onSuccessFulResponse(formattedVideosList)
    } else {
      this.onFailureResponse()
    }
  }

  renderSuccessView = () => {
    const {gamingVideosList} = this.state
    return (
      <>
        {gamingVideosList.map(eachItem => (
          <GamingListItem videoDetails={eachItem} key={eachItem.id} />
        ))}
      </>
    )
  }

  renderLoadingView = () => (
    <LoaderCont className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#4f46e5" height="50" width="50" />
    </LoaderCont>
  )

  renderFailureView = () => (
    <CommonContext.Consumer>
      {value => {
        const {darkMode} = value

        const failureSrc = darkMode
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'

        return (
          <EmptyViewCont>
            <EmptyImg src={failureSrc} alt="failure view" />
            <EmptyHeading darkMode={darkMode}>
              Oops! Something Went Wrong
            </EmptyHeading>
            <EmptyHeading as="p" para darkMode={darkMode}>
              We are having some trouble to complete your request. Please try
              again.
            </EmptyHeading>
            <RetryBtn type="button" onClick={this.getGamingVideosList}>
              Retry
            </RetryBtn>
          </EmptyViewCont>
        )
      }}
    </CommonContext.Consumer>
  )

  render() {
    const {apiStatus} = this.state

    const activeStatusView = () => {
      switch (apiStatus) {
        case activeApiStatusConstants.success:
          return this.renderSuccessView()
        case activeApiStatusConstants.loading:
          return this.renderLoadingView()
        case activeApiStatusConstants.failure:
          return this.renderFailureView()
        default:
          return null
      }
    }

    return (
      <CommonContext.Consumer>
        {value => {
          const {darkMode} = value

          return (
            <TrendingBgCont data-testid="gaming" darkMode={darkMode}>
              <Header />
              <HomeCont>
                <Sidebar />
                <HomeRightCont>
                  {apiStatus === activeApiStatusConstants.success && (
                    <TrendingLogoCont data-testid="banner" darkMode={darkMode}>
                      <TrendingImgCont darkMode={darkMode}>
                        <SiYoutubegaming />
                      </TrendingImgCont>
                      <EmptyHeading darkMode={darkMode}>Gaming</EmptyHeading>
                    </TrendingLogoCont>
                  )}
                  <HomeResultCont>
                    <GamingUlCont>{activeStatusView()}</GamingUlCont>
                  </HomeResultCont>
                </HomeRightCont>
              </HomeCont>
            </TrendingBgCont>
          )
        }}
      </CommonContext.Consumer>
    )
  }
}

export default Gaming
