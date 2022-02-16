/* 
project requirement:

click the button background hexa color code randomly and input field color code view change
*/

// window onload handle setup function
let div = null;
window.onload = () => {
  handleChange();
};
const handleChange = () => {
  // reference code for html
  const develop = document.getElementById("develop");
  const changeBtn = document.getElementById("change-color");
  const inputTextCode = document.getElementById("input-hexa");
  const copyBtn = document.getElementById("copy-btn");
  // handle click button color randomly change
  changeBtn.addEventListener("click", function () {
    const res = hexaColorBgChange();
    inputTextCode.value = res;
    develop.style.backgroundColor = res;
  });
  // handle click button color code copy
  copyBtn.addEventListener("click", function () {
    window.navigator.clipboard.writeText(inputTextCode.value);
    if (div !== null) {
      div.remove();
      div = null;
    }
    generateToastMessage(`${inputTextCode.value} copied!`);
  });
};
// hexa color code random generator function
const hexaColorBgChange = () => {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
};

// generate tostmessage

function generateToastMessage(msg) {
  div = document.createElement("div");
  div.innerText = msg;
  let span = document.createElement("span");
  span.innerText = "X";
  div.appendChild(span);
  span.className = "span-move";
  div.className = "toast-message toast-message-slide-in";

  span.addEventListener("click", function () {
    div.classList.remove("toast-message-slide-in");
    div.classList.add("toast-message-slide-out");

    div.addEventListener("animationend", function () {
      div.remove();
      div = null;
    });
  });

  document.body.appendChild(div);
}
