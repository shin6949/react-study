import { Link, Route, Routes } from 'react-router-dom';
import Profile from './Profile';

const Profiles = () => {
  return (
    <div>
      <h3>사용자 목록</h3>
      <ul>
        <li>
          <Link to="/profiles/cocoblue">COCOBLUE</Link>
        </li>
        <li>
          <Link to="/profiles/gildong">glidong</Link>
        </li>
      </ul>
      {/* 책과 다른 부분 */}
      <Routes>
        <Route path="/" element="유저를 선택해주세요" />
        <Route path=":username" element={<Profile />} />
      </Routes>
    </div>
  );
};

export default Profiles;
