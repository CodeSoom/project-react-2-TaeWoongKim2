import React from 'react';

import { useHistory } from 'react-router-dom';

export default function FoodPage() {
  const history = useHistory();

  function handleClick() {
    const url = '/';
    history.push(url);
  }

  return (
    <>
      <h1>음식 이름</h1>
      <p>뽑힌 음식 어때?</p>
      <p>뽑힌 음식을 소개하는 글!</p>
      <button type="button" onClick={handleClick}>다시 뽑기</button>
    </>
  );
}
