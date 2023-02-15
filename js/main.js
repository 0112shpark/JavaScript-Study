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
  age: 09,
};
user.name = "lee";
console.log(user.name);
