function addNestedObject(nestObj){
let count=0;
	for(let obj in nestObj){
  	if(typeof nestObj[obj] === 'object'){
        let c=addNestedObject(nestObj[obj]);
        count+=c;
    }
    else if(typeof nestObj[obj] === 'number'){
    	count+=nestObj[obj];
    }
  }
  return count;
}

const input = {
  B: 1,
  C: {
    D: 2,
    E: {
       L: 5
    },
    F: {
     G:4, H:10
    }
   }   
};

console.log(addNestedObject(input))  //22   -->1+2+5+4+10