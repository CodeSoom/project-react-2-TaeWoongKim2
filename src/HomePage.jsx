import React from 'react';

import { useHistory } from 'react-router-dom';

export default function HomePage() {
  const history = useHistory();

  function handleClick() {
    const url = '/food';
    history.push(url);
  }

  return (
    <>
      <h1>오늘 뭐 먹지?!</h1>
      <p>무엇을 먹을지 고민이라면,</p>
      <p>오늘 한 끼 여기에 맡겨라!</p>
      <button type="button" onClick={handleClick}>메뉴 뽑기</button>
    </>
  );
}
