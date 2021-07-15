// **********************************************
// Creating arrays

// 1
const arr = [1, 2, 3];
console.log(arr);
// 2
const arr2 = new Array(1, 2, 3);
console.log(arr2);
// 3
const arr3 = Array(1, 2, 3);
console.log(arr3);
// 4
const arr4 = Array.of(1, 2, 3);
console.log(arr4);
// 5
const arr5 = Array.from('Some string');
console.log(arr5);

// **********************************************
// NESTED ARRAYS

const nestArr = [[1, 2, 3], [4, 5, 6]];

for (let data of nestArr) {
    for (let dataPoint of data) {
        console.log(dataPoint);
    }
}

// **********************************************
// ADD DATA TO ARRAY

const hobbies = ['Sports', 'Reading'];
// add at the end of the array
hobbies.push('Cooking');
console.log(hobbies);
// add at the beginning of the array
hobbies.unshift('Running');
console.log(hobbies);
// remove element at the beginning of the array
hobbies.shift();
console.log(hobbies);
// remove element at the end of the array
hobbies.pop();
console.log(hobbies);

// **********************************************
// USE splice() METHOD TO ADD, REMOVE FROM ARRAY

// add a new hobbie afeter the first element of the array
hobbies.splice(1, 0, 'Coding');
console.log(hobbies);

// delete hobbie from array
// array before deleting ['Sports', 'Coding', 'Reading']
// hobbies.splice(0, 1);
// console.log(hobbies); // ['Coding', 'Reading'];

// **********************************************
// USE slice() METHOD TO copy array
const newArr = hobbies.slice();
console.log('newArr', newArr);

// **********************************************
// USE concat() METHOD TO COMBINES ARRAYS INTO ONE ARRAY
const newArray = ['Swimming', 'Running'];
const concatTwoArrays = newArray.concat(hobbies);
console.log(concatTwoArrays);
