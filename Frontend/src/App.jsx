import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import CreateAccountPage from './pages/CreateAccountPage';
import SignInPage from './pages/SignInPage';
import SongsPage from './pages/SongsPage';
import ArtistSongsPage from './pages/ArtistSongsPage';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/CreateAccountPage" element={<CreateAccountPage />} />
          <Route path="/SignInPage" element={<SignInPage />} />
          <Route path="/SongsPage" element={<SongsPage />} />
          <Route path="/songs/artist/:artistName" element={<ArtistSongsPage/>} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;