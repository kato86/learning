// **********************************************
// ARRAYS
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

// **********************************************
// USE indexOf() METHOD TO SEARCH ELEMENT FROM ARRAY
console.log(concatTwoArrays.indexOf('Running'));

// check and find index of 'Running' hobbie, and use if statement to delete this hobbie
if (concatTwoArrays.indexOf('Running')) {
    const elemIndex = concatTwoArrays.indexOf('Running');
    concatTwoArrays.splice(elemIndex, 1);
}
console.log(concatTwoArrays);

// **********************************************
// USE find() and findIndex() METHOD TO SEARCH ELEMENT FROM ARRAY

const personData = [{ name: 'Kamil' }, { name: 'Bob' }];
const kamil = personData.find((person, idx, persons) => {
    console.log('person: ', person);
    console.log('idx: ', idx);
    console.log('persons: ', persons);
    return person.name === 'Kamil';
});
console.log(kamil);

const bobIndex = personData.findIndex((person, idx, persons) => {
    return person.name === 'Bob';
});
console.log('bobIndex', bobIndex);

// **********************************************
// USE includes() METHOD TO FIND ELEMENT IN ARRAY
const includeArray = [1.1, 1.2, 1.3, 1.4];
console.log('includes: ', includeArray.includes(1.2));

// **********************************************
// USE forEach() METHOD TO FIND ELEMENT IN ARRAY

const prices = [11.99, 6.99, 4.99];
const tax = 0.23;
const taxAdjustedPrices = [];

prices.forEach((price, idx, prices) => {
    // taxAdjustedPrices.push(price * (1 + tax));
    const priceObj = { index: idx, taxAdjPrice: price * (1 + tax) };
    taxAdjustedPrices.push(priceObj);
});
console.log(taxAdjustedPrices);

// **********************************************
// USE map() METHOD TO FIND ELEMENT IN ARRAY

const mapPrices = [11.99, 6.99, 4.99];
const mapTax = 0.23;

const mapTaxAdjustedPrices = mapPrices.map((price, idx, prices) => {
    const priceObj = { index: idx, taxAdjPrice: price * (1 + tax) };
    return priceObj;
});
console.log('prices: ', mapPrices);
console.log('taxAdjustedPrices', mapTaxAdjustedPrices);

// **********************************************
// USE sort() METHOD TO SORT ELEMENT IN ARRAY

const sortPrices = [11.99, 6.99, 4.99].sort((a, b) => {
    return a - b;
});
console.log('Sort: ', sortPrices);

// **********************************************
// USE filter() METHOD TO SORT ELEMENT IN ARRAY

const filteredArray = prices.filter((price, index, prices) => {
    return price > 6;
});
console.log('Filtered prices: ', filteredArray);