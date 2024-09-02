
import CommonContext from '../../ReactContext/NxtContext'

import {RouteLink} from '../Home/styledComponents'
import {GamingListCard, GamingImg, GamingHeading} from './styledComponents'

const GamingListItem = props => {
  const {videoDetails} = props
  const {id, title, thumbnailUrl, viewCount} = videoDetails
  return (
    <CommonContext.Consumer>
      {value => {
        const {darkMode} = value

        return (
          <GamingListCard>
            <RouteLink to={`/videos/${id}`}>
              <GamingImg src={thumbnailUrl} alt="video thumbnail" />
              <GamingHeading as="p" darkMode={darkMode}>
                {title}
              </GamingHeading>
              <GamingHeading as="p" para darkMode={darkMode}>
                {viewCount} Watching
                <br /> Worldwide
              </GamingHeading>
            </RouteLink>
          </GamingListCard>
        )
      }}
    </CommonContext.Consumer>
  )
}

export default GamingListItem
