const userEmail = "lisa@gmail.com";

if (userEmail) {
  console.log("got your email");
} else {
  console.log("don't have user email");
}

// falsy values

//false, 0, -0, bigInt 0n, "", null, undefined, NaN

// truthy values

//true, {}," " , [], 42, "0", "false", new Date(), -42, 3.14, -3.14, Infinity, -Infinity, function()

if (userEmail.length == 0) {
  console.log("empty string");
} else {
  console.log("got email");
}

const emptyObj = {};
if (Object.keys(emptyObj).length === 0) {
  console.log("object is empty");
} else {
  console.log("falsy");
}

//nullish coalescing operator (??): null underfined

let val1;
val1 = 5 ?? 10;

val1 = null ?? 10;
val1 = undefined ?? 15;
val1 = null ?? 10 ?? 20;

console.log(val1);

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");
