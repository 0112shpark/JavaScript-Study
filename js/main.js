//Data

const string1 = "Hello1";
//데이터 보간
const string2 = `Hello ${string1} ?`;
console.log(string2);
const a = 0.1;
const b = 0.2;
//.toFixed() - 소숫점 자르기(문자데이터로 바꿈) Number함수 필요
console.log(Number((a + b).toFixed(1)) + 5);

//arr

const fruits = new Array("apple", "banana");

const fruit = ["apple", "banana"];

//Object
// const user = new Object();
// user.name = "pp";
// user.age = 99;

// function User() {
//   this.name = "jj";
//   this.age = 98;
// }

// const users = new User();
const user = {
  name: "park",
  age: 9,
};
user.name = "lee";
console.log(user.name);

// 형 변환
const c = 1;
const d = "1";
console.log(c == d); //true
console.log(c === d); //false

//false, 0, null, undefined, NaN, '' ==>false
const n = String(33);
console.log(n === 33); //false

//null, arr, object는 모두 object.
// ?? 연산자 null과 undefined 제외 처음 data반환

[].constructor === Array;
//{}.constructor ===Object;
Object.prototype.toString.call(null).slice(8, 1) === "Null";

function checkType(data) {
  return Object.prototype.toString.call(null).slice(8, 1);
}

// 전개 연산자->데이터를 합칠 때 사용.
// ...은 배열의 대괄호를 제거시킴.
// ...객체의 괄호를 제거시킴
const a1 = [1, 2, 3];
const a2 = [4, 5, 6];

const a3 = a1.concat(a2); // [1,2,3,4,5,6]

let a4 = [a1, a2];
console.log(a4); // [Array(3), Array(3)]

a4 = [...a1, ...a2];
console.log(a4); // [1,2,3,4,5,6]

const b1 = { x: 1, y: 2 };
const b2 = { y: 3, z: 4 };

const b3 = Object.assign({}, b1, b2);
console.log(b3); // {x: 1, y: 3, z: 4}

const b4 = { b1, b2 };
console.log(b4); //{b1: {…}, b2: {…}}b1: {x: 1, y: 2}x: 1y: 2[[Prototype]]: Objectb2: {y: 3, z: 4}[[Prototype]]: Object

const b5 = { ...b1, ...b2 };
console.log(b5); //{x: 1, y: 3, z: 4}

const c1 = [1, 2, 3];
const [c2, ...c3] = c1;
console.log(c2, c3); // 1, [2, 3]
const c4 = new Array();
c4.push(33);
c4.push(55);
c4.pop();
console.log(c4);

//for
for (const a of c1) {
  console.log(a);
}

// 객체데이터는 in 사용 , 속성 값이 key로 할당
const use = {
  name: "dd",
  age: 33,
  isValid: true,
};
for (const key in use) {
  console.log(key, ": ", use[key]);
}

function myFunc(num) {
  if (!num) {
    return 0;
  } else {
    return 1;
  }
}
console.log(myFunc(4));

const loadImage = (url, cb) => {
  const imgEl = document.createElement("img");
  imgEl.src = url;
  imgEl.addEventListener("load", () => {
    setTimeout(() => {
      cb(imgEl);
    }, 500);
  });

  setTimeout(() => {
    temp();
  }, 1000);
  console.log("hello~");
  console.log("hello~");
  console.log("hello~");
};

const temp = () => {
  const tempEl = document.querySelector("img");
  tempEl.classList.add("show");
};
const containerEl = document.querySelector(".container");
loadImage(
  "https://searchad-phinf.pstatic.net/MjAyMDA2MTBfODcg/MDAxNTkxNzY3Nzg4MjEw.XEj-ruaAUvMGfc7vL9rIokLt4_RBVQZvXMPqc9rn9-Eg.BTh9UKzAqohbT0e_Kd4EDG1RFvmsSNBzuxXIO84Ce58g.JPEG/135695-77b43685-ea3f-48d7-bc0d-c69e5a617d5e.jpg&w=90&h=90&rs=2&qlt=100",
  (imgEl) => {
    // console.log(containerEl);
    containerEl.append(imgEl);
    // console.log(containerEl);
  }
);
