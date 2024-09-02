
import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {MdClose} from 'react-icons/md'
import {FiSearch} from 'react-icons/fi'
import Header from '../Header'
import Sidebar from '../Sidebar'
import CommonContext from '../../ReactContext/NxtContext'
import VideosListItem from '../VideosListItem'
import {
  HomeBgCont,
  HomeCont,
  HomeRightCont,
  BannerCont,
  CloseCont,
  CloseBannerBtn,
  Paragraph,
  GetPremiumBtn,
  SearchCont,
  SearchInput,
  SearchBtn,
  HomeResultCont,
  UlHomeCont,
  EmptyViewCont,
  EmptyImg,
  EmptyHeading,
  RetryBtn,
  LoaderCont,
} from './styledComponents'
import {NavWebLogo} from '../Header/styledComponents'

const activeApiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  loading: 'LOADING',
  empty: 'EMPTY',
  failure: 'FAILURE',
}

class Home extends Component {
  state = {
    isBannerHidden: false,
    videosList: [],
    apiStatus: activeApiStatusConstants.initial,
    searchInput: '',
  }

  componentDidMount() {
    this.getVideosList()
  }

  onSuccessFulResponse = videosList => {
    if (videosList.length > 0) {
      this.setState({videosList, apiStatus: activeApiStatusConstants.success})
    } else {
      this.setState({apiStatus: activeApiStatusConstants.empty})
    }
  }

  onFailureResponse = () => {
    this.setState({apiStatus: activeApiStatusConstants.failure})
  }

  getVideosList = async () => {
    this.setState({apiStatus: activeApiStatusConstants.loading})

    const {searchInput} = this.state

    const jwtToken = Cookies.get('jwt_token')

    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const url = `https://apis.ccbp.in/videos/all?search=${searchInput}`

    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok === true) {
      const formattedVideosList = data.videos.map(eachItem => ({
        id: eachItem.id,
        title: eachItem.title,
        thumbnailUrl: eachItem.thumbnail_url,
        channel: {
          name: eachItem.channel.name,
          profileImageUrl: eachItem.channel.profile_image_url,
        },
        viewCount: eachItem.view_count,
        publishedAt: eachItem.published_at,
      }))

      this.onSuccessFulResponse(formattedVideosList)
    } else {
      this.onFailureResponse()
    }
  }

  onHideBanner = () => {
    this.setState({isBannerHidden: true})
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onSearchVideos = () => {
    this.getVideosList()
  }

  renderSuccessView = () => {
    const {videosList} = this.state
    return (
      <>
        {videosList.map(eachItem => (
          <VideosListItem videoDetails={eachItem} key={eachItem.id} />
        ))}
      </>
    )
  }

  renderLoadingView = () => (
    <LoaderCont className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#4f46e5" height="50" width="50" />
    </LoaderCont>
  )

  renderEmptyView = () => (
    <CommonContext.Consumer>
      {value => {
        const {darkMode} = value

        return (
          <EmptyViewCont>
            <EmptyImg
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no videos"
            />
            <EmptyHeading darkMode={darkMode}>
              No Search results found
            </EmptyHeading>
            <EmptyHeading as="p" para darkMode={darkMode}>
              Try different key words or remove search filter
            </EmptyHeading>
            <RetryBtn type="button" onClick={this.getVideosList}>
              Retry
            </RetryBtn>
          </EmptyViewCont>
        )
      }}
    </CommonContext.Consumer>
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
            <RetryBtn type="button" onClick={this.getVideosList}>
              Retry
            </RetryBtn>
          </EmptyViewCont>
        )
      }}
    </CommonContext.Consumer>
  )

  render() {
    const {isBannerHidden, apiStatus} = this.state

    const activeStatusView = () => {
      switch (apiStatus) {
        case activeApiStatusConstants.success:
          return this.renderSuccessView()
        case activeApiStatusConstants.loading:
          return this.renderLoadingView()
        case activeApiStatusConstants.empty:
          return this.renderEmptyView()
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
            <HomeBgCont data-testid="home" darkMode={darkMode}>
              <Header />
              <HomeCont>
                <Sidebar />
                <HomeRightCont>
                  {isBannerHidden === false && (
                    <BannerCont data-testid="banner">
                      <CloseCont>
                        <NavWebLogo
                          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                          alt="nxt watch logo"
                        />
                        <CloseBannerBtn
                          data-testid="close"
                          type="button"
                          darkMode={darkMode}
                          onClick={this.onHideBanner}
                        >
                          <MdClose />
                        </CloseBannerBtn>
                      </CloseCont>
                      <Paragraph>
                        Buy Nxt Watch Premium prepaid plans with UPI
                      </Paragraph>
                      <GetPremiumBtn type="button">GET IT NOW</GetPremiumBtn>
                    </BannerCont>
                  )}
                  <HomeResultCont>
                    <SearchCont darkMode={darkMode}>
                      <SearchInput
                        type="search"
                        darkMode={darkMode}
                        placeholder="Search"
                        onChange={this.onChangeSearchInput}
                      />
                      <SearchBtn
                        data-testid="searchButton"
                        type="button"
                        darkMode={darkMode}
                        onClick={this.onSearchVideos}
                      >
                        <FiSearch />
                      </SearchBtn>
                    </SearchCont>
                    <UlHomeCont>{activeStatusView()}</UlHomeCont>
                  </HomeResultCont>
                </HomeRightCont>
              </HomeCont>
            </HomeBgCont>
          )
        }}
      </CommonContext.Consumer>
    )
  }
}

export default Home
