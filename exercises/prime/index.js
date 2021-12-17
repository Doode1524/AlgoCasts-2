const isPrime = (num1, num2) => {
  let primeArray = [];
  if (num1 < num2) {
    for (let i = num1; i <= num2; i++) {
      let isPrime = true;
      for (let j = 2; j < i; j++) {
        if (i % j === 0) {
          isPrime = false;
        }
      }
      if (isPrime) {
        primeArray.push(i);
      }
    }
  } else {
    for (let i = num1; i <= num2; i++) {
      let isPrime = true;
      for (let j = 2; j < i; j++) {
        if (i % j === 0) {
          isPrime = false;
        }
      }
      if (isPrime) {
        primeArray.push(i);
      }
    }
  }

  return primeArray;
};
const hello = "Hello World";
// reverse the words in a string
const reverseWords = (str) => {
  let newStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  return newStr;
};
