// 인터페이스
// 반복되는 타입에 한해서 인터페이스로 정의를 하고 사용할 수 있다
interface User {
  name: string;
  age: number;
}

// 1. 변수에 사용하는 경우
// 정해진 규칙에 맞게 데이터를 넣어야함
const songyi: User = { name: 'SongYi', age: 29 };

// 2. 함수의 매개변수에 사용하는 경우
// 특정한 타입 형식의 데이터만 받겠다고 지정하는 것
function getUser(user: User) {
  console.log(user);
}
const iu = { name: '아이유', age: 29 };
getUser(iu);

// 3. 함수의 전체 타입(스펙, 구조)에 사용하는 경우
interface SumFunction {
  (a: number, b: number): number;
}
let sum: SumFunction;
sum = function (num1: number, num2: number): number {
  return num1 + num2;
};

// 4. 배열의 인덱싱에 사용하는 경우
interface StringArray {
  [index: number]: string;
}
let arr: StringArray;
arr[0] = 'hi';
//arr[1] = 10; -> string 타입만 저장 가능..!

// 5, 딕셔너리(dictonary) 패턴
interface StringRegexDictionary {
  [key: string]: RegExp;
}
var obj: StringRegexDictionary = {
  cssFile: /\.css$/,
  jsFIle: /\.js$/,
}
//obj['htmlFle'] = 'html'; -> 올바른 타입이 아니기에 오류 발생!
Object.keys(obj).forEach(value => {
  console.log(value);
});

// 6. 인터페이스 확장
interface Person {
  name: string;
  age: number; // 옵셔널 선택자 ? 동일하게 적용 가능
}
interface Developer extends Person { // 확장해서 사용 가능(상속과 비슷)
  language: string;
}
const joo: Developer = { name: 'joo', age: 20, language: 'ts' };
