// memo 6번 내용 예시코드
/*
const dataInfo = {
  name: "AA",
  age: 222,
  gender: "Male",
  favMovies: ["Along the gods", "LOTR", "Oldboy"],
  favFood: [
    {
      name: "Kimchi",
      fatty: false,
    },
    {
      name: "Cheese burger",
      fatty: true,
    },
  ],
};

console.log(dataInfo);
*/

/*
function sayHello(name, age) {
  return `Hello ${name} you are ${age} years old`;
}

// =============================================================

// 7, 8번 예시
const greet = sayHello("aaa", 20);

console.log(greet);

const calculator = {
  plus: function plus(a, b) {
    return a + b;
  },
};

const plus = calculator.plus(5, 4);
console.log(plus);
*/

// =============================================================

// memo 9
/*
const title = document.querySelector("#title");
title.innerHTML = "Hi From JS";
document.title = "I own you now";

function handleClick() {
  title.style.color = "blue";
}
*/

// =============================================================

// memo 10
// title.addEventListener("click", handleClick);

// =============================================================

// memo 11
/*
const title = document.querySelector("#title");
const BASE_COLOR = "rgb(52, 73, 94)";
const OTHER_COLOR = "#ff0";

function handleClick() {
  const currentColor = title.style.color;
  if (currentColor === BASE_COLOR) {
    title.style.color = OTHER_COLOR;
  } else {
    title.style.color = BASE_COLOR;
  }
}

function init() {
  title.style.color = BASE_COLOR;
  title.addEventListener("click", handleClick);
}

init();

function handleOffline() {
  console.log("bye bye");
}
function handleOnline() {
  console.log("welcome back");
}

window.addEventListener("offline", handleOffline);
window.addEventListener("online", handleOnline);
*/

// =============================================================

/*
const title = document.querySelector("#title");
const CLICKED_CLASS = "clicked";

function handleClick() {
  const hasClass = title.classList.contains(CLICKED_CLASS);
  if (hasClass) {
    title.classList.remove(CLICKED_CLASS);
  } else {
    title.classList.add(CLICKED_CLASS);
  }

  위랑 아래랑 같은 코드. 토글이 함수로 있네ㅇ0ㅇ

  title.classList.toggle(CLICKED_CLASS);
}

title.addEventListener("click", handleClick);
*/

// =============================================================
