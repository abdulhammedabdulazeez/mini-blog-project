import './App.css'
import Header from './components/Header'
import PostList from './components/PostList'
import { PostContextProvider } from './store/post-context'


function App() {

  return (
    <PostContextProvider>
      <Header />
      <PostList />
    </PostContextProvider>
  )
}

export default App
