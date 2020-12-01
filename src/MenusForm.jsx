import React from 'react';

export default function MenusForm({
  menuName,
  onChange,
  onClick,
}) {
  function handleChange(event) {
    const { target: { name, value } } = event;
    onChange({ name, value });
  }

  return (
    <>
      <label htmlFor="search-menu">검색</label>
      <input
        type="text"
        id="search-menu"
        name="menuName"
        value={menuName}
        placeholder="메뉴명"
        onChange={handleChange}
      />
      <button
        type="button"
        onClick={onClick}
      >
        <span role="img" aria-label="search">🔍</span>
      </button>
    </>
  );
}
