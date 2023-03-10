import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Body from './Body/Body';
import Header from './Header/Header';
import tempData from './Src';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage mainData={tempData} />} />
      </Routes>
    </Router>
  );
}

function MainPage({ mainData }) {
  return (
    <div className="mainPage">
      <Header />
      <Body mainData={mainData} />
    </div>
  );
}

export default App;
