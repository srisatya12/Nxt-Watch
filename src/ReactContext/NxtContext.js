import {createContext} from 'react'

const CommonContext = createContext({
  darkMode: true,
  changeTheme: () => {},
  savedVideosList: [],
  onSaveVideos: () => {},
})

export default CommonContext
