const findIndex = (a, b) => {
  for (let i = 0; i < a.length; i++) {
    if (a[i] == b) {
      return i;
    }
  }
  return -1;
};
console.log(findIndex([1, 2, 3], 0));
