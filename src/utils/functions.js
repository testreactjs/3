export const toTitle = text => {
  return text.charAt(0).toUpperCase() + text.substr(1).toLowerCase();
};

export const toDate = dateStr => {
  const dateStrArray = dateStr.split('-');
  return new Date(dateStrArray[2], dateStrArray[1] - 1, dateStrArray[0]);
};
