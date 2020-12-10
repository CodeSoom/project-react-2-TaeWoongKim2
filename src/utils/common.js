export function get(key) {
  return (obj) => obj[key];
}

export function equal(key, value) {
  return (obj) => obj[key] === value;
}

export function isEmpty(array = []) {
  return (array.length === 0);
}

export function getRandomNumber(length = 0) {
  if (!length) return 0;

  const min = 0;
  const max = Math.floor(length) - 1;

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getRandomSomethingPicker(something = []) {
  const totalCount = something.length;
  const index = getRandomNumber(totalCount);
  return something[index];
}
