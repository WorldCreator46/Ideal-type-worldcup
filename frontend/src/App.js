import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styles from './App.module.css';
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
    <div className={styles.MainPage}>
      <Header />
      <Body mainData={mainData} />
    </div>
  );
}

export default App;
