import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Library from './pages/Library';
import Profile from './pages/Profile';
import BookDetail from './pages/BookDetail';
import { PATH } from './constants/path';
import Layout from './components/layout/Layout';

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path={PATH.HOME} element={<Home />} />
        <Route path={PATH.LIBRARY} element={<Library />} />
        <Route path={PATH.PROFILE} element={<Profile />} />
        <Route path={PATH.BOOK_DETAIL} element={<BookDetail />} />
      </Routes>
    </Layout>
  );
};

export default App;
