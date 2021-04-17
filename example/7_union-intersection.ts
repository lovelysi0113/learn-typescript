// function logMessage(value: string) {
//   console.log(value);
// }
// function logMessage(value: number) {
//   console.log(value);
// }
function logMessage(value: any) {
  console.log(value);
}

// # Union 타입 문법('|') - `any` 보다는 명시적임
// 한가지 이상의 타입을 사용하고 싶을 때 사용
let songyi: string | number | boolean;
function logMessage1(value: string | number) {
  console.log(value);
}

// 타입 가드: 특정 타입으로 타입의 범위를 좁혀나가는(필터링 하는) 과정
function logMessage2(value: string | number) {
  if (typeof value === 'string') {
    value.toLocaleUpperCase();
  }
  if (typeof value === 'number') {
    value.toLocaleString();
  }
  throw new TypeError('value must be string or number')
}

// # Intersection 타입 문법('&')
interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

// Union
function askSomeone(someone: Developer | Person) {
  someone.name; // O
  //someone.age; // X -> 공통속성(교집합)만 접근 가능
}
askSomeone({ name: '디벨로퍼', skill: '웹 개발' });
askSomeone({ name: '캡틴', age: 100 });

// Intersection
function findSomeone(someone: Developer & Person) {
  someone.name; // O
  someone.age; // O -> 모든 속성에 접근 가능(합집합)
}
findSomeone({ name: '디벨로퍼', skill: '웹 개발', age: 30 }); // 모든 속성이 다 필요하다
//findSomeone({ name: '디벨로퍼', skill: '웹 개발' }); -> 오류 발생
//findSomeone({ name: '캡틴', age: 100 }); -> 오류 발생