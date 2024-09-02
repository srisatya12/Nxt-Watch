import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import CommonContext from './ReactContext/NxtContext'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './components/Home'
import Login from './components/Login'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'
import VideoItem from './components/VideoItem'
import NotFound from './components/NotFound'
import './App.css'

class App extends Component {
  state = {darkMode: false, savedVideosList: []}

  changeTheme = () => {
    this.setState(prevState => ({darkMode: !prevState.darkMode}))
  }

  onSaveVideos = videoObject => {
    const {savedVideosList} = this.state
    const isAlreadyInList =
      savedVideosList.filter(eachItem => eachItem.id === videoObject.id)
        .length > 0

    if (isAlreadyInList === false) {
      this.setState(prevState => ({
        savedVideosList: [...prevState.savedVideosList, videoObject],
      }))
    } else {
      this.setState(prevState => ({
        savedVideosList: prevState.savedVideosList.filter(
          eachItem => eachItem.id !== videoObject.id,
        ),
      }))
    }
  }

  render() {
    const {darkMode, savedVideosList} = this.state
    return (
      <CommonContext.Provider
        value={{
          darkMode,
          savedVideosList,
          changeTheme: this.changeTheme,
          onSaveVideos: this.onSaveVideos,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute exact path="/videos/:id" component={VideoItem} />
          <Route exact path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </CommonContext.Provider>
    )
  }
}
export default App
