// 자바스크립트 함수 인자 특성
function log() {}

log(10, 20, 30);

// -> 정의된 인자 외에 추가로 인자를 넣어도 오류가 나지 않는다
//      추가로 들어온 인자들은 모두 무시되기 때문
// -> 자바스크립트가 주는 유연함
//      하지만 타입스크립트에서는 다르다 - 조심하기!!