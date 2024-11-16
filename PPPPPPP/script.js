////////////////////////////////////////////////// datatypes //////////////////////////////////////////////////

// console.log(typeof  "Hello World"); // string
// console.log(typeof  123);         // number
// console.log(typeof true);        // boolean
// console.log(typeof [1,2,3]);     // object (array)
// console.log(typeof {name: 'John'});//object (literal)

// number method


// var num = 1033.010;
// console.log(num.toFixed(1));
// console.log(num.toExponential(6));
// console.log(num.toPrecision(1));
// console.log(num.valueOf());
// console.log(num.toString());

// console.log(Number.isInteger(123)); // checks if it is an integer
// console.log(Number.isNaN(123));    // checks if NaN
// console.log(Number.parseFloat("123.45")); // parse float
// console.log(Number.parseInt("123",10)); // parse int with
// console.log(Number("123") == Number("123")) ;// converts variables into numbers before

// math method

// var a = 1230.156
// console.log(Math.round(a));      // round to the nearest integer (removes decimal part)
// console.log(Math.ceil(a));       // rounds up if .5 or greater
// console.log(Math.floor(a));      // rounds down if .5 or greater
// console.log(Math.sqrt(a));     // square root
// console.log(Math.pow(2,4));     // raise base to exponent
// console.log(Math.abs(-987.65)); // absolute value of a number
// console.log(Math.max(1,2,3,4,5));// returns largest argument
// console.log(Math.min(1,2,3,4,5));// returns smallest argument
// console.log(Math.floor(Math.random() * 100 ) + 1);     // returns a random number
// console.log(Math.trunc(123.456)); // removes any decimal places from a

////////////////////////////////////////// String methods //////////////////////////////////////////

// var str = "Hello world Hello is hello worlds";
// console.log(str.length);
// console.log(str.slice(1,4));
// console.log(str.substring(1,4));
// console.log(str.substr(1,4));
// console.log(str.replace(/Hello/g,"hiii"));
// console.log(str.replace(/Hello/gi,"hmmm"));
// console.log(str.replaceAll("Hello","kishan"));
// console.log(str.toLowerCase());
// console.log(str.toUpperCase());
// console.log(str.startsWith("H"));
// console.log(str.endsWith("D"));


// var str1 = "   space removed  ";
// console.log(str1.trim());
// console.log(str1.trimStart());
// console.log(str1.trimEnd());
// console.log(str1.charAt(10));
// console.log(str1.charCodeAt(5));
// console.log(str1.repeat(5));
// console.log(str1.split(""));
// console.log(str1.match(/p/));
// console.log(str1.indexOf("e"));
// console.log(str1.lastIndexOf("o"));
// console.log(str1.includes("p"));

// console.log(String.fromCharCode(97,98,99));
// console.log(str.concat(" ",str1));



////////////////////////////////////// Array method //////////////////////////////////////

var arr = [10, 30, 12, 8, 20];

// console.log(arr.length);
// console.log(arr.toString());

// console.log(arr.join("-"));

// console.log(arr.slice(0,3));
// console.log(Array.isArray(arr));
// console.log(arr.reverse());
// console.log(arr.fill(1,"2"));
// console.log(arr.copyWithin(2));
// console.log(arr.indexOf(8));
// console.log(arr.includes(10));

// {
//     var arr = ["apple","banana","mango"]
//     document.getElementById("demo").innerHTML = arr;

//     var arr2 = arr.pop();

//     console.log(arr2);
//     document.getElementById("res").innerHTML = arr;
// }

// {
//     var arr = ["apple","banana","mango"]
//     document.getElementById("demo").innerHTML = arr;

//     var arr2 = arr.push("orange");
//     var arr2 = arr.push("kiwi");

//     console.log(arr2);
//     document.getElementById("res").innerHTML = arr;
// }

// {
//     var arr = ["apple","orange","banana","mango"];
//     document.getElementById("demo").innerHTML = arr;

//     var arr2 = arr.shift();
//     document.getElementById("res").innerHTML = arr
// }

// {
//     var arr = ["apple","orange","banana","mango"];
//     document.getElementById("demo").innerHTML = arr;

//     var arr2 = arr.unshift("coconut");
//     document.getElementById("res").innerHTML = arr
// }

// {
//     var arr = [10,30,12,8,20]
//     document.getElementById("demo").innerHTML = "Original Array: "+arr;

//     delete arr[2]
//     delete arr[3]
//     document.getElementById("res").innerHTML ="After Delete :" +arr ;
// }

// {
//   var arr1 = [10, 30, 12, 8, 20];
//   document.getElementById("demo").innerHTML = "Original Array: " + arr1;
//   var arr2 = [1, 3, 12, 8, 2];
//   document.getElementById("demo1").innerHTML = "Original Array: " + arr2;

//   var arr3 = arr1.concat(arr2);
//   document.getElementById("res").innerHTML = "Concatenated array: " + arr3;
// }

// {
//   var arr1 = [10, 30, 12, 8, 20, [111, 222, 333, [2, 3,["qqq","dasds","dd"], 4, 5]],[555,666]];
//   console.log(arr1);
//   var arr2 = arr1.flat(Infinity)
//   console.log(arr2);
// }

// {
    // var arr = ["welcome to","javascript","programing language"]

//     res = arr.flatMap((e) => {
//         return e.split(" ");
//     })
//     console.log(res);
//     console.log(res[3]);
// }


// {
//   var arr1 = [10, 30, 12, 8, 20];
//   document.getElementById("demo").innerHTML = "Original Array: <br>" + arr1;

//   var arr2 = arr1.splice(2,1,"11111","22222","kishan");
//   document.getElementById("res").innerHTML = "Array after splicing  element:<br> " + arr2;
//   document.getElementById("res1").innerHTML = "final array:<br> " + arr1;
//   delete arr1[2]
//   document.getElementById("res2").innerHTML = "final array delet:<br> " + arr1;
// }

// {
//     const arr = ["prashant","kishan","urvesh","sagar"]
//     const arr2 = arr.sort()
//     console.log(arr2);

//     const aa = [20,44,3,66,21,3]
//     const bb = aa.sort((a,b) => a - b)
//     console.log(bb);
// }

// {
//     let arr1 = [2,3,4,5,6]
//     let arr2 = arr1.some((value) => {
//         return value > 4
//     })
//     console.log(arr2);
// }
// {
//   let arr1 = [2, 3, 4, 5, 6];
//   let arr2 = arr1.every((value) => {
//     return value  >= 2;
//   });
//   console.log(arr2);
// }
// {
//     let arr1 = [2, 3, 4, 5, 6];
//     let arr2 = arr1.find((value)=>{
//         return value > 2
//     })
//     console.log(arr2);
// }
// {
//     let arr1 = [2, 3, 4, 5, 6];
//     let arr2 = arr1.findIndex((value)=>{
//         return value > 2
//     })
//     console.log(arr2);
// }
// {
//     let arr1 = [20, 30, 40, 50, 60];
//     console.log(arr1);
//     arr1.forEach((value, index, array) => {
//         console.log(index + " : " +value + " : " + array);
//         arr1[index] = value + 2;
//     })
//     console.log(arr1);
// }
// {
//     let arr1 = [20, 30, 40, 50, 60];
//     let arr2 = arr1.map((value) => {
//         return value;
//     })
//     console.log(arr2);
// }
// {
//   let arr1 = [20, 30, 40, 50, 60];
//   let arr2 = arr1.filter((value) => {
//     return value < 40;
//   });
//   console.log(arr2);
// }
// {
//     let arr1 = [20, 30, 40, 50, 60];
//     let arr2 = arr1.reduce((acc, curr) => {
//         return acc + curr;
//     })
//     console.log(arr2);
// }
{
  //   let arr1 = ["ss", "gg", "kk"];
  //   for(let [index,ele] of arr1.entries()){
  //     console.log(index, ele);
  //   }
  // console.log(arr2.next().value);
  // console.log(arr2.next().value);
  // console.log(arr2.next().value);
}

// {
//     var arr = [23,3,11,22,33,44,55];
//     function maxValue(item){
//         return Math.max.apply(null,item)
//     }
//     console.log(maxValue(arr));
// }
// {
//     var arr = [23,3,11,22,33,44,55];
//     function minValue(item){
//         return Math.min.apply(null,item);
//     }
//     console.log(minValue(arr));
// }

// {
//   var arr = [23, 3, 11, 22, 33, 44, 55];
//   var min = arr[0],
//     max = arr[0];

//   for (let i = 0; i < arr.length; i++) {
//     if(arr[i] > max){
//         max = arr[i]
//     }
//     if(arr[i]  < min){
//         min = arr[i]
//     }
//   }
//   console.log(min +"---"+ max);
// }
