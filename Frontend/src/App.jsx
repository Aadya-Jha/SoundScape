import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import CreateAccountPage from './pages/CreateAccountPage';
import SignInPage from './pages/SignInPage';
import SongsPage from './pages/SongsPage';
import ArtistSongsPage from './pages/ArtistSongsPage';
import SingleSongPage from './pages/SingleSongPage';
import UserProfile from './pages/UserProfile';
import OtherUserProfile from './pages/OtherUserProfile';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/CreateAccountPage" element={<CreateAccountPage />} />
          <Route path="/SignInPage" element={<SignInPage />} />
          <Route path="/SongsPage" element={<SongsPage />} />
          <Route path="/songs/:songname" element={<SingleSongPage />} />
          <Route path="/songs/artist/:artistName" element={<ArtistSongsPage/>} />
          <Route path='/songs/:songname' element={<SingleSongPage />}/>
          <Route path='/users/me' element={<UserProfile />} />
          <Route path='/users/:username' element={<OtherUserProfile />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;