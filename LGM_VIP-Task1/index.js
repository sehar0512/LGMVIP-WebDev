let alerts = document.getElementById("alerts");
alerts.style.display = "none";
let fname = document.getElementById("clientName");
let email = document.getElementById("clientEmail");
let msg = document.getElementById("clientMsg");
fname.classList.remove("redLine");
email.classList.remove("redLine");
msg.classList.remove("redLine");
let validName = false;
let validEmail = false;
let validMsg = false;

fname.addEventListener("blur", () => {
  let reg = /^([a-zA-Z\D]){2,10}([\D0-9a-zA-Z]){3,10}$/;
  let str = fname.value;
  console.log(str, reg);
  if (reg.test(str)) {
    validName = true;
  } else {
    validName = false;
  }
});
email.addEventListener("blur", () => {
  let reg = /^([_\.\-a-z0-9]+)@([_a-z\.\-0-9]+)\.([a-z]{2,6})$/;
  let str = email.value;
  console.log(str, reg);
  if (reg.test(str)) {
    validEmail = true;
  } else {
    validEmail = false;
  }
});
msg.addEventListener("blur", () => {
  let reg = /(.*){2,10}/;
  let str = msg.value;
  console.log(str, reg);
  if (reg.test(str)) {
    validMsg = true;
  } else {
    validMsg = false;
  }
});

let subBtn = document.getElementById("formBtn");
subBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (validName && validEmail && validMsg == true) {
    let data = localStorage.getItem("data");
    if (data == null) {
      dataObj = [];
    } else {
      dataObj = JSON.parse(data);
    }
    let myObj = {
      name: fname.value,
      email: email.value,
      msg: msg.value,
    };
    dataObj.push(myObj);
    localStorage.setItem("data", JSON.stringify(dataObj));
    document.getElementById("myForm").reset();
    alerts.style.display = "block";
    window.scrollTo(0, 0);
  } else {
    console.log("Error!!!");
    fname.classList.add("redLine");
    email.classList.add("redLine");
    msg.classList.add("redLine");
  }
});
