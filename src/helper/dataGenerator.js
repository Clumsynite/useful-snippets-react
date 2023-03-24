/* eslint-disable implicit-arrow-linebreak */
export const generateCardData = (length = 10) =>
  Array.from({ length }, (_, index) => ({
    id: index + 1,
    label: `Card ${index + 1}`,
    description: `Description for Card ${index + 1}`,
  }));

const getRandomIndexes = (length = 10, arr = []) => {
  const randomInt = Math.floor(Math.random() * 100);
  if (arr.length === length) return arr;
  if (arr.includes(randomInt) && arr.length < length) return getRandomIndexes(length, arr);
  return getRandomIndexes(length, [...arr, randomInt]);
};

export const getRandomCardData = (length = 10) =>
  getRandomIndexes(length).map((x) => ({
    id: x,
    label: `Card ${x}`,
    description: `Description for Card ${x}`,
  }));
