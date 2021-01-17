//object literal
let myObj = {
    name:'satinder',
    age:'41',
    blogs:[123,456],
    tellMeAboutAgoo: function(){
        console.log('Agoo likes playing Nintendo');
    },
    logblogs: function(){
        this.blogs.forEach(blog => {console.log(blog)});
        //use of this keyword is different when used inside an arrow function
    }
}
console.log (myObj);
console.log (myObj.name);
myObj.name = 'notme';
console.log(myObj.name);
myObj.tellMeAboutAgoo();
myObj.logblogs();

