const validatePassword = (a) => {
  const regexPass = /.{9,}/g;
  const arrayValidPass = regexPass.exec(a);
  if (arrayValidPass == null) {
    console.log("Đăng nhập lại, mật khẩu phải lớn hơn 8 kí tự");
  } else {
    console.log("Đăng nhập thành công");
  }
};

validatePassword("12lkskkkkkkk");
