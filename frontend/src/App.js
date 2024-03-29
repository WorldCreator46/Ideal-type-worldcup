import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';

import Body from './Body/Body';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/search/:keyword" element={<MainPage />} />
        <Route path="/worldcup/:id" element={<MainPage />} />
        <Route path="/rank/:id" element={<MainPage />} />
      </Routes>
    </Router>
  );
}

function MainPage() {
  const { keyword } = useParams();
  const [sortBy, setSortBy] = useState('인기순');
  const [period, setPeriod] = useState('전체');
  const [imageVideo, setImageVideo] = useState('전체');
  return (
    <div className="mainPage">
      <Body
        keyword={keyword}
        sortBy={sortBy}
        setSortBy={setSortBy}
        period={period}
        setPeriod={setPeriod}
        imageVideo={imageVideo}
        setImageVideo={setImageVideo}
      />
    </div>
  );
}

export default App;
