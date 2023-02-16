## 💡Function Basics

### 📌함수 호이스팅(Hoisting)

함수 선언문이 가장 위로 올려져서 정의되는 것.

```javascript
hello();

function hello(){
  ~~
};
```

### 📌Arrow function

```javascript
const sum = (a, b) => {
  return a + b;
};
```

return으로 시작한다면 <br>
더욱 간편하게 쓸 수 있다.

```javascript
const sum = (a, b) => a + b;
```

매개변수가 1개라면 중괄호를 생략할 수 있다.

### 📌즉시 실행함수(IIFE)

`()()`형식으로 사용한다. 첫번째 괄호안에 함수의 내용을 적는다.

```javascript
const sum = (a, b) => {
  return a * b;
};
sum(1, 2);
```

위 코드의 내용을 즉시 실행함수로 바꾸면

```javascript
((a, b) => {
  return a * b;
})(1, 2);
```

형식이 된다.

## 💡Javascript Methods

### 📌`setTimeout(function(), ms)`

- function()을 ms이후만큼 딜레이 시킨다. ms동안 실행이 멈추는 것이 아니고 단지 `function()`만 멈춰있고 `setTimeout` 뒤의 동작들은 이어서 실행된다.
- 예를들어,

```javascript
const func = (a, b) => {
  setTimeout(function () {
    console.log("hello");
  }, 1000);
  temp();
};
```

라는 코드가 있다고 가정할 시, `hello`는 `setTimeout`함수에 의해 1초간 딜레이 된 후 실행된다. 여기서 `temp`함수는 1초후 `hello`가 출력된 후에 실행되는 것이 아닌 `setTimeout`함수가 호출된 직후에 호출 된다. 따라서 만약 `temp`함수의 동작이 `world`를 출력하는 내용이라면 위 코드의 결과물은 `world hello`가 될 것이다.

- `setInterval()`함수를 통해 일정 주기마다 무한반복하게 만들 수 있다.

### 📌`clearTimeout(function)`

- `function`으로 할당한 스케쥴된 함수를 제거한다.

```javascript
const time = setTimeout(() => {
  console.log("hello");
}, 2000);
clearTimeout(time);
```

> 위 코드 실행시 `hello`는 출력되지 않는다.

### 💫 String

---

#### 📌 `.length`: 문자의 길이를 반환.

#### 📌 `.includes()`: 주어진 문자가 포함되어 있는지 확인.

> 두번째 인수로 검사를 시작할 인수를 지정할 수 있다.

#### 📌 `.indexOf()`: 주어진 문자와 일치하는 첫번째 index를 반환, 없으면 -1반환.

#### 📌 `.padEnd(length, str)`: length보다 문자열의 길이가 짧으면 주어진 str을 length까지 뒤에 붙여서 반환.

#### 📌 `.padStart(length, str)`: length보다 문자열의 길이가 짧으면 주어진 str을 length까지 앞에 붙여서 반환.

#### 📌 `.replace(str1, str2)`: str1을 str2로 교체. str1을 정규표현식으로 나타낼 수 있다. 원본은 유지.

#### 📌 `.slice(index1, index2)`: index1부터 index2전까지의 문자열을 추출. index2를 생략하면 끝까지 추출.

#### 📌`.split(value)`: value를 기준으로 문자열을 나눠 배열에 저장.

#### 📌`.trim()`: 대상 문자열의 앞뒤의 tab이나 space를 제거한 후 반환.

### 💫 Number

---

#### 📌 `.toFixed(n)`: n자릿수까지 고정 소수점 표기로 표현해 문자열로 반환.

> `parseFloat()` 을 사용해 숫자로 변환필요.

#### 📌 `.toLocaleString()`: 주어진 숫자를 ,를 추가한 문자열로 반환.

#### 📌 `Number.isInteger(n)`: n이 정수인지 반환.

> `Integer`은 `NaN`로도 변환가능.

#### 📌 `Number.parseInt(num, n)`: num을 n진수 정수로 변환.

> `num`은 문자열도 가능

#### 📌 `Number.parseFloat(num)`: num을 float로 변환.

### 💫 Math

---

#### 📌 `Math.abs(n)`: n의 절댓값 반환.

#### 📌 `Math.ceil(n)`: n을 올림한 정수 반환.

#### 📌 `Math.floor(n)`: n을 내림한 정수 반환.

#### 📌 `Math.max(n,.,...)`: 주어진 숫자중 가장 큰 숫자 반환.

#### 📌 `Math.min(n,.,...)`: 주어진 숫자중 가장 작은 숫자 반환.

#### 📌 `Math.pow(n,x)`: n을 x승한 숫자를 반환.

#### 📌 `Math.random()`: 0과 1사이의 난수 반환.

- 특정 수 사이의 난수 반환 함수
  > ```javascript
  > function random() {
  >   return Math.floor(Math.random() * (max - min)) + min;
  > }
  > ```

#### 📌 `Math.round(n)`: n을 반올림해 정수 반환.

### 💫 Date

---

#### 📌 `new Date()`: 현재 시간정보 반환.

> ```javascript
> const date = new Date();
> ```

#### 📌 `date.setFullYear(n)`: n으로 년도 변경.

#### 📌 `date.getFullYear()`: 현재 년도 반환.

- Month는 `zero-based numbering` 사용

#### 📌 `date.setMonth(n)`: n-1로 월 변경.

#### 📌 `date.getMonth()`: 현재 월-1 반환.

#### 📌 `date.setDate(n)`: n으로 날짜 변경.

#### 📌 `date.getDate()`: 현재 날짜 반환.

- Hours는 `24hours` 사용

#### 📌 `date.setHour(n)`: n으로 시간 변경.

#### 📌 `date.getHour()`: 현재 시간 반환.

#### 📌 `date.getDay()`: 현재 요일을 숫자로 반환.

> 0: 일요일, 6: 토요일

### 💫 Array

---

#### 📌 `new Date()`: 현재 시간정보 반환.

## 💡Prototype

- Javascript는 기본적으로 `prototype` 형식으로 만들어져 있다. ES6 2015부터는 `class`를 사용하지만 기본 베이스는 같기 때문에 `prototype`이 뭔지 이해해야 한다.

- Javascript의 `instance`, 즉 배열이나 객체 데이터의 method나 함수들은 각자의 `prototype`에서 정의된다. 배열의 길이를 반환하는 `arr.length`도 이미 등록되어 있는 method이기에 사용가능하다.
- `.prototype`을 사용해 새로운 함수를 등록할 수 있다.

📌 Array에서 사용하기.

```javascript
const name = new Array("park", "lee", "kim");

// 가장 보편적인 방법
console.log(name);

//prototype로 등록해 다른 배열에서도 사용할 수 있다.

Array.prototype.printName = function () {
  console.log(this);
};

// printName이라는 method는 array의 prototype에 등록되었다.
// 그러므로  new Array로 생성된 배열에서 모두 사용할 수 있는
// method가 된 것이다.
const newName = new Array("hello", "i am");
newName.printName();
name.printName();
```

📌 객체에서도 사용할 수 있다.

```javascript
// 보편적인 방법
const student1 = {
  name: "park",
  age: 16,
  getInfo: function () {
    return `name: ${this.name} age: ${this.age}`;
  },
};
const student2 = {
  name: "kim",
  age: 17,
};
console.log(student1.getInfo());
console.log(student1.getInfo.call(student2));

// 같은 함수를 두번 쓰기에 prototype으로 등록할 수 있다.

function User(name, age) {
  this.name = name;
  this.age = age;
}

// User 함수의 prototype으로 등록

User.prototype.getInfo = function () {
  return `name: ${this.name} age: ${this.age}`;
};

const student1 = new User("park", 16);
const student2 = new User("kim", 17);
console.log(student1.getInfo());
console.log(student2.getInfo());
```

⭐ `class`를 사용해 위 객체의 `prototype`선언부를 더욱 간단하게 할 수 있다.

```javascript
// // 같은 함수를 두번 쓰기에 prototype으로 등록할 수 있다.

// function User(name, age) {
//   this.name = name;
//   this.age = age;
// }

// // User 함수의 prototype으로 등록

// User.prototype.getInfo = function () {
//   return `name: ${this.name} age: ${this.age}`;
// };
class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  getInfo = function () {
    return `name: ${this.name} age: ${this.age}`;
  };
}

const student1 = new User("park", 16);
const student2 = new User("kim", 17);
console.log(student1.getInfo());
console.log(student2.getInfo());
```

## 💡Class

### 📌 `Getter`, `Setter`

- class 생성자함수에서 객체의 데이터를 가져오거나 할당할 때 사용한다.
- 위의 코드를 예시로 사용하면,

```javascript
class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // 하나의 method로 등록

  get getInfo() {
    return `name: ${this.name} age: ${this.age}`;
  }
  set getInfo(value) {
    const temp = value.split(" ");
    this.name = temp[0];
    this.age = Number(temp[1]);
  }
}

const student1 = new User("park", 16);
const student2 = new User("kim", 17);
// getter 사용
console.log(student1.getInfo);
//값 재할당
// setter 사용
student2.getInfo = "lee 19";
console.log(student2.getInfo);
```

### 📌 정적 메소드(Static Method)

- class에서 사용하는 static method로써 주로 그 class와 data type이 일치하는지 확인하는데 사용한다.

```javascript
class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  getInfo = function () {
    return `name: ${this.name} age: ${this.age}`;
  };
  // static method 선언
  static isStu(user) {
    if (user.name && user.age) {
      return true;
    }
    return false;
  }
}

const student1 = new User("park", 16);
const student2 = new User("kim", 17);
// class에서만 사용가능하다.
console.log(User.isStu(student1));
console.log(student2.isStu()); // Error
```
