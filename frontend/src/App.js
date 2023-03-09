import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styles from './App.module.css';
import Body from './Body/Body';
import Foot from './Foot/Foot';
import Header from './Header/Header';

function App() {
  const tempData = [
    {
      id: '1',
      title: '음식 월드컵',
      description: '어떤 음식이 최고인가요?',
      firstPlace: '피자',
      secondPlace: '치킨',
    },
    {
      id: '2',
      title: '여행 월드컵',
      description: '어느 나라로 떠나볼까요?',
      firstPlace: '일본',
      secondPlace: '이탈리아',
    },
    {
      id: '3',
      title: '동물 월드컵',
      description: '가장 귀여운 동물은?',
      firstPlace: '강아지',
      secondPlace: '고양이',
    },
    {
      id: '4',
      title: '음악 월드컵',
      description: '좋아하는 노래는?',
      firstPlace: '봄날 - 방탄소년단',
      secondPlace: 'Love Scenario - iKON',
    },
    {
      id: '5',
      title: '시간 월드컵',
      description: '24시간 중 언제가 가장 좋나요?',
      firstPlace: '저녁',
      secondPlace: '아침',
    },
    {
      id: '6',
      title: '과일 월드컵',
      description: '좋아하는 과일은?',
      firstPlace: '딸기',
      secondPlace: '바나나',
    },
    {
      id: '7',
      title: '패션 월드컵',
      description: '어떤 스타일이 좋나요?',
      firstPlace: '캐주얼',
      secondPlace: '클래식',
    },
    {
      id: '8',
      title: '음료 월드컵',
      description: '즐겨 마시는 음료는?',
      firstPlace: '커피',
      secondPlace: '맥주',
    },
    {
      id: '9',
      title: '컬러 월드컵',
      description: '어떤 색깔이 좋나요?',
      firstPlace: '파란색',
      secondPlace: '노란색',
    },
    {
      id: '10',
      title: '사물 월드컵',
      description: '어떤 사물이 더 좋나요?',
      firstPlace: '핸드폰',
      secondPlace: '컴퓨터',
    },
    {
      id: '11',
      title: '책 월드컵',
      description: '어떤 책을 선호하나요?',
      firstPlace: '소설',
      secondPlace: '자기계발서',
    },
    {
      id: '1',
      title: '음식 월드컵',
      description: '어떤 음식이 최고인가요?',
      firstPlace: '피자',
      secondPlace: '치킨',
    },
    {
      id: '2',
      title: '여행 월드컵',
      description: '어느 나라로 떠나볼까요?',
      firstPlace: '일본',
      secondPlace: '이탈리아',
    },
    {
      id: '3',
      title: '동물 월드컵',
      description: '가장 귀여운 동물은?',
      firstPlace: '강아지',
      secondPlace: '고양이',
    },
    {
      id: '4',
      title: '음악 월드컵',
      description: '좋아하는 노래는?',
      firstPlace: '봄날 - 방탄소년단',
      secondPlace: 'Love Scenario - iKON',
    },
    {
      id: '5',
      title: '시간 월드컵',
      description: '24시간 중 언제가 가장 좋나요?',
      firstPlace: '저녁',
      secondPlace: '아침',
    },
    {
      id: '6',
      title: '과일 월드컵',
      description: '좋아하는 과일은?',
      firstPlace: '딸기',
      secondPlace: '바나나',
    },
    {
      id: '7',
      title: '패션 월드컵',
      description: '어떤 스타일이 좋나요?',
      firstPlace: '캐주얼',
      secondPlace: '클래식',
    },
    {
      id: '8',
      title: '음료 월드컵',
      description: '즐겨 마시는 음료는?',
      firstPlace: '커피',
      secondPlace: '맥주',
    },
    {
      id: '9',
      title: '컬러 월드컵',
      description: '어떤 색깔이 좋나요?',
      firstPlace: '파란색',
      secondPlace: '노란색',
    },
    {
      id: '10',
      title: '사물 월드컵',
      description: '어떤 사물이 더 좋나요?',
      firstPlace: '핸드폰',
      secondPlace: '컴퓨터',
    },
    {
      id: '11',
      title: '책 월드컵',
      description: '어떤 책을 선호하나요?',
      firstPlace: '소설',
      secondPlace: '자기계발서',
    },
    {
      id: '1',
      title: '음식 월드컵',
      description: '어떤 음식이 최고인가요?',
      firstPlace: '피자',
      secondPlace: '치킨',
    },
    {
      id: '2',
      title: '여행 월드컵',
      description: '어느 나라로 떠나볼까요?',
      firstPlace: '일본',
      secondPlace: '이탈리아',
    },
    {
      id: '3',
      title: '동물 월드컵',
      description: '가장 귀여운 동물은?',
      firstPlace: '강아지',
      secondPlace: '고양이',
    },
    {
      id: '4',
      title: '음악 월드컵',
      description: '좋아하는 노래는?',
      firstPlace: '봄날 - 방탄소년단',
      secondPlace: 'Love Scenario - iKON',
    },
    {
      id: '5',
      title: '시간 월드컵',
      description: '24시간 중 언제가 가장 좋나요?',
      firstPlace: '저녁',
      secondPlace: '아침',
    },
    {
      id: '6',
      title: '과일 월드컵',
      description: '좋아하는 과일은?',
      firstPlace: '딸기',
      secondPlace: '바나나',
    },
    {
      id: '7',
      title: '패션 월드컵',
      description: '어떤 스타일이 좋나요?',
      firstPlace: '캐주얼',
      secondPlace: '클래식',
    },
    {
      id: '8',
      title: '음료 월드컵',
      description: '즐겨 마시는 음료는?',
      firstPlace: '커피',
      secondPlace: '맥주',
    },
    {
      id: '9',
      title: '컬러 월드컵',
      description: '어떤 색깔이 좋나요?',
      firstPlace: '파란색',
      secondPlace: '노란색',
    },
    {
      id: '10',
      title: '사물 월드컵',
      description: '어떤 사물이 더 좋나요?',
      firstPlace: '핸드폰',
      secondPlace: '컴퓨터',
    },
    {
      id: '11',
      title: '책 월드컵',
      description: '어떤 책을 선호하나요?',
      firstPlace: '소설',
      secondPlace: '자기계발서',
    },
    {
      id: '1',
      title: '음식 월드컵',
      description: '어떤 음식이 최고인가요?',
      firstPlace: '피자',
      secondPlace: '치킨',
    },
    {
      id: '2',
      title: '여행 월드컵',
      description: '어느 나라로 떠나볼까요?',
      firstPlace: '일본',
      secondPlace: '이탈리아',
    },
    {
      id: '3',
      title: '동물 월드컵',
      description: '가장 귀여운 동물은?',
      firstPlace: '강아지',
      secondPlace: '고양이',
    },
    {
      id: '4',
      title: '음악 월드컵',
      description: '좋아하는 노래는?',
      firstPlace: '봄날 - 방탄소년단',
      secondPlace: 'Love Scenario - iKON',
    },
    {
      id: '5',
      title: '시간 월드컵',
      description: '24시간 중 언제가 가장 좋나요?',
      firstPlace: '저녁',
      secondPlace: '아침',
    },
    {
      id: '6',
      title: '과일 월드컵',
      description: '좋아하는 과일은?',
      firstPlace: '딸기',
      secondPlace: '바나나',
    },
    {
      id: '7',
      title: '패션 월드컵',
      description: '어떤 스타일이 좋나요?',
      firstPlace: '캐주얼',
      secondPlace: '클래식',
    },
    {
      id: '8',
      title: '음료 월드컵',
      description: '즐겨 마시는 음료는?',
      firstPlace: '커피',
      secondPlace: '맥주',
    },
    {
      id: '9',
      title: '컬러 월드컵',
      description: '어떤 색깔이 좋나요?',
      firstPlace: '파란색',
      secondPlace: '노란색',
    },
    {
      id: '10',
      title: '사물 월드컵',
      description: '어떤 사물이 더 좋나요?',
      firstPlace: '핸드폰',
      secondPlace: '컴퓨터',
    },
    {
      id: '11',
      title: '책 월드컵',
      description: '어떤 책을 선호하나요?',
      firstPlace: '소설',
      secondPlace: '자기계발서',
    },
  ];
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
    <div className={styles.Body}>
      <Header />
      <Body mainData={mainData} />
      <Foot />
    </div>
  );
}

export default App;
