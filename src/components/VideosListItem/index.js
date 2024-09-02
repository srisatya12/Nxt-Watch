import {formatDistanceToNow} from 'date-fns'
import {BsDot} from 'react-icons/bs'
import CommonContext from '../../ReactContext/NxtContext'

import {RouteLink} from '../Home/styledComponents'

import {
  CardCont,
  ThumbnailImg,
  VideoDetailCont,
  ChannelImg,
  Title,
  Span,
  LiCont,
} from './styledComponents'

const VideosListItem = props => {
  const {videoDetails, isTrending} = props
  const {id, title, thumbnailUrl, channel, viewCount, publishedAt} =
    videoDetails
  const {name, profileImageUrl} = channel

  const formatedPublishedDate = formatDistanceToNow(new Date(publishedAt))

  return (
    <CommonContext.Consumer>
      {value => {
        const {darkMode} = value

        return (
          <LiCont isTrending={isTrending}>
            <RouteLink to={`/videos/${id}`}>
              <CardCont isTrending={isTrending}>
                <ThumbnailImg
                  src={thumbnailUrl}
                  alt="video thumbnail"
                  isTrending={isTrending}
                />
                <VideoDetailCont>
                  <ChannelImg
                    src={profileImageUrl}
                    alt="channel logo"
                    isTrending={isTrending}
                  />
                  <div>
                    <Title darkMode={darkMode}>{title}</Title>

                    <Title para isTrending={isTrending}>
                      {name}
                      <br />{' '}
                      <Span isTrending={isTrending}>
                        <BsDot />
                      </Span>{' '}
                      {viewCount} views {<BsDot />} {formatedPublishedDate}
                    </Title>
                  </div>
                </VideoDetailCont>
              </CardCont>
            </RouteLink>
          </LiCont>
        )
      }}
    </CommonContext.Consumer>
  )
}

export default VideosListItem
