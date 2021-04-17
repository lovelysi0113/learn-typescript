// 1. 문자열
// JS: const str = 'hello';
// TS: ': ' 다음에 타입을 써주면 된다
const str: string = 'hello';

// 2. 숫자
const num: number = 10;

// 3. 배열 (2가지 선언 방법이 있음)
const strArr: Array<string> = [];
strArr.push('hi');
const strArr2: string[] = [];
// strArr2.push(10); -> 타입이 다른 데이터를 넣으면 바로 오류가 난다
let numArr: Array<number> = [1, 2, 3];
let numArr2: number[] = [1, 2, 3];

// 4. 튜플
// 하나의 배열에 각각 다른 타입의 데이터를 넣을 수 있다
const address: [string, number] = ['판교', 40];
// 음.. 다른 파일에 정의된 이름들과도 겹치면 안되는 것 같다! 빨간줄이 뜨넹..! 우앙 신기!!
// 다시 하니까 될때도 있네! 뭔차이인거지? 좀더 알아봐야할듯!
// 확실한건 하나의 파일 안에서는 겹치는 이름이 있으면 안됨..! (당연한 이야기이지만..ㅋㅋ)

// 5. 객체
const obj: object = {};
// obj.a = 10;
// 객체에 각 키에 어떤 타입의 데이터가 들어갈 수 있는지 따로 지정해줄 수 있다
const person: { age: number; name: string } = { age: 100, name: 'Capt' };
person.age = 101;

// 6. 진위값(boolean)
let isLogin: boolean = false;