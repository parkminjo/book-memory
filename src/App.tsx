import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Library from './pages/Library';
import Profile from './pages/Profile';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/my-library" element={<Library />} />
      <Route path="/my-profile" element={<Profile />} />
    </Routes>
  );
};

export default App;
