function addTwoNum(a: number, b: number): number {
    return a + b;
}
addTwoNum(10, 20);

// 컴파일(compile): ts 파일을 js 파일로 변환하는 작업
// npm install typescript -g
// tcs index.ts

/*
왜 그냥 설치하면 오류가 나는지 모르겠다ㅠㅠ
원인 찾아서 해결해보기!!!
npm ERR!  [Error: EACCES: permission denied, access '/usr/local/lib/node_modules'] {
npm ERR!   errno: -13,
npm ERR!   code: 'EACCES',
npm ERR!   syscall: 'access',
npm ERR!   path: '/usr/local/lib/node_modules'
npm ERR! }
*/