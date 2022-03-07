//Polyfill for Array.at() method
function atFunction(arr, position) {
    return position < 0 ? arr[arr.length+position] : arr[position];
}

const input= [5, 12, 8, 130, 44];
console.log(atFunction(input,2))  //8
console.log(atFunction(input,-4))  //12

************************************************************************
//Polyfill for Array.groupBy() method
function groupBy(arr, keyParam){
    let obj={};
    for(let i=0;i<arr.length;i++){
        const value = arr[i][keyParam];
        obj[value]= value in obj ?  [...obj[value],arr[i]] : [arr[i]];
    }
    return obj;
};

const inventory = [
  { name: 'asparagus', type: 'vegetables', quantity: 5 },
  { name: 'bananas',  type: 'fruit', quantity: 0 },
  { name: 'goat', type: 'meat', quantity: 23 },
  { name: 'cherries', type: 'fruit', quantity: 5 },
  { name: 'fish', type: 'meat', quantity: 22 }
];

console.log(groupBy(inventory, 'type'));
/* { 
  vegetables: [
    { name: 'asparagus', type: 'vegetables', quantity: 5 }, 
  ],
  fruit: [
    { name: "bananas", type: "fruit", quantity: 0 },
    { name: "cherries", type: "fruit", quantity: 5 }
  ], 
  meat: [
    { name: "goat", type: "meat", quantity: 23 },
    { name: "fish", type: "meat", quantity: 22 }
  ] 
}
*/
