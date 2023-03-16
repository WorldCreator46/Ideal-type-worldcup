import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Body from './Body/Body';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
      <Routes>
        <Route path="/worldcup/" element={<MainPage />} />
      </Routes>
      <Routes>
        <Route path="/rank/" element={<MainPage />} />
      </Routes>
    </Router>
  );
}

function MainPage() {
  return (
    <div className="mainPage">
      <Body />
    </div>
  );
}

export default App;
