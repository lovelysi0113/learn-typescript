// api url
var url = 'https://jsonplaceholder.typicode.com/users/1';

// dom
var username = document.querySelector('#username');
var email = document.querySelector('#email');
var address = document.querySelector('#address');

// user data
var user = {};

// 타입스크립트 사용하기
/**
 * @typedef {object} Address
 * @property {string} street
 * @property {string} city
 */
/**
 * @typedef {object} Data
 * @property {string} name
 * @property {string} email
 * @property {Address} address
 */
/**
 * @typedef {object} User
 * @property {Data} data
 */
/**
 * @returns {Promise<User>}
 */
function fetchUser() {
  return axios.get(url);
}
fetchUser().then(response => {
  // 타입스크립트를 씀으로써 여기서 바로 오타, 에러를 확인할 수 있다
  console.log(response)
  username.innerText = response.data.name;
  email.innerText = response.data.email;
  address.innerText = response.data.address.street + response.data.address.city;
})

function startApp() {
  axios
    .get(url)
    .then(function (response) {
      console.log(response);
      user = response.data;
      // TODO: 이름, 이메일, 주소 표시하기
      /* 타입스크립트를 사용하지 않았을 때..
      console.log(user);
      username.innerText = user.name;
      email.innerText = user.email;
      address.innerText = user.address; // -> object
      address.innerText = user.addres.street; // 오타가 나도 바로 확인 불가능
      */
    })
    .catch(function (error) {
      console.log(error);
    });
}

startApp();
