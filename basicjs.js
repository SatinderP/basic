console.log("hoho again");
const pi=3.14;
let radius=2;
let result = pi*radius**2;
console.log('radius is '+result);
//_______
//control flows
const names = ['as', 'dfs', 'sf'];
for (let i=0; i<names.length; i++){
    console.log(names[i]);
}
let j=0;
while (j<names.length){
    console.log('logging with while loop - '+names[j]);
    j++;
}

//_______
//function declaration
//automatically hoisted on top, so can be called before declared
function greet(){
    console.log('hello!!');
}
greet();


//Function expression
//not hoisted to top by default
const myfunction = function(name){
    console.log(`name passed was ${name}`);
    return ('Logged!!');
};
let returnvalue = myfunction('sati');
console.log(returnvalue);

//Arrow function
const area = (radius) => {
    return 3.14*radius*radius;
}
console.log(`area is ${area(2)}`);

//simplified af
const a = r => 3.14*r*r;
console.log(`area from simplified arrow func is ${a(2)}`);

//CALLBACK FUNCTION
const takescallback = function(callbackfn){
    let a=10;
    callbackfn(10);
}
takescallback(function(val){console.log(val)});

//CALLBACK function passed as arrow function
takescallback(val => {console.log(val)});

//for each taking in a callback function as parameter
names.forEach((person,index)=>
{console.log(`name at ${index} is ${person}`)}
);

//another example of callback fn passed to foreach method
let html=``;
let createhtml = function(person){
    html += `<li style="color: purple">${person}</li>`;
};
name.foreach(createhtml(person));
console.log(html);
