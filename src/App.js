import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import { Feed, PostDetail } from './components/pages/Feed';
import Profile from './components/pages/Profile';
import Shop from './components/pages/Shop';
import Leaderboard from './components/pages/Leaderboard';
import MapPage from './components/pages/Map';
import Cart from './components/pages/Cart';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-black text-white">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="/feed" element={<Feed />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/map" element={<MapPage />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/post/:id" element={<PostDetail />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
