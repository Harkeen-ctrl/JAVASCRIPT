// freecodecamp.org
/* thank you freecodecamp for 
teaching javascript for free */
/* data types: 
undefined, null, boolean, string, number, and object */
var myName = 'HARKEEN';
myName = 8;
let ourName = "freecodecamp";
var a;
console. log(a)
a = 7;
var b = 2; 
b = a;
console. log(a)
// Declarations
var studlyCapVar;
var properCamelCase;
var titleCaseOver;
// Assignments
studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;

// arithmetic(addition, subtraction, multiplication and division)   
var sum = 10 + 10;
console. log(sum)

var difference = 50 - 10;
console. log(difference)

var product = 10 * 8;
console. log(product)

var quotient = 10 / 5;
console. log(quotient)
// Incrementing number
var myVar = 95
myVar = myVar + 1;
//or myVar++;
var myVar = 11;
myVar = myVar - 1; 
//myVar--;
var product = 2.78 * 0.88;
var quotient = 2.2 / 2.2;
var remainder;
remainder = 11 % 3;


var a = 3;
var b = 17;
var c = 12;
var d = 10

a += 12; // a = a + 12;
b *= 9; // b = b * 9; 
c -= 8; // c = c - 8;
d /= 5; // d = d / 5;



 
// STRING
var myFirstName = "OLUWAPELUMI";
var myLastName = "AKINPADE"

var myStr = "i am a\"double quoted\" string inside\"double quote\"";
console. log(myStr)  

var myStr = "<a href=\"http://www.example.com\" target=\"_blank\">Link</a>";

/*****
 CODE OUTPUT
 \' SINGLE QUOTE
 \" DOUBLE QUOTE
 \\ BACKSLASH
 \n NEW LINE
 \r CARRIAGE RETURN
 \t TAB
 \b BACKSPACE
 \f FORM FEED
 *****/
var myStr = "firstline\n\t\\secondline\nthirdline"
//example
var myStr = "this is the start, " + "this is the end.";

var myStr = "i come first. ";
myStr += "i come second.";
console.log(myStr);


//concatenation of strings
const myName = "oluwapelumi";
const myStr = "my name is " + myName + ", how are you doing?";
console.log(myStr);

//appending variable to a string
const anAdjective = "cool";
const myStr = "freecodecamp is ";
myStr += anAdjective;

//finding lenght of a string


const firstNameLenght = 0;
const firstName = "pelumi";
firstNameLenght = firstName.length;
console.log(firstNamelenght)

const myStr = "jello world";
myStr = "hello world";

const firstNAME = "harkeen";
const lastLetterOfFirstName = firstNAME[firstNAME.lenght -1];
const firstLetterOfFirstName = firstNAME[0];

//function myAdjective = "big";

// 
function wordBlanks(myNoun, myAdjective, myverb, myAdvberb) {
    var result = "";
    result += "the " + myAdjective + " " + myNoun + " " + myverb + " to the store " + myAdvberb
    return result;
}
console.log(worldBlanks("dog","big","ran","quickly"));
var ourArray = ["john", 23];

//nested array 
const ourArray = [["the umiverse", 40],["harkeen design", 100]];
var myData = ourArray[0][1];
console.log(myData) // result is 40.

const ourArray = [20, 30, 40];
const ourData = ourArray[0]; // Equal 20

const miArray = [18, 64, 30];
miArray[2] = 45; // result is [18, 64, 45].
console.log(miArray)


//push array(adds to the end of an
const ourArray = ["pade", "mojo", "gbade"];
ourArray.push(["kolly", "danny"]);
// ourArray now equals ["pade", "mojo", "gbade" ["kolly", "danny"]]

//pop array(removes last item)
const ourArray = ["pade", "mojo", "gbade"];
const removedFromArray = ourArray.pop();
// ourArray now equals pade mojo
// removedfromAarray EQUALS "gbade"

//SHIFT FUNCTION removes the first variable of an array
const ourArray = ["pade", "mojo", "gbade"];
var removeFromArray = ourArray.shift();
// ourarray now equals "mojo" "gbade"
//removefromarray equals "pade"

//UNSHIFT FUNCTION
var ourArray = [ "HARKEEN", "j", "car"]
ourArray.unshift(); // ourArray equals "j" "car"
ourArray.unshift("happy"); // ourArray equals [ "happy", "j", "car"]

//SHOPPING LIST
const myList = [["cereal", 3], ["milk", 2], ["bananas", 8], ["juice",4],["eggs", 10]];

function ourReuseableFunction() {
    console.log("hello, world");
}
ourReuseableFunction();

function myFunction(a, b) {
    console.log(a - b);
}

myFunction(10, 7); //output will be 3.

 //GLOBAL SCOPE

const myGlobal = 10;

function fun() {
    oopsGlobal = 5;
 }
function fun() {
    var output = "";
    if(typeof myGlobal !="undefined"){
        output += "myGlobal: " + myGlobal;
    }
    if( typeof oopsGlobal != "undefined"){
        output += " oopsglobal; " + oopsGlobal;
    }
}
consple.log(output);
fun(1);
fun(2);

//LOCAL SCOPE
function myLocalScope(){
    var myVar = 5;
    console.log(myVar);
}
myLocalScope();

//GLOBAL AND LOCAL SCOPE
var outwear = "T-shirt";
function myOutfit(){
    var OuterWear = "Sweater"


    return outwear;
}
console.log(myOutfit());
console.log(outwear)

//RETURN VALUE FROM A FUNCTION WITH RETURN
function minusSeven(num) {
    return num -7;

}
console.log(minusSeven(10));

 var Change = 0;
 function change(num){
    return (num + 5) / 3;
 }
changed = change(10);

//booleans 
function welcomeToBooleans() {
    return false;
}

function trueOrFalse(wasThatTrue) {
    if (wasThatTrue) {
        return "yes, that was true";
    }
    return "no, that was false";
}
console.log(trueOrFalse(true));

function testEqual(val){
    if (val == 12){
        return "Equal";
    }
    return "Not equal";
}
console.log(testEqual(10));

function compareEquality(a, b) {
    if (a == b){
        return "equal";
    }
    return "not equal";
}
console.log (compareEquality(10, "10"))
console.log (testNotEqual(10));console.log (testNotEqual(10));console.log (testNotEqual(10));

function testNotEqual(val) {
    if (val != 99 ) {
        return "not  equal";
    }
    return "equal";
}
console.log (testNotEqual(10));
// NOT EQUAL.

function testStrictNotEqual(val) {
    if (val!== 17) {
        return "not equal";
    }
    return "equal";
}
console.log (testStrictNotEqual(10));
/* 10 != 17
   10 !== "10*/
// not equal.
function testGreaterThan(val){
    if (val > 100) {
        return "Over 100";
    }
    if (val > 10) {
        return "Over 10";
    }
    return "10 0r Under";
}
console.log(testGreaterThan(10));

function testGreaterThanOrEqual(val){
    if (val >= 20) {
        return "20 or Over";
    }
    if (val >= 10) {
        return "10 or Over";
    }
    return "Less than 10";
}
console.log(testGreaterThanOrEqual(10));
//"10 or Over"

function testLessThan(val) {
    if (val < 20) {
        return "less than 20";
    }
    if (val < 55) {
        return "less than 55";
    }
    return "55 or over";
}
console.log (testLessThan(60));
// 55 or over

function testLessThanOrEqual(val) {
    if (val <= 12){
        return "smaller than or equal to 12";
    }
    if (val <= 24){
        return "smaller than or equal to 24";
    }
    return "more than 24";
}

console.log(testLessThanOrEqual(10));
// smaller than or equal to 12

function testLogicalAnd(val){
    if (val <= 50 && val >= 25) {
        return "YES";
    }
    return "no";
}
console.log (testLogicalAnd(10));
// NO

function testLogicalOr(val){
    if(val < 10 || val > 20 ) {
        return "outside";
    }
    return "inside";
}
console.log(testLogicalOr(15));
// INSIDE.

//ELSE STATEMEMT
function testElse(val){
    var result = "";
    if (val > 5){
        result = "Bigger than 5";
    } else {
        result = "5 or smaller";
    }
    return result;
} 
console.log(testElse(4));

//ELSE IF 
function testElseIf(val){
    if (val > 10){
        return "greater than 10";
    } else if (val < 5 ){
        return "smaller than 5";
    } else {
        return "between 5 and 10";
    }
}
console.log (testElseIf(7));
// between 5 and 10.
function orderMyLogic(val){
    if (val < 5){
        return "less than 5";
    } else if (val < 10){
        return " less than 10";
    } else {
        return "greater than or equal to 10";
    }
}
console.log(orderMyLogic(3));
// less than 5.

//CHAINING IF ELSE STATEMENTS.
function testSize(num) {
    if (num < 5){
        return "Tiny";
    } else if (num < 10){
        return "Small";
    } else if (num < 15){
        return Medium;
    } else if ( num < 20){
        return "Large"
    } else {
        return "Huge";
    
    }
}
console.log (testSize(19));
// Large

//GOLF CODE.
var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey","Go Home!"]
function golfscore (par , strokes){
    if (strokes == 1){
        return names[0];
    } else if (strokes <= par -2) {
        return names[1];
    } else if (strokes == par -1) {
        return names[2];
    } else if (strokes == par) {
        return names[3];
    } else if (strokes == par + 1) {
        return names[4];
    } else if (strokes == par + 2) {
        return names[5];
    } else if (strokes == par + 3) {
        return names[6];
    }
}
console.log (golfscore(5, 2))
// double bogey.

//case switch
function caseInSwitch(val) {
    var answer = "";
    switch(val) {
        case 1:
            answer = "alpha";
            break;
        case 2:
            answer = "beta";
            break;
        case 3:
            answer = "gamma";
            break;
        case 4:
            answer = "delta";
            break;
        default:
            answer = "stuff";
            break;
    }
    return answer;
}
console.log(caseInSwitch(3));
 /* 
 var names = ["alpha", "bata","gamma", "delta"]
 function soccerCase(val){
    if (val == 1){
        return names[0];
    } else if (val == 2){
        return names[1];
    } else if (val == 3){
        return names[2];
    } else if (val == 4){
        return names[3];
    }
 }
 console.log(socerCase(3))
 */

function sequentialSizes(val){
    var answer = "";
    switch (val) {
        case 1:
        case 2:
        case 3:
            answer = "Low";
            break;
        case 4:
        case 5:
        case 6:
            answer = "Mid";
            break;
        case 7:
        case 8:
        case 9:
            answer = "High";
            break;
    }
    return answer;
}
console.log(sequentialSizes(9))
//HIGH
//returning boolean function;
function isLess(a, b){
    if (a < b) {
        return true;
    } else {
        return false;
    }
}
/* function isLess(a, b){
    return (a < b);
    }
 */
console.log(isLess(10, 15));

function abTest(a, b) {
    if( a < 0 || b < 0) {
        return undefined;
    }

    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}
console.log(abTest(2, 2));


var count = 0;

function cc(card) {
    switch(card){
        case 2:
        case 3:
        case 4:
        case 5:
        case 6: 
            count++;
            break;
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            count--;
            break;
           
    }
    var holdbet = "Hold"
    if (count > 0){
        holdbelt = "bet"
    }
    return count + " " + holdbet;
    
    return "change me";
}
cc(2); cc(3); cc(10); cc("K"); cc("A");
console.log(cc("A"));

//objects

var ouDog = {
    "name":"camper",
    "legs": 4,
    "tails": 1,
    "friends":["everything!"]
};

var myDog = {
   "name": "Milly",
   "legs": 4,
   "tails": 2,
   "friends of milly": []
};

var nameValue = myDog.name;
var tailsValue = myDog.tails;
 // if an object has a space we use bracket notation
var friendsvalue = myDogs["friends of milly"];

var testObj = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
};


var playerNumber = 16;
var player = testObj[playerNumber];

//SETTING OBJECTS TO NEW NOTATIONS

var myHubby = {
    "name": "Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freecodecamp campers"]
};

myHubby.name = "Happy Coder";
// ADDING PROPERTIES TO AN OBJECT
myHubby["bark"] = "woof!"

// DELETING PROPERTY FROM AN OBJECT
delete myHubby.tails;

//using objects for lookups

function phoneticLookup(val){
    var result = "";

    var lookup = {
        "alpha": "Adams",
        "bravo": "Boston",
        "charlie": "Chicago",
        "delta": "Denver",
        "echo": "Easy",
        "foxtrot": "Frank"

    };
    result = lookup[val]
}
console.log (phoneticLookup("alpha"));

//TESTING OBJECTS FOR PROPERTIES

var myObj = {
    gift: "pony",
    pet: "kitten",
    bed: "sleigh"
};
function checkObj(checkProp) {
   if (myObj.hasOwnProperty(checkProp)) {
    return myObj[checkProp];
   } else {
    return "Noy Found";
   }
}
console.log(checkObj("gift"));

//MANIPULATING COMPLEX OBJECTS

var myMusic = [
    {
        "artist": "Billy Joel",
        "tittle": "Piano Man",
        "release_year": 1973,
        "formats":[
            "CD",
            "8T",
            "LP"
        ],
        "gold": "True"
    },
    {
        "artist": "KUNLEX",
        "tittle": "Show Me Love",
        "release_year": 2022,
        "formats":[
            "CD",
            "Youtube Vidoe",
            "LP"
        ],
        "gold": "True"
    }
];

//accessing Nested Objects

var myStorage = {
    "car": {
        "inside":{
            "glove box": "maps",
            "passenger seat": "crumbs"
        },
        "outside": {
            "trunk": "jack"
        }
    }
};
var gloveBoxContents = myStorage.car.inside["glove box"];

console.log(gloveBoxContets)

//ACCESSING NESTED ARRAYS
var myPlants = [
    {
        type: "flowers",
        list: [
            "rose",
            "tulip",
            "dandelion"
        ]
    },
    {
        type: "trees",
        list: [
            "fir",
            "pine",
            "birch"
        ]
    }
];
var secondTree = myPlants[1].list[1];
// "pine" is the result

var collection = {
    "2548": {
        "album": "slippery when wet",
        "artist": "Bon Jovi",
        "tracks": [
            "Let It Rock",
            "You Give Love a Bad Name"
        ]
    },
    "2468": {
        "album": "1999",
        "artist": "prince",
        "tracks":[
            "1999",
            "Little Red Corvette"
        ]
    },
    "1245": {
        "artist": "Robert Palmer",
        "tracks":[]
    },
    "5439": {
        "artist": "ABBA Gold"
    }
};

var collectCopy = JSON.parse(JSON.stringify(collection));

function updateRecords(id, prop, value) {
    if (value === ""){
        delete collection[id][prop];
    } else if(prop === "tracks") {
        collection[id][prop] = collection [id][ptop] || [];
        collection[id][prop].push(value);  
    } else {
        collection[id][prop] = value;
    }

    return collection;

}

console.log(updateRecords(5439,"artist", "ABBA"));


//ITERATE WITH WHILE LOOPS (RUNNING THE SAME CODE MULTIPLE TIMES)
var myArray = [];
var i = 0

while(i < 5) {
    myArray.push(i);
    i++;

}
console.log(myArray); //[0, 1, 2, 3, 4]

//iterate with for loops
var ourArray = [];
for (var i = 1; i < 7; i++) {
    ourArray.push(i);
}
console.log(ourArray); //[1, 2, 3, 4, 5, 6]

//itterate odd numbers with for loop7
 
var ourArray = [];
for (var i = 0; i < 10; i += 2) {
    ourArray.push(i);
}
console.log(ourArray);

var myArray = [];
for (var i = 1; i > 10; i +=2) {
    myArray.push(i);
}
console.log(myArray);

// count backwards with for loop
var ourArray = [];
for (var i = 5; i > 0; i--) {
    ourArray.push(i);
}
console.log(ourArray)

var ourArray = [];
for (var i = 10; i > 0; i -=2) {
    ourArray.push(i);
}
console.log(ourArray);

var myArray = [];
for (var i = 9; i > 0; i -=2) {
    myArray.push(i);
}
console.log(myArray);

//iterate through an array with a for loop

var ourArr = [9, 10, 11, 12];
var ourTotal = 0;
for (var i = 0; i < ourArr.length; i++) {
    ourTotal += ourArr[i];
}
console.log(ourTotal);

var myArray = [2, 4, 6, 8, 9];
var total = 0;
for (var i = 0; i < myArray.length; i++) [
    total += myArray[i]
]
console.log(myArray);

//nesting for loops
function multiplyAll(arr) {
    var product = 1;

    for (var i = 0; i < arr.lenght; i++) {
        for (var j = 0; j < arr[i].lenght; j++) {
            product *= arr[i][j]
        }
    
    }
    return product;
}
var product = multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);

console.log(product);

//iterate with do while loops
var myArray = [];
var i = 10;

do {
    myArray.push(I);
    i++;
} while(i < 5)
console.log(i, myArray)

// profile lookup
var contacts = [
    {
        "firstName": "oluwapelumi",
        "lastName": "ademola",
        "number": "08146122380",
        "likes": ["shawarma", "coding", "Eba"]
    },
    {
        "firstName": "olakunle",
        "lastName": "olusegun",
        "number": "09017825010",
        "likes": ["nft&crypto", "smart", "ife"]

    },
    {
        
        "firstName": "tobi",
        "lastName": "ige",
        "number": "07035408250",
        "likes": ["plumber", "nice", "fufu"]
        
    },
    {
        
        "firstName": "glory",
        "lastName": "adekunle",
        "number": "08055439250",
        "likes": ["badguy", "smart", "weed"]
    }

];
function lookUpProfile(name, prop){
    for(var i = 0; i < contacts.length; i++){
        if(contacts[i].firstname === name) {
            return contacts[i][prop] || "No such property";

        }
    }
    return "No such contact";


}
var data = lookUpProfile("olakunle", "likes");
console.log(data);

// Generate Random Fractions

function randomFraction() {

    return Math.random();
}

console.log(randomFraction());

//Generate Random Whole Numbers

var randomMunberBetween0and19 = Math.floor(Math.random() * 20);
function randomWholeNum() {


    return Math.floor(Math.random() * 10);
}
console.log(randomWholeNum());

//Generate Random Whole Numbers Within A Range

function RandomRange(ourMin, ourMax) {

    return Math.floor(math.random() * (ourMax - ourMin + 1)) + ourMin;
}

var myRandom = RandomRange(1, 9);

console.log(myRandom);

// Use The ParseInt Function

function convertTointegr(str) {
    return parseInt(str);
      

}
convertToInteger("56");

// Use the parseInt Function with a Radix
function convertToInteger(str) {
    return parseInt(str, 2)

}

convertToInteger("10011");

//Use the Conditional (terniary) operator

// condition ? statement-if-true ; statement-if-false;
function checkEqual(a,b) {
    /* if (a === b) {
        return true;   
    } else {
        return false;
    }*/
   return a === b ? true : false;
}


checkEqual(1,2);

// UsebMultiple Conditional (Terniary) Operators

function checkSign(num) {
    return num > 0 ? "positive" : num < 0 ? "negative" : "zero"
}
console.lod(checkSign(10));

// difference between var and let keywords
let catName = "quincy";
let quote;

catName = "Beau";
function catTalk() {
    "use strict";
    catName = "olivier";
    quote = catName + " says meow!";
}
catTalk();

//compare scopes of the var and let keywords
function checkScope() {
    "use strict";
    let i = "function scope";
    if (true) {
        let i = "block scope";
        console.log("Block scope i is: ", i);
    }
    console.log("Function scope i is: ", i);
    return i;
} 

checkScope();

// Declare a read-only Variable with the const Keyword

function printManyTimes(str) {
    "use strict";
    const SENTENCE = str + " is cool";

    for(let i = 0; i < str.lenght; i+=2) {
        console.log(SENTENCE);
    }
}
printManyTimes("freecodecamp");

//Mutate an Array Declared With consts

const s = [5, 7, 2];
function editInPlace() {
    "use strict";
    //s = [2, 5, 7];
    s[0] = 2;
    s[1] = 5;
    s[2] = 7;

} 
editInPlace();
console.log(s)

//prevent object mutation

function freezeobj() {
    "use strict";
    const MATH_CONSTANTS = {
        PI: 3.142
    };

    Object.freeze(MATH_CONSTANTS);
    try{
        MATH_CONSTANTS.PI = 99;
    } catch( ex ) {
        console.log(ex);
    }
    return MATH_CONSTANTS.PI;
}
const PI = freezeobj();

//USE ARROW FUNCTION

const magic = () =>new Date();

//with parameters

const myConcat = (arr1, arr2) => arr1.concat(arr2);

console.log(myConcat([1, 2], [3, 4, 5]));

// higher order arrow function
const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];

const squareList = (arr) => {
    const squaredIntegers = arr.filter(num => number.isInteger(num) && num > 0).map(x => x * x);
    return squaredIntegers
};

const squaredIntegers = squareList(realNumberArray);


const increment = (function() {
    return function increament(number, value = 1) {
        return number + value;
    };
}) ();
console.log(increment(5, 2));
console.log(increment(5));

//use rest operator with function parameters
const sum = (function() {
    return function sum(...args) {
       return arguments.reduce((a, b) => a + b, 0);
    };
});

console.log(sum(1, 2, 3, 4));

//use spread operator to evaluate arrays in-place
const arr1 = ["JAN", "FEB", "MAR", "APR", "MAY"];
let arr2;
(function (){
    arr2 = [...arr1];
    arr1[0] = "potato"
})();
console.log(arr2);
// runs arr1

//use destructing assignments to asssign variables from objects

var voxel = {x: 3.6, y: 7.4, z: 6.54 };
var x = voxel.x; // x = 3.6
var y = voxel.y; // y = 7.4
var z = voxel.z; // z = 6.54

const {x : a, y : b, z : c } = voxel; // a = 3.6, b = 7.4, c = 6.54

const   AVG_TEMPERATURES = {
    today: 77.5,
    tomorrow: 79
};

function  getTempOfTmrw(avgTemperature) {
    "use strict";
    const { tomorrow : tempOfTomorrow } = avgTemperature;

    return tempOfTomorrow;
}

console.log(getTempoOfTmrw(AVG_TEMPERATURES)); // should be 79

const LOCAL_FORECAST = {
    today: {min: 72, max: 83},
    tomorrow: {min:73.3, max: 84.6}
};
function getMaxOfTmrw(forecast) {
    "use strict";
    const {tomorrow : {max : maxOfTomorrow }} = forecast;
    return maxOfTomorrow;
}

console.log(getMaxOfTmrw(LOCAL_FORECAST));

// use destructuring assignment to assign variables from arrays
const [z, x] = [1, 2, 3, 4, 5, 6];
console.log(z, x);

let a = 8, b = 6;
(() => {
    "use strict";
    [a, b] = [b, a]


}) ();

// use destructuring assignment with the rest operator
const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function removeFirstTwo(list) {

    const [, , ...arr ] = list;

    return arr;
}
const arr = removeFirstTwo(source);
console.log(arr);
console.log(source); 

//use destructring assignmemt to passs an object as a function's parameter
const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
};
const half = (function() {
    return function half({max, min}) {
        return (max + min) / 2.0;
    };
})();
console.log(stats);
console.log(half(stats));

//create strings using template literals

const person = {
    name: "zodaic hasbro",
    age: 56
};

const greeting = 'hello, my name is ${person.name}! i am ${person.age} years old.';

console.log(greetings);

const result = {
    successs: ["max-lenght", "no_amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["id-blacklist", "no-dup-keys"]
};
function makeList(arr) {
    const resultDisplayArray = null;

    return resultDisplayArray;
}

// write concise object literal declaration using simple fields
const createPerson = (name, age, gender) => ({ name, age, gender});
   
   /* return {
        name: name,
        age: age,
        gender: gender
    }; */

console.log(createPerson("zodaic hasbro", 56, "male"));

//write concise declarative functions
const bicycle = {
    gear: 2,
    setgear /*: function */(newGear) {
        "use strict";
        this.gear = newGear
    }
};
bicycle.setgear(3);
console.log(bicycle.gear);


// use class syntax to define a constructor function
class spaceShuttle {
    constructor(targetPlanet){
      this.targetPlanet = targetPlanet;
    }
}
var zeus = new spaceShuttle('jupiter');

console.log(zeus.targetPlanet)

//use getters amd setters tp control acess to an object
class Book{
    constructor(author) {
        this.author = author
    }
    //getter
    get writer() {
        return this._author;
    }
    //setter
    set writer(updatedAuthor){
        this._author = updatedAuthor;
    }
}
 
function makeClass() {
    class Thermostat {
        constructor(temp) {
            this._temp = 5/9 * (temp - 32);
        }
        get temperature(){
            return this._temp;
        }
        set temperature(updatedTemp){
            this._temp = updatedtemp;
        }
    }
    return thermostat; 
}

const Thermostat = makeClass();
const thermos = new Thermostat(76);
let temp = thermos.temperature;
thermos.temperature = 26;
temp = thermos.temperature;
console.log(temp);

//understand the difference between import and require


 










































 







 





















































 




 



























