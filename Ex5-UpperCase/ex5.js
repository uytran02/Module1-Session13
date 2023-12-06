const convertUppercase = (a, b) => {
  // a là chuỗi, b là chữ cái cần uppercase
  let array = a.split("");
  for (let i = 0; i < array.length; i++) {
    if (b == array[i]) {
      array[i] = array[i].toUpperCase();
    }
  }
  array.join("");
  return array;
};
console.log(convertUppercase("Saori Kimura", "i"));
