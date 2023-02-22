export const wrapText = (str = "", length = 12) => (str.length > length ? `${str.slice(0, length)}...` : str);

export const getIntials = (str = "", splitSeparater = " ", joinSeparator = " ") =>
  // eslint-disable-next-line implicit-arrow-linebreak
  str
    .split(splitSeparater)
    .map((x) => x[0].toUpperCase())
    .join(joinSeparator);

export default {
  wrapText,
  getIntials,
};
