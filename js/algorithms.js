function reverseString(str){
  return str.split("").reverse().join("");
}

function palindrome(str){
  var reg = /[\W_]/g;

  var smallStr = str.toLowerCase().replace(reg, "");

  console.log(smallStr);

  var compareStr = reverseString(smallStr);
  if(compareStr === smallStr) return true;

  return false;

}

function filter(str){
  var reg = /[\W]/g;

  var res = str.toLowerCase().replace(reg, "");

  return res;
}

const buildCharacterObj = str => {
  const charObj = {}

  for(let char of str.replace(/[\W]/g).toLowerCase()) {
    charObj[char] = charObj[char] + 1 || 1;
  }

  return charObj;

}
const anagram = (str1, str2) => {
  const aCharObj = buildCharacterObj(str1);
  const bCharObj = buildCharacterObj(str2);

  if(Object.keys(aCharObj).length !== Object.keys(bCharObj).length){
    return false;
  }

  for(let char in aCharObj){
    if(aCharObj[char] !== bCharObj[char]){
      return false;
    }
  }

  return true;

}

const fib = num => {
  if (num < 2){
    return num;
  }

  return fib(num - 1) + fib(num - 2);
}

fib(3);

const findVowels = str => {
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : "no matches";
}

function factorial(num){
  var ret = 1;
  for(var i = 1; i <= num; i++){
    ret *= i;
  }
  return ret;
}

function recFact(num){
  if(num == 1){
    return 1;
  }
  return num * recFact(num - 1);
}

function longestWord(sentence){
  var strArr = sentence.split(" ");
  var longest = "";
  for(var word of strArr){
    if(word.length > longest.length){
      longest = word;
    }
  }
  return longest.length;
}

function longestWordShort(sentence){
  return sentence.split(" ").sort(function(a, b){return b.length - a.length})[0].length;
}

function PentagonalNumber(num) { 
  if(num == 1) return 1;
  
  return (PentagonalNumber(num - 1) + (num - 1) * 5);
         
}

function titleCase(str){
  var words = str.toLowerCase().split(" ");
  for (var i = 0; i < words.length; i++){
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
  }
  return words.join(" ");
}

function titleCaseShort(str){
  var titles = str.toLowerCase.split(" ").map(function(elem){
    return elem[0].toUpperCase().slice(1);
  })

  return titles.join(" ");
}

function MaximalSquare(strArr) {
  let fullArray = strArr.map(val => val.split(''));

  let initArray = initialEval(fullArray);

  if (initArray.length === 0) {
    return 0;
  }
  count = 1;

  while (initArray.length) {
    initArray = initArray.filter(val => {
      return testOne(fullArray, count + 1, val[0], val[1]);
    })
    count++;
    if (count > 10) break;
  }
  return Math.pow(count - 1, 2);
}

function initialEval (arr) {
  let initArray = [];
  arr.forEach((row, rowNum) => {
    row.forEach((val, colNum) => {
      if (val === '1') {
        initArray.push([rowNum, colNum]);
      }
    });
  });
  return initArray;
}

function testOne(arr, size, r, c) {
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      if (!arr[r + i] || !arr[r + i][c + j] || arr[r + i][c + j] !== '1') {
        return false;
      }
    }
  }
  return true;
}

class Node{

  constructor(data){
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BST{

  constructor(){
    this.root = null;
  }

  getRoot(){
    return this.root;
  }

  insert(data){

  }

  remove(data){

  }

  inOrderTraverse(root){
    if(root !== null){
      this.inOrderTraverse(root.left);
      console.log(root.data);
      this.inOrderTraverse(root.right);
    }
  }

  search(node, data){
    if(node === null){
      return null;
    }

    else if(data < node.data){
      return this.search(node.left, data);
    }

    else if(data > node.data){
      return this.search(node.right, data);
    }

    else return node;
  }

  insert(data){
    var newNode = new Node(data);

    if(this.root === null)
      this.root = newNode; 
    else
      this.insertNode(this.root, newNode);
  }

    insertNode(node, newNode){
    
      if(newNode.data < node.data){
    
        if(node.left === null)
          node.left = newNode;
        else
          this.insertNode(node.left, newNode);
        

      }
      else{
        if(node.right === null)
          node.right = newNode;
        else
          this.insertNode(node.right, newNode);
      }
    }

    extractLeafList(node){
      if(node === null) 
        return null;
    
      if(node.left === null && node.right === null){
        console.log(node.data);
      }

      node.left = this.extractLeafList(node.left);
      node.right = this.extractLeafList(node.right);

    }

    printDLL(node){
      var last = new Node(null);

      while(node !== null){
        console.log(node.data + " ");
        last = node;
        node = node.right;
      }
    }

}


