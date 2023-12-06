const filter = (a, b) => {
  let result = [];
  for (let i = 0; i < a.length; i++) {
    if (a[i] != b) {
      result.push(a[i]);
    }
  }
  return result;
};
console.log(filter([1, 2, 3, 4], 2));
