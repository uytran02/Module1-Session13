const getBiggestNum = (a) => {
  let max = a[0];
  for (let i = 0; i < a.length; i++) {
    if (a[i] > max) {
      max = a[i];
    }
  }
  return max;
};

console.log(getBiggestNum([4, 1, 2, 5, 7]));
