
import {FaFire} from 'react-icons/fa'
import Header from '../Header'
import Sidebar from '../Sidebar'
import CommonContext from '../../ReactContext/NxtContext'
import VideosListItem from '../VideosListItem'
import {
  HomeCont,
  HomeRightCont,
  HomeResultCont,
  UlHomeCont,
  EmptyViewCont,
  EmptyImg,
  EmptyHeading,
} from '../Home/styledComponents'

import {
  TrendingLogoCont,
  TrendingImgCont,
  TrendingBgCont,
} from '../Trending/styledComponents'

const SavedVideos = () => {
  const renderNoSavedVideosView = () => (
    <CommonContext.Consumer>
      {value => {
        const {darkMode} = value

        return (
          <EmptyViewCont>
            <EmptyImg
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png "
              alt="no saved videos"
            />
            <EmptyHeading darkMode={darkMode}>
              No saved videos found
            </EmptyHeading>
            <EmptyHeading as="p" para darkMode={darkMode}>
              You can save your videos while watching them
            </EmptyHeading>
          </EmptyViewCont>
        )
      }}
    </CommonContext.Consumer>
  )

  return (
    <CommonContext.Consumer>
      {value => {
        const {darkMode, savedVideosList} = value

        return (
          <TrendingBgCont data-testid="savedVideos" darkMode={darkMode}>
            <Header />
            <HomeCont>
              <Sidebar />
              <HomeRightCont>
                {savedVideosList.length === 0 ? (
                  renderNoSavedVideosView()
                ) : (
                  <>
                    <TrendingLogoCont data-testid="banner" darkMode={darkMode}>
                      <TrendingImgCont darkMode={darkMode}>
                        <FaFire />
                      </TrendingImgCont>
                      <EmptyHeading darkMode={darkMode}>
                        Saved Videos
                      </EmptyHeading>
                    </TrendingLogoCont>

                    <HomeResultCont>
                      <UlHomeCont>
                        {savedVideosList.map(eachItem => (
                          <VideosListItem
                            videoDetails={eachItem}
                            key={eachItem.id}
                            isTrending
                          />
                        ))}
                      </UlHomeCont>
                    </HomeResultCont>
                  </>
                )}
              </HomeRightCont>
            </HomeCont>
          </TrendingBgCont>
        )
      }}
    </CommonContext.Consumer>
  )
}

export default SavedVideos
