import './App.css';
import Header from './components/Header';
import { PostContextProvider } from './store/post-context';
import MainContent from './components/MainContent';

function App() {
  return (
    <PostContextProvider>
      <Header />
      <MainContent />
    </PostContextProvider>
  );
}

export default App;
