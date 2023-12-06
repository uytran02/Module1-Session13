let result;
const reverseInteger = (a) => {
  if (!Number.isInteger(a)) {
    console.log("Bạn vừa nhập không phải số nguyên");
  } else {
    if (a >= 0) {
      a = a + ""; // đổi thành chuỗi
      result = a.split("").reverse().join("");
    } else {
      a = a + "";
      tempt = a.split("").reverse(); // đổi chuỗi thành mảng và đảo ngược
      //lúc này dấu âm ở cuối [3,0, 1, -]
      minus = tempt.pop();
      addMinus = tempt.unshift(minus);
      result = tempt.join("");
    }
  }
  return result;
};

console.log(reverseInteger(-103));

//đổi số thành chuỗi
// ngoài ra còn rất nhiều cách đổi khác nữa như:
// String constructor  -> str = String (num);
// toString -> str = num.toString ();
// String Literal simple -> str = "" + num;
