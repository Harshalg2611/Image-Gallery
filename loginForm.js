// let username = document.getElementById("UserName")
// let email = document.getElementById("Email")
// let password = document.getElementById("Password");

let id = (id) => document.getElementById(id);
let getclass = (getclass) => document.getElementsByClassName(getclass);
let username = id("UserName"),
  email = id("Email"),
  form = id("form"),
  password = id("Password"),
  errorMsg = getclass("error")
// errorMsg[0].innerHTML = "Hello What is Your Name"
successIcon = getclass("icon1"),
  checkIcon = getclass("icon2")

form.addEventListener("submit", (e) => {
  e.preventDefault();
  //blank Form
  engine(username, 0, "UserName Can Not Be Blank")
  engine(email, 1, "Email Can Not Be Blank")
   engine(password, 2, "Password Can Not Be Blank")
  engine(password, 2, "Password Can Not Be Blank", 6);


});

let engine = (id, serial, message,minlength) => {
  if (id.value.trim() === '') {
    errorMsg[serial].innerHTML = message;
    successIcon[serial].style.opacity = 1
    checkIcon[serial].style.opacity = 0
  } else if (id.value.length < minlength) {
    errorMsg[serial].innerHTML = `Password must be at least  ${minlength} characters long.`
    successIcon[serial].style.opacity = 1;
    checkIcon[serial].style.opacity = 0;
  } else {
    errorMsg[serial].innerHTML = " ";
    successIcon[serial].style.opacity = 0;
    checkIcon[serial].style.opacity = 1;
  }
}
