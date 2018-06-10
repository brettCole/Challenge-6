let arr = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];
let target = 982;
// used array from question one
// just created random target value from array
// first for loop iterates value against each value of array
// second for loop compares first for loop value against each value in array
// if at end of loops answerArr is empty return 'Sorry' string


function questionTwo(arr, target) {
  let answerArr = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target && arr[i] !== arr[j]) {
        answerArr.push(arr[i], arr[j]);
        return answerArr;
      }
    }
  }
  if (answerArr.length === 0) {
    return 'Sorry no numbers combined equal that target value.'
  }
}

console.log(questionTwo(arr, target));