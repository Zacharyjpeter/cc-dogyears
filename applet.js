//assigns a value to myAge
let myAge = 28;
//assigns early dog year value to 2
let earlyYears = 2;
earlyYears *= 10.5;
//subtracts two from my age to offset early years
let laterYears = myAge - 2;
//accounts for dog years age difference in my later years
laterYears *= 4;
//I have no idea what these numbers should be lol
console.log(earlyYears);
console.log(laterYears);
//outputs my age in dog years
let myAgeInDogYears = earlyYears + laterYears;
console.log(myAgeInDogYears);
//assigns my name to a variable and lowercases it
let myName = "Zachary"; myName.toLowerCase();
//displays my name and age in dog years
console.log(`My name is ${myName}. I am ${myAge} years old. This is ${myAgeInDogYears} in dog years.`);