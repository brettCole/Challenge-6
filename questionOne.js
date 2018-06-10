let arr = [1,'10',2,4,591,392,391,2,'3','2',5,10,2,1,1,1,20,20];
// first sort array of numbers and strings
// first check if number is string push into separate variable array
// second if check value equals next value in array and push into nestedArr if so
// third if value doesn't equal next value in array push that current value into nestedArr then push nestedArr into finalArr and reset nestedArr to empty array
// finally if no if statements pass just push value into finalArr

function sortArray(arr) {
  return arr.sort((a, b) => {
    return a - b;
  })
}

function questionOne(arr) {
  let finalArr = [], nestedArr = [], stringArr = [];
  let newArr = sortArray(arr);
  
  for (let i = 0; i < newArr.length; i++) {    
    if (typeof(newArr[i]) === 'string') {
      stringArr.push(newArr[i]);
    } else if (newArr[i] === newArr[i + 1] || newArr[i] === parseInt(newArr[i + 1])) {
      nestedArr.push(newArr[i]);
    } else if (newArr[i] !== newArr[i + 1] && newArr[i] === newArr[i - 1]) {
      nestedArr.push(newArr[i]);
      finalArr.push(nestedArr);
      nestedArr = [];
    } else {
      finalArr.push(newArr[i]);
    }
  }
  finalArr.push(stringArr);
  return finalArr;
}

console.log(questionOne(arr));