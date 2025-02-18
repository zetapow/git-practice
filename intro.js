// let num1 = 2;
// let num2 = 5;

// if (num1 > num2) {
//    console.log('num1 is greater than num2');
// } else if (num1 === num2) {
//    console.log('num1 and num2 are equal');
// } else {
//    console.log('num1 is less than num2');
// }
let str1 = 'apple';
// let str2 = 'orange';
let str2 = 'apple';

str1 === str2
   ? console.log('str1 is the same str2')
   : console.log('str1 and str2 is not the same');

// ------------------------------------------------------ //
// ------------- CAN HE/SHE DRIVE ? EXERCISE ------------ //
// ------------------------------------------------------ //

/*
 
    On this exercise we are checking if a person meets all the requirements to drive.
 
    1. Create a variable for the name of the driver
    2. Create a variable for the age of the driver
    3. Create a variable to check if the driver has a driver license
    4. Create a variable to check if the driver had a few drinks
    5. Create a variable to check if the driver has a car
 
 
    6. Create a variable to check if the driver is of legal age (Hint - Comparison Operator)
    7. Create a variable to check if the driver can drive (Hint - Logical Operator)
 
    8. With console.log if the person can drive or not in a sentence.
    'Jonh Doe can drive.' or 'Jonh Doe can not drive. He/She did not meet the requirements.'
*/

const driverName = 'Joe';
const driverAge = 24;
const hasLicense = true;
const hadDrinks = false;
const hasCar = true;

const legalDrivingAge = driverAge >= 18;
const canDrive = legalDrivingAge && hasLicense && !hadDrinks && hasCar;

// const driverResult = canDrive
//    ? console.log(`${driverName} can drive`)
//    : console.log(
//         `${driverName} cannot drive. They do not meet the requirements`
//      );
const driverResult = canDrive
   ? `${driverName} can drive`
   : `${driverName} cannot drive. They do not meet the requirements`;

console.log(driverResult);
// display driverCheck in HTML
document.getElementById('driverCheck').textContent = driverResult;
