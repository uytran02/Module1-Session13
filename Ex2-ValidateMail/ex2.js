//Như đã đề cập đến trước đó, một email phải có tên người dùng, tiếp đến là ký hiệu “@”, cuối cùng là tên miền.
// Tên người dùng không thể dài hơn 64 ký tự và tên miền không thể dài hơn 254 ký tự.
// Một địa chỉ email chỉ được phép chứa một ký tự “@”.
// Một địa chỉ mail hợp lệ không được chứa dấu cách, không được chứa các ký tự đặc biệt.
//giải thích: https://regexr.com/3e48o
// ^ và $ là bắt đầu và kết thúc
// w: thay thế cho a-zA-Z0-9
// -: nhận dấu -
// \.: nhận dấu.
//[abc]: hoặc a hoặc b hoặc c
const validateEmail = (a) => {
  var regexEmail = /^([\w-\.]){1,64 }+@([\w-]+\.)+[\w-]{2,4}$/g;
  var emailCheckArray = regexEmail.exec(a);
  console.log(emailCheckArray);
  if (emailCheckArray == null) {
    console.log("Email không hợp lệ");
  }
};

validateEmail("uytran02@gmail.com");
// /pattern/flags

// Trong đó:

// pattern là chuỗi Regular Expression
// flags là thông số cấu hình cho chuỗi pattern và nó có các giá trị:
// i : so khớp không quan tâm đến chữ hoa chữ thường
// g : so khớp toàn bộ chuỗi cần tìm
// m : so khớp luôn cả các dữ liệu xuống dòng (multiline)
