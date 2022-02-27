const db={
	documents:[],
  	collection:{
  	find: function(param){
    	return param ? db.collection.findOne(param, false) : db.documents;
    },
    insertOne: function(param){
     db.documents.push(param);
    },
    insertMany: function(param){
     db.documents.push(...param);
    },
    findOne: function(param,indicator=true){
      let listArr=[];
      for(let list of db.documents){
      let count=0;
      	for(let key in param){
        	if(key in list && (param[key] === list[key])){
            count++;
          }
        }
        if(count === Object.keys(param).length){
            if(indicator) return list;
            listArr.push(list);
        }
      }
      return indicator ? "No Records Found" : (listArr > 0 ? listArr: "No Records Found");
    }
  }
}

db.collection.insertOne({id:1,name:"A",age:20});
db.collection.insertMany([{id:1,name:"B"},{id:3,name:"C"}]);
db.collection.findOne({id:1,name:"C"});  //"No Records Found"
db.collection.find({id:1});   //[{id:1,name:"A",age:20},{id:1,name:"B"}]