/////////////////////// object ///////////////////////

// object literls :-

// let mysym = Symbol("key")

// {
//   var obj = {
//     name: "kishan",
//     // [mysym]:"mykey",
//     age: 25,
//     emiail: "kishan@gmail.com",
//     "full name": "Kishan Kumar",
//   };
//   console.log(obj.name);
//   console.log(obj["full name"]);
//   console.log(obj[mysym]);

//   obj.emiail="newemail@gmail.com";
//   console.log(obj);
//   Object.freeze(obj)
//   obj.emiail="aaaaaaaaaaa@gmail.com";
//   console.log(obj);

//   console.log(Object.keys(obj)); // returns all the keys of an object in array format
//   console.log(Object.values(obj));
//   console.log(Object.entries(obj));
//   console.log(Object.hasOwnProperty("name"));
//   console.log(Object.getOwnPropertyNames(obj));
//   console.log(Object.toString());
// }

// {
//     // singleton object
//     const myObj = new Object()
//     myObj.id = "123abs"
//     myObj.name ="sammy"
//     myObj.isLoggedIn = false
//     console.log(myObj);
// }

// {
//   var obj1 = { 1: "kkk", 2: "sss" };
//   var obj2 = { 4: "ggg", 5: "xxx" };
//   var obj3 = { 3: "www", 6: "hhh" };

//   //   var obj4 = Object.assign({}, obj1, obj2, obj3);
//   var obj4 = { ...obj1, ...obj2, ...obj3 };
//   console.log(obj4);
// }

// {
//   let obj = Object.create({
//     name: "kishn",
//     age: 25,
//     num: 12345,
//   });
//   //   delete obj.age
//   obj.email = "aaa@gmail.com";
//   console.log(obj);
// }

// {
//     const obj = {};
//     const parent = { foo: 'bar' };

//     console.log(obj.foo);
//     Object.setPrototypeOf(obj, parent);
//     console.log(obj.foo);
// }

// {
//   var obj = [
//     { name: "kishan", age: 26 },
//     { name: "jeegar", age: 25 },
//     { name: "sagar", age: 27 },
//   ];

//     var a = obj.map((item) => {
//         return item.name + " " + item.age;
//     });
//   console.log(a);
// }



/////////////////////////////////// function ///////////////////////////////////

// function greet (){
//     return console.log("kishan");
// }
// greet()

// var greet = (a,b) =>{
//     return a + b;
// }
// console.log(greet(10,20));

// var greet = (a,b) => a * b;
// console.log(greet(10,20));

// function greet(name,callback){
//     console.log("hello" + " - " + name);
//     callback()
// }
// function callme(){
//     console.log("first call back");
// }
// greet("kishan",callme)


// ---- why call , apply, bind ----  //

// {

// let student = {
//   firstname: "kishan",
//   lastname: "bhlalala",
//   age: 25,
// };
// let teacher = {
//   firstname: "girish",
//   lastname: "gondaliya",
//   age: 30,
// };

// function getEmail() {
//   return this.email = `${this.firstname}${this.lastname}@gmail.com`;
// }

// function chooseSub(sub1, sub2) {
//   return this.subject =  [sub1, sub2];
// }

// console.log(chooseSub.call(teacher, "maths","english"));
// console.log(chooseSub.apply(teacher, ["maths", "english"]));
// console.log(teacher);

// console.log(getEmail.call(student));
// console.log(student);

// console.log(getEmail.call(teacher));
// console.log(teacher);

// let callTime = getEmail.bind(teacher)();
// console.log(callTime);

// }

//////////////////////////////////// class ////////////////////////////////////
// {
//     class obj{
//         constructor(name,price){
//             this.n = name,
//             this.p = price
//         }
//     }
//     let a = new obj('bmw',222222)
//     let b = new obj('innova',555555)
//     console.log(a.n + " " + a.p);
//     console.log(b.n + " " + b.p);
// }

/////////////////////////////////// ayncronous ///////////////////////////////////

// {
//     function greet() {
//         console.log("hey");
//     }
//     setTimeout(greet,3000)
//     console.log("kishan");
// }

// {
//     function greet(){
//         let date = new Date()
//         let dates = date.toLocaleTimeString()
//         console.log(dates);
//         setTimeout(greet,3000)
//     }
//     greet()
// }

// promises //
// {
//     let count  = false;
//     let countValue = new Promise(function(resolve,reject){
//         if(count){
//             resolve('there is count value')
//         }else{
//             reject("no value")
//         }
//     });
//     console.log(countValue);
// }

// {
//   const myPromise = new Promise((resolve, rejected) => {
//     const a = 2, b = 2;
//     const c = a + b;
//     if (c === 4) {
//         resolve(`yes :  ${a} and ${b} = 4`)
//     }else{
//         rejected(`no! : ${a} and ${b} != 4`)
//     }
//   });

//    myPromise.then((m) => {
//     console.log(m);
//   }).catch((err) => {
//     console.log(err);
//   }).finally(() => {
//     console.log("all done");
//   })
// }


///////////////// async & await /////////////////
// {
//     async function myFun(){
//         let raw = await fetch(`https://randomuser.me/api/`)
//         let res = await raw.json()
//         console.log(res);
//     }
//     myFun()
// }

// {
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(err => console.log("errro....",err))
// }

// {
//     axios.get('https://jsonplaceholder.typicode.com/users')
//     .then(response => console.log(response.data))
//     .catch(err => console.log('eeeee',err))
// }


