const obj = {
  a: "david",
  b: {
        e: {
          g: {}
        },
      z: 6, k: ["kumar"]
  },
  d: 6,
  j: [[true, "javascript", 1, 2, 3, 9.8]],
  l: [{
    d: {
      c: {
        f: 65
      }
    }
  }]
}


deepFreeze(obj);
obj.a="John";
obj.b.k[0]="java";
obj.j[0][5]="100.0";
obj.l[0].d.c.f=45;
console.log(obj)  
/*
	None of the nested object got updated due to deep 	  freeze hence output remains same as previous.
*/


//Main code
function deepFreeze(object){
    if(Array.isArray(object)){
        Object.freeze(object);
        for(let arr of object){
            if(Array.isArray(arr) || typeof arr === 'object'){
                deepFreeze(arr);
            }
        }
    }
    else if(typeof object === 'object'){
        Object.freeze(object);
        for(let obj in object){
            if(Array.isArray(object[obj]) || typeof object[obj] === 'object'){
                deepFreeze(object[obj]);
            }
        }
    }
}
