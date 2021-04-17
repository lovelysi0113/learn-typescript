// 자바스크립트 함수 선언
function sum(a, b) {
  return a + b;
}

// 함수에서 파라미터와 반환값에 타입을 지정해줄 수 있다

// 1. 함수의 파라미터에 타입을 정의하는 방법
// 타입스크립트 함수 선언 - 함수의 매개 변수
function add1(a: number, b: number) {
  return a + b;
}

// 2. 함수의 반환값에 타입을 정의하는 방식
// 타입스크립트 함수 선언 - 함수의 반환 타입
function add2(a: number, b: number): number {
  return a + b; // 반환값에 타입 지정했는데 함수에 return이 없으면 에러 발생!
}

// function add(a: number, b: number): string {
//   return a + b;
// }

// 함수 인자
function log(a: string) {
  console.log(a);
}
// log('a', 10); -> 함수에 정의된 인자의 갯수보다 더 많이 /더 적게 주게되면 에러 발생!
// 타입스크립트에서는 엄격하게 검사해준다!

// 함수 옵셔널 파라미터(optional parameter)
// 파라미터(인자)를 선택적으로 넣을 수 있다
// 물음표('?') 사용 - 옵셔널 파라미터로 사용하겠다는 의미
function printText(text: string, type?: string) {
  console.log(text);
}
printText('hi'); // 두번째 인자는 옵셔널 파라미터이므로 인자가 1개만 있음에도 오류가 나지 않는다!
