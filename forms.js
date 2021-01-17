const form = document.querySelector('.signup-form');
const username = document.querySelector('#username');
console.log(form);
console.log(username);
form.addEventListener('submit', e =>{
    e.preventDefault();
   console.log(username.value);
   const useragain = form.username;
});
const pattern = /[a-z]{6,10}/;
let result = patter.test(username.value);
