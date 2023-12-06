const countCharacters = (a, b) => {
  let newStr = a.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  newStr = newStr.toLowerCase();
  console.log(newStr);
  let array = newStr.split("");
  console.log(array);
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] == b) {
      ++count;
    }
  }
  return count;
};

console.log(countCharacters("Trần Đức Uy", "u"));
