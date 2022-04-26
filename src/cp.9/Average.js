import React, { useMemo, useState } from 'react';

const getAverage = numbers => {
  console.log('평균값 계산 중');
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState('');

  const onChange = e => {
    setNumber(e.target.value);
  };

  /* 책 코드에서 추가: Enter 키를 누르면 Action이 진행되도록 */
  const onKeyPress = e => {
    if (e.key === 'Enter') {
      onInsert();
    }
  };

  const onInsert = () => {
    // 책 코드에서 추가: 아무 것도 입력하지 않았을 경우, 반응이 없도록 설정
    if (number === '') return;

    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber('');
  };

  const avg = useMemo(() => getAverage(list), [list]);

  return (
    <div>
      {/* 책 코드에서 추가: Enter 키를 누르면 Action이 진행되도록 */}
      <input value={number} onKeyPress={onKeyPress} onChange={onChange} />
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        <b>평균 값:</b> {avg}
      </div>
    </div>
  );
};

export default Average;