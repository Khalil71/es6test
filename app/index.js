//Scopes
// const emails = ['frodo@email.com', 'we@email.com', 'koo@email.com'];
// emails.push('go@email.com');
// console.log(emails);
// const limit = 200;
//
// {
//   const limit = 10;
//   console.log('backstage', limit)
// }
//
// console.log('total', limit);



// function hello() {
//   //var message = "hello";
//   let message = "hello";
//   console.log(message);
// };
//
// function greeting() {
//   //var message = "how are you?";
//   let message = "how are you?";
//   console.log(message);
// };
//
// hello();
// greeting();
//---------------------------------------------------
//TEMPLATE Litirals
// let a = `good`;
// let b = `${a} morning`;
// console.log(b);

//Spread operators-----------------------------------
// let b = 'birthday';
// let c = `Happy ${b}`;
// console.log(c);

// let a = [20, 30, 40];
// let b = [10, ...a, 50];
// console.log(b);

// let a = ['mido', 'frank', 'boo'];
// let b = ['kimo', 'zozo', 'tito', ...a];
// console.log(b);

//Rest parameters------------------------------------------
// function collection(...a){
//   console.log(a);
// }
// collection(1,2,3,4,5);

//Destructuring with arrays and obj---------------------------------------
//Arrays---------------------------------------
// let z = [4,5,6];
// //let x = z[0];
// //let y = z[1];
// let [x, y] = z;
//console.log(x, y);

// let animals = ['simba', 'zazu', 'ed'];
// let [lion, bird] = animals;
// console.log(lion, bird);
//Objects
// let king = {name:'mufasa', kids:1};
// let {name, kids} = king;
// console.log(name, kids);

// let son = {name:'simba', parents:2};
// let name, parents;
// ({name, parents} = son);
// console.log(name, parents);

//Arrow functions
// var cheer = function () {
//   console.log('Woooohoo!');
// }
// cheer();

// setTimeout(() => {
//   console.log("woooooo")
// }, 3000);

// let cheer = () => {
//   console.log('wohoooo');
// }
// cheer();

//Helper Methods
//.map
//let values = [20, 30, 40];
// let double = (x) => {
//   return x*2;
// }
// let dd = values.map(double);
// let doubled = values.map((n) => {
//   return n*2
// });

//let doubled = values.map((n) => n*2);
//console.log(dd);
//console.log(doubled);

//Filter
// let points = [7, 16, 21, 4, 3, 22, 5];
// let HS = points.filter((n) => n > 15);
// console.log(HS);

//String.repeat
//let b = "wooh" + " ".repeat(50) + "oo";
// let b = `woo${"oo".repeat(50)}`;
// console.log(b);

//Search string
// console.log("butterfly".startsWith("butter"));
// console.log("butterfly".endsWith("fly"));
// console.log("butterfly".includes("tt"));

//Checking Numbers
//Number.isFinite()
// const addToCart = (item, number) => {
//   return Number.isFinite(number);
// };
// console.log(addToCart('shirt', Math.pow(2,54)));

//Number.isSafeInteger()
// const addToCart = (item, number) => {
//   return Number.isSafeInteger(number);
// };
// console.log(addToCart('shirt', Math.pow(2,54)));

// //modules
// //exporting and importing modules
// import {fellowship, total} from './fellowship';
// //import {add, multiply} from './math';
// //importing default func
// import multiply from './math';
// console.log(fellowship, total);
// //console.log(add(3, 4));
// console.log(multiply(2, 5));

//Classes--------------------------
// class Animal{
//   constructor(name, height){
//     this.name = name;
//     this.heigth = height;
//   }
//   hello(){
//     console.log(`Hi i'm ${this.name} from the animal kingdom`);
//   }
// }
// import Animal from './animal';
// // var king = new Animal('mufasa', 4.5);
// // console.log(king);
// // king.hello();
//
// class Lion extends Animal {
//   constructor(name, height, color){
//     super(name, height);
//     this.color = color;
//   }
//   hello(){
//     console.log(`Hi i'm ${this.name} from Pride Rock`);
// }
// }
//
// let son = new Lion('simba', 2, 'yellow');
// console.log(son);
// son.hello();

//Static Methods-------------------------------------
// class Calc {
//   static multiply(a, b) {
//     return a*b;
//   }
//
//   static add(a, b){
//     return a+b;
//   }
// }
//
// let a = Calc.multiply(5, 7);
// let b = Calc.add(2, 3);
// console.log(a, b);

//Prototypes-------------------------------
// function Wizard(name, house, pet) {
//   this.name = name;
//   this.house = house;
//   this.pet = pet;
//
//   this.greet = () => `I'm ${this.name} from ${this.house} my ${this.pet}'s name is ${this.pet_name}.`;
//
// }
//
// Wizard.prototype.pet_name;
//
// Wizard.prototype.info = function ()  {
//   return`I have a ${this.pet} named ${this.pet_name}`;
// }
// let harry = new Wizard('Harry', 'Grif', "own");
// harry.pet_name="Hedwig";
// console.log(harry.greet());
// console.log(harry.info());

//Sets and data structures
// let a  =new Set();
// a.add(5);
// a.add(43);
// a.add('woohoo');
// a.add({x:50, y:200});
// console.log(a.has(5));
// console.log(a.size);
// console.log(a);

// let numbers = [5, 7, 8, 13, 17];
// let numSet = new Set(numbers);
// //console.log(numSet);
// for(let element of numSet.values()){
//   console.log(element);
// }

// let chars = 'neiwlugiwelyfliyfi7dfugweg';
// let chars_arr = chars.split('');
// let x = new Set(chars_arr);
// console.log(x);

//Maps
// let a = new Map();
// let key_1 = 'string key';
// let key_2 = {a:'key'};
// let key_3 = function() {};
// a.set(key_1, 'return value for a string key');
// a.set(key_2, 'return value for an object key');
// a.set(key_3, 'return value for a function key');
// console.log(a);
// let numArr = [[1, 'one'], [2, 'two'], [3, 'three']];
// let valMap = new Map(numArr);
// //console.log(valMap);
// for (let [key, value] of valMap.entries()){
//   console.log(`${key} points to ${value}`);
// }
// let string = 'utdu6du6sdm6sduifliugvloewgvlfcleicewuv';
// let letters = new Map();
// for (let i=0; i<string.length; i++){
//   let letter = string[i];
//   if(!letters.has(letter)){
//     letters.set(letter, 1);
//   } else {
//     letters.set(letter, letters.get(letter) + 1);
//   }
// }
//
// console.log(letters);

//Closures
// let call = () => {
//   let secret = 'es6 rocks!';
//   let reveal =  () => {
//     console.log(secret);
//   }
//   return reveal;
// }
// let unveil = call();
// unveil();
//Function Factories
// const addSuffix = (x) => {
//   const concat = (y) => {
//     return y + x;
//   }
//   return concat;
// }
// let addNess = addSuffix('ness');
// console.log(addNess);
// let h = addNess('happi');
// console.log(h);
// let add_full = addSuffix('ful');
// let f = add_full('fruit');
// console.log(f);
// const product = (x) => {
//   return y => {
//     return y * x;
//   }
// }
// const product = x => y => x * y;
//
// let mul = product(5);
// console.log(mul);
// let res = mul(2);
// console.log(res);
//
// let double = product(6);
// console.log(double(9));

//Private methods with Closures
// const budget = () => {
//   let balance = 0;
//   let changeBal = (val) => {
//     return balance += val;
//   }
//   const deposit20 = () => changeBal(20);
//   const drop20 = () => changeBal(-20);
//   const check = () => balance;
//   return{deposit20, check, drop20}
// }
// let wallet = budget();
// console.log(wallet);
// wallet.deposit20();
// console.log(wallet.check());
// wallet.drop20();
// console.log(wallet.check());

//Genorators
// function* letterMaker() {
//   yield 'a';
//   yield 'b';
//   yield 'c';
// }
//
// let letterGen = letterMaker();
// console.log(letterGen.next().value);
// console.log(letterGen.next().value);
// console.log(letterGen.next().value);
// console.log(letterGen.next().value);

// function* countMaker() {
//   let count = 0;
//   while (count < 3){
//     yield count +=1;
//   }
// }
// let count = countMaker();
// console.log(count.next().value);
// console.log(count.next().value);
// console.log(count.next().value);
// console.log(count.next().value);

// function* evens() {
//   let count = 0;
//   while(true){
//     count += 2;
//     let reset = yield count;
//     if(reset == true){
//       count = 0;
//     }
//   }
// }
//
// let x = evens();
// console.log(x.next().value);
// console.log(x.next().value);
// console.log(x.next().value);
// console.log(x.next().value);
// console.log(x.next(true).value);
// console.log(x.next().value);

//Iterators
// const aI = (array) => {
//   let index = 0;
//   return {
//     next: () => {
//       if (index < array.length) {
//         let next = array[index];
//         index += 1;
//         return next;
//       }
//     }
//   }
// }
//
// let it = aI([1, 2, 3]);
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());

// function* aI () {
//   // for (let arg of arguments){
//   //   yield arg;
//   // }
//   yield* arguments;
// }
// let it = aI(1, 2, 3);
// console.log(it.next().value);
// console.log(it.next().value);
// console.log(it.next().value);

//Promises
// let p = new Promise((res, rej) => {
//   setTimeout(() => res('res por data'), 3000)
// })
// p.then(res => console.log(res))
// .catch((err) => console.log(err));
//
// console.log('weeeeeeeeeee')

//Fetch
// const root = `https://www.googleapis.com/books/v1/volumes?q=isbn:0747532699`;
//
// fetch(root, {method: 'GET'})
// .then(res => res.json())
// .then(json => console.log(json));

//es7 or es2016
// let a = Math.pow(2, 5);
// console.log(a);
// let a = 2**5;
// console.log(a);
// let b = 'wonderful'.includes('wonder');
// console.log(b);
// let x = [2, 3, 4, 5, 6].includes(4);
// console.log(x);

//es8 es2017
//
// let obj = {a: 'one', b:'two', c: 'three'};
// let x = Object.keys(obj);
// let y = Object.values(obj);
// let z = Object.entries(obj);
// // console.log(x);
// // console.log(y);
// // console.log(z);
// for (let q of z){
//   console.log(`key: ${q[0]}, value: ${q[1]}`);
// }

//async es8

// async function async_1 (){
//   return 'one';
// }
//
// async function async_2 (){
//   //throw new Error('Issue with async!');
//   return 'two';
// }
//
// async function async_3 (){
//   //throw new Error('Issue with async!');
//   const one = await async_1();
//   console.log(one);
//   const two = await async_2();
//   console.log(two);
// }
// // async_1().then(res => console.log(res));
// // async_2().catch(err => console.log(err));
// //async_3()
// async function async_4 () {
//   const [res_one, res_two] = await Promise.all(
//     [async_1(), async_2()]
//   )
//   console.log(res_one, res_two);
// }
// async_4();
