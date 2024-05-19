function processArray(arr) {
    return arr.map(num => {
        if (num % 2 === 0) {
            return num * num;
        } else {
            return num * 3;
        }
    });
}

// eg
const inputArray = [1, 2, 3, 4, 5];
const resultArray = processArray(inputArray);
console.log(resultArray); 
