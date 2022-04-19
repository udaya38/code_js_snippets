let localStorageClone={
  expireTime: 0,
  getSeconds(){
  	return new Date().getHours() * 3600 + new Date().getMinutes() * 60 + new Date().getSeconds();
  },
  setExpiration(value){
  	this.expireTime=value;
  },
  setItem(key,val){
    val=`${val}|${this.getSeconds()}`;
    localStorage.setItem(key,val);
  },
  getItem(key){
   if(!localStorage.hasOwnProperty(key)){
      this.expireTime=0;
      return "Key doesn't exist and it got expired";
   }
   let [value, getTime]=localStorage.getItem(key)?.split('|');
   if(this.expireTime && Math.abs(this.getSeconds() - Number(getTime)) > this.expireTime){
   	  localStorage.removeItem(key);
      this.getItem(key);
   }
   return value;
  }
}

//Setting expiration time of 10 secs
localStorageClone.setExpiration(10);  
localStorageClone.setItem("name","kumar");

//Within 10 seconds
localStorageClone.getItem("name");  //"kumar"

//After 10 seconds
localStorageClone.getItem("name");  //"Key doesn't exist and it got expired"
