var person = {
  name: "Ram",
  age: 27,
  vehicles: {
    car: "limousine",
    bike: "ktm-duke",
    airlines: {
      lufthansa: "Air123",
      British_Airways: "Brt707"
    }
  }
};

let count=0;

function nestedObjects(person){
      for(let obj of Object.keys(person)){
      if(typeof person[obj] === 'object'){
         count++;
         nestedObjects(person[obj]);
      }
   }
 return count;
}

console.log("Number of nested objects is "+nestedObjects(person));
//Number of nested objects is 2