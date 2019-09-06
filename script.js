/* runs test to see if expected argument is === to value returned by function2test argument */
function myFunctionTest(expected, function2test) {
  let result = function2test();

  if (Array.isArray(expected)) {
    expected = expected.toString();
  }
  if (Array.isArray(result)) {
    result = result.toString();
  }
  if (expected === result) {
    return "TEST SUCCEEDED";
  } else {
    return "TEST FAILED.  Expected " + expected + " found " + function2test();
  }
}

//Question 2 :
function max(n1, n2) {
  if (n1 > n2) return n1;
  return n2;
}
console.log(
  "Expected output of max() is 2  " +
    myFunctionTest(2, function() {
      return max(1, 2);
    })
);

//Question 3 :
function maxOfThree(n1, n2, n3) {
  if (n1 > n2 && n1 > n3) return n1;
  else if (n2 > n1 && n2 > n3) return n2;
  else return n3;
}

console.log(
  "Expected output of maxOfThree() is 7  " +
    myFunctionTest(7, function() {
      return maxOfThree(1, 7, 5);
    })
);

//Question 4 :
function isVowel(char) {
  switch (char) {
    case "A":
    case "a":
    case "I":
    case "O":
    case "o":
    case "E":
    case "e":
    case "U":
    case "u":
      return true;
    default:
      return false;
  }
}

console.log(
  "Expected output of isVowel() is true  " +
    myFunctionTest(true, function() {
      return isVowel("A");
    })
);

//Question 5a:
function sum(numbers) {
  let s = 0;
  for (let i = 0; i < numbers.length; i++) {
    s = s + numbers[i];
  }
  return s;
}
console.log(
    "Expected output of sum() is 10  " +
      myFunctionTest(10, function() {
        return sum([1,2,3,4]);
      })
  );

//Questions 5b:
function multiply(numbers){
    let a = 1;
    for (let i = 0; i < numbers.length; i++) {
        a=a*numbers[i];
    }
    return a;
}
console.log(
    "Expected output of multiply() is 24  " +
      myFunctionTest(24, function() {
        return multiply([1,2,3,4]);
      })
  );

  //Question 6 : 
  function reverse(str){
      let arr = [];
      for(let i=str.length-1;i>=0;i--){
        arr.push(str.charAt(i));
      }
      return arr.join("");

  }

  console.log(
    "Expected output of reverse() is tset  " +
      myFunctionTest("tset", function() {
        return reverse("test");
      })
  );

  //Question 7 : 
  function findLongestWord(words){
      let longest = words[0];
      for(let i=0;i<words.length;i++){
          if(words[i].length > longest.length){
              longest = words[i];
          }continue;
      }
      return longest.length;
  }

  console.log(
    "Expected output of findLongestWord() is 4  " +
      myFunctionTest(4, function() {
        return findLongestWord(["ab","abc","abcd"]);
      })
  );

  //Question 8 :
  function filterLongWords(words,i){
    let filtered = [];
    for(let j=0;j<words.length;j++){
        if(words[j].length>i){
            filtered.push(words[j]);
        }
    }
    return filtered;
  }

  console.log(
    "Expected output of filterLongWords() is abcd  " +
      myFunctionTest(["abcd"], function() {
        return filterLongWords(["ab","abc","abcd"],3);
      })
  );

  //Question 9 : 

const a = [1,3,5,3,3]; 
const b = a.map(function(elem) {
  return elem *10
});
console.log(b);
const c = a.filter(function(elem){
  return elem === 3
 });
console.log(c);

const d = a.reduce(function(prevValue, elem){
  return prevValue * elem;
});
console.log(d);
