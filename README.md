## Function

### 함수 호이스팅(Hoisting)

함수 선언문이 가장 위로 올려져서 정의되는 것.

```javascript
hello();

function hello(){
  ~~
};
```

### Arrow function

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

### 즉시 실행함수(IIFE)

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
