"use strict";
const logDetails = (uid, item) => {
    console.log(`A product with UID: ${uid} has a name of ${item.name}`);
};
const greet = (user) => {
    console.log(`Hello ${user.name}, your UID is ${user.uid}`);
};
const greetAgain = (user) => {
    console.log(`Hello again ${user.name}!`);
};
