// 최근 버전에서 변경 된 것을 반영
import { useParams } from 'react-router-dom';

const data = {
  // 테스트 겸 본인의 닉네임으로 적어봄.
  cocoblue: {
    name: '코코블루',
    description: '어디론가 가고 싶은 코코블루',
  },
  gildong: {
    name: '홍길동',
    description: '고전 소설 홍길동전의 주인공',
  },
};

const Profile = () => {
  // 최근 버전에서 변경 된 것을 반영
  const { username } = useParams();
  const profile = data[username];

  if (!profile) {
    return <div>존재하지 않는 사용자입니다.</div>;
  }

  return (
    <div>
      <h3>
        {username}({profile.name})
      </h3>
      <p>{profile.description}</p>
    </div>
  );
};

export default Profile;