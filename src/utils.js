export function get(key) {
  return (obj) => obj[key];
}

export function equal(key, value) {
  return (obj) => obj[key] === value;
}

export function getRandomNumber(length = 0) {
  if (!length) return 0;

  const min = 1;
  const max = Math.floor(length);

  return Math.floor(Math.random() * (max - min + 1)) + min;
}
