// function anotherFunChallange(input) {
//   let a = 5; // O(1)
//   let b = 10; // O(1)
//   let c = 50; // O(1)
//   for (let i = 0; i < input; i++) {
//     // O(n)
//     let x = i + 1; // O(n)
//     let y = i + 2; // O(n)
//     let z = i + 3; // O(n)
//   }
//   for (let j = 0; j < input; j++) {
//     // O(n)
//     let p = j * 2; // O(n)
//     let q = j * 2; // O(n)
//   }
//   let whoAmI = "I don't know"; // O(1)
// }

// // Big O(4 + 5n) => O(n)

// Given 2 arrays, create a function that let's a user know (true/false) whether these two arrays contain any common items
// For Example:
// const array1 = ['a', 'b', 'c', 'x'];//const array2 = ['z', 'y', 'i'];
// should return false.
// -----------
// const array1 = ['a', 'b', 'c', 'x'];//const array2 = ['z', 'y', 'x'];
// should return true.

// 2 parameters - arrays - no size limit
// return true or false

// function containsCommonItem(arr1, arr2) {
//   for (let i = 0; i < arr1.length; i++) {
//     for (let j = 0; j < arr2.length; j++) {
//       if (arr1[i] === arr2[j]) {
//         return true;
//       }
//     }
//   }
//   return false;
// }

// //O(a*b)
// //O(1) - Space Complexity

// const array1 = ["a", "b", "c", "x"];
// const array2 = ["z", "y", "a"];

// function containsCommonItem2(arr1, arr2) {
//   // loop through first array and create object where properties === items in the array
//   // can we assume always 2 params?

//   let map = {};
//   for (let i = 0; i < arr1.length; i++) {
//     if (!map[arr1[i]]) {
//       const item = arr1[i];
//       map[item] = true;
//     }
//   }
//   // loop through second array and check if item in second array exists on created object.
//   for (let j = 0; j < arr2.length; j++) {
//     if (map[arr2[j]]) {
//       return true;
//     }
//   }
//   return false;
// }

// //O(a + b) Time Complexity
// //O(a) Space Complexity

// // containsCommonItem2(array1, array2)

// function containsCommonItem3(arr1, arr2) {
//   return arr1.some((item) => arr2.includes(item));
// }

// console.log(containsCommonItem(array1, array2));
// console.log(containsCommonItem2(array1, array2));
// console.log(containsCommonItem3(array1, array2));

// Naive
// function hasPairWithSum(arr, sum) {
//   var len = arr.length; //6
//   for (var i = 0; i <= len - 1; i++) {
//     for (var j = i + 1; j <= len - 1; j++) {
//       if (arr[i] + arr[j] === sum) return true;
//     }
//   }

//   return false;
// }

// // Better
// function hasPairWithSum2(arr, sum) {
//   const mySet = new Set();
//   const len = arr.length;
//   for (let i = 0; i < len; i++) {
//     if (mySet.has(arr[i])) {
//       return true;
//     }
//     mySet.add(sum - arr[i]);
//   }
//   return false;
// }

// console.log(hasPairWithSum([6, 3, 32, 0, 1, 7], 9));

// linkedlist = { value: 1, next: { value: 2, next: { value: 3, next: null } } };

// function reverseLinkedList(head) {
//   let prev = null;
//   let curr = head;
//   let next = null;

//   while (curr !== null) {
//     next = curr.next; // 2
//     curr.next = prev; // null
//     prev = curr; // 1
//     curr = next; // 2
//   }
//   return prev;
// }

// console.log(reverseLinkedList(linkedlist));

// class MyArray {
//   constructor() {
//     this.length = 0;
//     this.data = {};
//   }
//   get(index) {
//     return this.data[index];
//   }
//   push(item) {
//     this.data[this.length] = item;
//     this.length++;
//     return this.data;
//   }
//   pop() {
//     const lastItem = this.data[this.length - 1];
//     delete this.data[this.length - 1];
//     this.length--;
//     return lastItem;
//   }
//   deleteAtIndex(index) {
//     const item = this.data[index];
//     this.shiftItems(index);
//     return item;
//   }
//   shiftItems(index) {
//     for (let i = index; i < this.length - 1; i++) {
//       this.data[i] = this.data[i + 1];
//     }
//     console.log(this.data[this.length - 1]);
//     delete this.data[this.length - 1];
//     this.length--;
//   }
// }

// const myArray = new MyArray();
// myArray.push("hi");
// myArray.push("you");
// myArray.push("!");
// myArray.pop();
// myArray.deleteAtIndex(0);
// myArray.push("are");
// myArray.push("nice");
// myArray.shiftItems(0);
// console.log(myArray);

// Create a function that reverses a string;
// "Hello" --> "olleH"

// function reverse(str) {
//   return String([...str].reverse()).replace(/,/g, "");
// }
// console.log(reverse("hi"));
// console.log(reverse("Homosapiens"));

// Create a function that concatenates two ordered arrays and reorders them

// function mergeSortedArrays(arrOne, arrTwo) {
//   return arrOne.concat(arrTwo).sort((a, b) => {
//     return a - b;
//   });
// }

// console.log(mergeSortedArrays([1, 2, 3, 1], [3, 4, 5, 6, 1]));

// Solution 2
// function mergeSortedArrays(array1, array2) {
//   const mergedArray = [];
//   let array1Item = array1[0];
//   let array2Item = array2[0];
//   let i = 1;
//   let j = 1;

//   //We should actually move these 2 if statements to line 2 so that we do the checks before we do assignments in line 3 and 4!
//   if (array1.length === 0) {
//     return array2;
//   }
//   if (array2.length === 0) {
//     return array1;
//   }

//   while (array1Item || array2Item) {
//     if (array2Item === undefined || array1Item < array2Item) {
//       mergedArray.push(array1Item);
//       array1Item = array1[i];
//       i++;
//     } else {
//       mergedArray.push(array2Item);
//       array2Item = array2[j];
//       j++;
//     }
//   }
//   return mergedArray;
// }

// console.log(mergeSortedArrays([0, 3, 4, 88], [3, 4, 6, 22]));

// class HashTable {
//   constructor(size) {
//     this.data = new Array(size);
//     // this.data = [];
//   }

//   _hash(key) {
//     let hash = 0;
//     for (let i = 0; i < key.length; i++) {
//       hash = (hash + key.charCodeAt(i) * i) % this.data.length;
//     }
//     return hash;
//   }

//   set(key, value) {
//     let address = this._hash(key);
//     if (!this.data[address]) {
//       this.data[address] = [];
//     }
//     this.data[address].push([key, value]);
//     return this.data;
//   }

//   get(key) {
//     const address = this._hash(key);
//     const currentBucket = this.data[address];
//     if (currentBucket) {
//       for (let i = 0; i < currentBucket.length; i++) {
//         if (currentBucket[i][0] === key) {
//           return currentBucket[i][1];
//         }
//       }
//     }
//     return undefined;
//   }
// }

// const myHashTable = new HashTable(50);

// console.log(myHashTable.set("ilker", 10000));
// console.log(myHashTable.get("ilker"));
// console.log(myHashTable.set("apples", 9));
// console.log(myHashTable.get("apples"));

// class HashTable {
//   constructor(size) {
//     this.data = new Array(size);
//     // this.data = [];
//   }

//   _hash(key) {
//     let hash = 0;
//     for (let i = 0; i < key.length; i++) {
//       hash = (hash + key.charCodeAt(i) * i) % this.data.length;
//     }
//     return hash;
//   }

//   set(key, value) {
//     let address = this._hash(key);
//     if (!this.data[address]) {
//       this.data[address] = [];
//     }
//     this.data[address].push([key, value]);
//     return this.data;
//   }

//   get(key) {
//     const address = this._hash(key);
//     const currentBucket = this.data[address];
//     if (currentBucket) {
//       for (let i = 0; i < currentBucket.length; i++) {
//         if (currentBucket[i][0] === key) {
//           return currentBucket[i][1];
//         }
//       }
//     }
//     return undefined;
//   }

//   keys() {
//     const keysArray = [];
//     for (let i = 0; i < this.data.length; i++) {
//       if (this.data[i]) {
//         keysArray.push(this.data[i][0][0]);
//       }
//     }
//     return keysArray;
//   }
// }

// const myHashTable = new HashTable(50);
// myHashTable.set("grapes", 10000);
// myHashTable.set("grapes", 10000);
// myHashTable.get("grapes");
// myHashTable.set("apples", 9);
// myHashTable.get("apples");
// myHashTable.keys();

// Given an array = [2,1,1,2,3,5,1,2,4]:
// It should return 1

// Given an array = [2,3,4,5]:
// It should return undefined

// function firstRecurringCharacter(input) {
//   for (let i = 0; i < input.length; i++) {
//     for (let j = i + 1; j < input.length; j++) {
//       if (input[i] === input[j]) {
//         return input[i];
//       }
//     }
//   }
//   return undefined;
// }

// function firstRecurringCharacter2(input) {
//   let map = {};
//   for (let i = 0; i < input.length; i++) {
//     if (map[input[i]] !== undefined) {
//       return input[i];
//     } else {
//       map[input[i]] = i;
//     }
//   }
//   return undefined;
// }

// console.log(firstRecurringCharacter2([1, 5, 5, 1, 3, 4, 6]));
// console.log(firstRecurringCharacter([1, 0, 3, 8, 4, 4, 3]));
// //Bonus... What if we had this:
// // [2,5,5,2,3,5,1,2,4]
// // return 5 because the pairs are before 2,2
// function firstRecurringCharacter(input) {
//   for (let i = 0; i < input.length; i++) {
//     for (let j = i + 1; j < input.length; j++) {
//       if (input[j] === input[j + 1]) {
//         return input[j];
//       } else if (input[i] === input[j]) {
//         return input[i];
//       }
//     }
//   }
//   return undefined;
// }

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// class LinkedList {
//   constructor(value) {
//     this.head = {
//       value: value,
//       next: null,
//     };
//     this.tail = this.head;
//     this.length = 1;
//   }
//   append(value) {
//     //Code here
//     const newNode = new Node(value);
//     this.tail.next = newNode;
//     this.tail = newNode;
//     this.length++;
//   }
//   prepend(value) {
//     const newNode = new Node(value);
//     newNode.next = this.head;
//     this.head = newNode;
//     this.length++;
//   }
//   printList() {
//     const array = [];
//     let correntNode = this.head;
//     while (correntNode !== null) {
//       array.push(correntNode.value);
//       correntNode = correntNode.next;
//     }
//     return array;
//   }
//   insert(index, value) {
//     let correntNode = this.head;
//     for (let i = 1; i < index; i++) {
//       correntNode = correntNode.next;
//       if (i == index - 1) {
//       }
//     }
//   }
// }

// let myLinkedList = new LinkedList(10);
// myLinkedList.append(5);
// myLinkedList.append(16);
// myLinkedList.prepend(1);
// myLinkedList.insert(2, 99);
// console.log(myLinkedList.printList());

// add a method remove() to the linked list that deletes a node to the specified index.

// class LinkedList {
//   constructor(value) {
//     this.head = {
//       value: value,
//       next: null,
//     };
//     this.tail = this.head;
//     this.length = 1;
//   }
//   append(value) {
//     const newNode = {
//       value: value,
//       next: null,
//     };
//     this.tail.next = newNode;
//     this.tail = newNode;
//     this.length++;
//     return this;
//   }
//   prepend(value) {
//     const newNode = {
//       value: value,
//       next: null,
//     };
//     newNode.next = this.head;
//     this.head = newNode;
//     this.length++;
//     return this;
//   }
//   printList() {
//     const array = [];
//     let currentNode = this.head;
//     while (currentNode !== null) {
//       array.push(currentNode.value);
//       currentNode = currentNode.next;
//     }
//     return array;
//   }
//   insert(index, value) {
//     //Check for proper parameters;
//     if (index >= this.length) {
//       console.log("yes");
//       return this.append(value);
//     }

//     const newNode = {
//       value: value,
//       next: null,
//     };
//     const leader = this.traverseToIndex(index - 1);
//     const holdingPointer = leader.next;
//     leader.next = newNode;
//     newNode.next = holdingPointer;
//     this.length++;
//     return this.printList();
//   }
//   traverseToIndex(index) {
//     //Check parameters
//     let counter = 0;
//     let currentNode = this.head;
//     while (counter !== index) {
//       currentNode = currentNode.next;
//       counter++;
//     }
//     return currentNode;
//   }
//   remove(index) {
//     const leader = this.traverseToIndex(index - 1);
//     const removedNode = leader.next;
//     leader.next = removedNode.next;
//     this.length--;
//   }
// }

// let myLinkedList = new LinkedList(10);
// myLinkedList.append(5);
// myLinkedList.append(16);
// myLinkedList.prepend(1);
// myLinkedList.insert(2, 99);
// myLinkedList.insert(20, 88);
// console.log(myLinkedList.printList());
// myLinkedList.remove(2);
// console.log(myLinkedList.printList());
