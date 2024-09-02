import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import ReactPlayer from 'react-player'
import {formatDistanceToNow} from 'date-fns'
import {BsDot} from 'react-icons/bs'
import {AiOutlineLike} from 'react-icons/ai'
import {BiDislike} from 'react-icons/bi'
import {MdPlaylistAdd} from 'react-icons/md'
import Header from '../Header'
import Sidebar from '../Sidebar'
import CommonContext from '../../ReactContext/NxtContext'

import {
  HomeCont,
  HomeRightCont,
  EmptyViewCont,
  EmptyImg,
  EmptyHeading,
  RetryBtn,
  LoaderCont,
} from '../Home/styledComponents'
import {
  Title,
  VideoDetailCont,
  ChannelImg,
} from '../VideosListItem/styledComponents'
import {TrendingBgCont} from '../Trending/styledComponents'

import {
  ResultCont,
  VideoCont,
  ResponsiveCont,
  DescCont,
  SaveCont,
  BtnCont,
  SocialBtn,
  DescPara,
} from './styledComponents'

const activeApiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  loading: 'LOADING',
  failure: 'FAILURE',
}

class VideoItem extends Component {
  state = {
    videoObject: {},
    apiStatus: activeApiStatusConstants.initial,
    liked: false,
    disliked: false,
    saved: false,
  }

  componentDidMount() {
    this.getVideosObject()
  }

  onSuccessFulResponse = videoObject => {
    this.setState({
      videoObject,
      apiStatus: activeApiStatusConstants.success,
    })
  }

  onFailureResponse = () => {
    this.setState({apiStatus: activeApiStatusConstants.failure})
  }

  getVideosObject = async () => {
    this.setState({apiStatus: activeApiStatusConstants.loading})

    const {match} = this.props
    const {params} = match
    const {id} = params

    const jwtToken = Cookies.get('jwt_token')

    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const url = `https://apis.ccbp.in/videos/${id}`

    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok === true) {
      const formattedVideoObject = {
        id: data.video_details.id,
        title: data.video_details.title,
        videoUrl: data.video_details.video_url,
        thumbnailUrl: data.video_details.thumbnail_url,
        channel: {
          name: data.video_details.channel.name,
          profileImageUrl: data.video_details.channel.profile_image_url,
          subscriberCount: data.video_details.channel.subscriber_count,
        },
        viewCount: data.video_details.view_count,
        publishedAt: data.video_details.published_at,
        description: data.video_details.description,
      }

      this.onSuccessFulResponse(formattedVideoObject)
    } else {
      this.onFailureResponse()
    }
  }

  onAddLike = () => {
    this.setState(prevState => ({liked: !prevState.liked, disliked: false}))
  }

  onAddDislike = () => {
    this.setState(prevState => ({disliked: !prevState.disliked, liked: false}))
  }

  renderSuccessView = () => {
    const {videoObject, liked, disliked, saved} = this.state
    const {title, videoUrl, channel, viewCount, publishedAt, description} =
      videoObject
    const {name, profileImageUrl, subscriberCount} = channel

    const formatedPublishedDate = formatDistanceToNow(new Date(publishedAt))

    return (
      <CommonContext.Consumer>
        {value => {
          const {darkMode, savedVideosList, onSaveVideos} = value

          const isAlreadySaved =
            savedVideosList.filter(eachItem => eachItem.id === videoObject.id)
              .length !== 0

          let isSaved = saved
          if (isAlreadySaved) {
            isSaved = isAlreadySaved
          }

          const onSaveVideo = () => {
            this.setState(
              prevState => ({saved: isAlreadySaved ? false : !prevState.saved}),
              onSaveVideos(videoObject),
            )
          }

          return (
            <ResultCont>
              <VideoCont>
                <ResponsiveCont>
                  <ReactPlayer url={videoUrl} controls width="100%" />
                </ResponsiveCont>
              </VideoCont>
              <DescCont>
                <Title darkMode={darkMode}>{title}</Title>
                <SaveCont>
                  <Title as="p" para darkMode={darkMode}>
                    {viewCount} views <BsDot /> {formatedPublishedDate}
                  </Title>
                  <BtnCont>
                    <SocialBtn
                      type="button"
                      darkMode={darkMode}
                      liked={liked}
                      onClick={this.onAddLike}
                    >
                      <AiOutlineLike />
                      Like
                    </SocialBtn>
                    <SocialBtn
                      type="button"
                      darkMode={darkMode}
                      disliked={disliked}
                      onClick={this.onAddDislike}
                    >
                      <BiDislike />
                      Dislike
                    </SocialBtn>
                    <SocialBtn
                      type="button"
                      darkMode={darkMode}
                      saved={isSaved}
                      onClick={onSaveVideo}
                    >
                      <MdPlaylistAdd />
                      {isSaved ? 'Saved' : 'Save'}
                    </SocialBtn>
                  </BtnCont>
                </SaveCont>
                <VideoDetailCont>
                  <ChannelImg src={profileImageUrl} alt="channel logo" />
                  <div>
                    <Title darkMode={darkMode}>{name}</Title>
                    <Title as="p" para darkMode={darkMode}>
                      {subscriberCount} subscribers
                    </Title>
                  </div>
                </VideoDetailCont>
                <DescPara darkMode={darkMode}>{description}</DescPara>
              </DescCont>
            </ResultCont>
          )
        }}
      </CommonContext.Consumer>
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
            <RetryBtn type="button" onClick={this.getVideosObject}>
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
            <TrendingBgCont data-testid="videoItemDetails" darkMode={darkMode}>
              <Header />
              <HomeCont>
                <Sidebar />
                <HomeRightCont>{activeStatusView()}</HomeRightCont>
              </HomeCont>
            </TrendingBgCont>
          )
        }}
      </CommonContext.Consumer>
    )
  }
}

export default VideoItem