// Hello is alerted repeatedly after every 3 seconds
//setInterval(expression, time);
// Clear intervals after 6 sec with the timer id

let numOfSeconds = +prompt("Nhập số giây bạn muốn tính");
numOfSeconds = numOfSeconds * 1000;
const timer = (numOfSeconds) => {
  let timerId = setInterval(() => alert("Hết giờ"), numOfSeconds);
  setTimeout(() => {
    clearInterval(timerId);
    alert("Kết thúc rồi");
  }, numOfSeconds);
};

timer(numOfSeconds);
