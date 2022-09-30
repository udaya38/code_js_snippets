function customPromise(executor) {
  let onResolve;
  let onReject;
  let onFinally;
  let isFulfilled = false;
  let isRejected = false;
  let isResolveCalled = false;
  let isRejectCalled = false;
  let value = '';
  let that = this;

  function resolve(data) {
    isFulfilled = true;
    value = data;
    that.promiseState = "fulfilled";
    if (typeof onResolve === 'function') {
      onResolve(value);
      if (typeof onFinally === 'function') onFinally();
      isResolveCalled = true;
    }
  }

  function reject(data) {
    isRejected = true;
    value = data;
    that.promiseState = "rejected";
    if (typeof onReject === 'function') {
      onReject(value);
      if (typeof onFinally === 'function') onFinally();
      isRejectCalled = true;
    }
  }
  
  this.then = function(callback) {
    onResolve = callback;
    if (isFulfilled && !isResolveCalled) {
      that.promiseState = "fulfilled"
      onResolve(value);
      isResolveCalled = true;
    } else if(!isRejectCalled){
      that.promiseState = "pending"
    }
    return this;
  }
  
  this.catch = function(callback) {
    onReject = callback;
    if (isRejected && !isRejectCalled) {
      that.promiseState = "rejected"
      onReject(value);
      isRejectCalled = true;
    } else if(!isResolveCalled){
      that.promiseState = "pending"
    }
    return this;
  }
  
  this.finally = function(callback) {
    onFinally = callback;
    if (isFulfilled || isRejected) {
      onFinally()
    }
    return this;
  }
  
  executor(resolve, reject);
}
 

const promise = new customPromise(function(resolve, reject) {
    resolve("hi")
}).then(function(result) {
  console.log(result)
}).catch(err => {
  console.log(err) 
}).finally(()=>{
  console.log("finally")
});


console.log("Immediate object", promise)
setTimeout(() => {
  console.log("promise object after 2 seconds", promise)
}, 2000)
