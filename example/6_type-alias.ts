// https://www.typescriptlang.org/docs/handbook/advanced-types.html
// https://www.typescriptlang.org/docs/handbook/advanced-types.html#nullable-types

// #1
// function sum(a: number, b:number) {
//   return a + b;
// }
type SumParameter = number;

function sum(a: SumParameter, b: SumParameter) {
  return a + b;
}

// 타입 별칭: 새로운 타입 값을 하나 생성하는 것이 아니라
//                정의한 타입에 대해 나중에 쉽게 참고할 수 있게 이름을 부여하는 것

// interface와 type의 차이점
// 1. 위에 마우스를 올렸을 때 나타나는 메시지(프리뷰)가 다르다
//      interface를 사용했을 때에는 인터페이스라고만 뜬다
//      type을 사용했을 때에는 바로 타입의 모습이 나온다
// 2, 타입 정의 바로 가기
//      interface: cmd로 바로가기 가능
//      type: 바로가기는 안되지만 프리뷰로 확인 가능
// 3. 타입의 확장 여부
//      interface: 타입 확장 가능(extends)
//      type: 확장 불가능

// #2
type Person = {
  name: string;
  age: number;
};

function getPerson(): Person {
  let songyi: Person = { name: 'SongYi', age: 29 };
  return songyi;
}

// #3
type Hero = {
  skill: string;
}

const capt: Hero = { 
  skill: 'throwing a shield' 
}