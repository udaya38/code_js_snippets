***************Promises & its method chaining polyfill************
function newPromise(callback) {
    let resCalled = false;
    let rejCalled = false;
    let resolveHandler = [];
    let rejectHandler;
    async function response(value) {
        resCalled = true;
        if (!rejCalled) {
            let previousVal = value;
            for (let func of resolveHandler) {
                let output = await func(previousVal);
                previousVal = output;
            }
        }
    }

    function reject(error) {
        rejCalled = true;
        if (!resCalled) {
            rejectHandler(error);
        }
    }
    this.then = function(thenHandler) {
        resolveHandler.push(thenHandler);
        return this;
    };
    this.catch = function(catchHandler) {
        rejectHandler = catchHandler;
    };
    callback(response, reject);
}

************Calling Phase*******************
new newPromise((res, rej) => {
        setTimeout(() => {
            res(5);
        }, 3000);
    })
    .then((result) => {
        console.log(result);  //5  -> After 3 secs
        return new newPromise((resolve, reject) => {
            setTimeout(() => resolve(result * 2), 3000);
        });
    })
    .then((result2) => console.log(result2))  //10 -> After 6 secs
    .catch((err) => console.log(err));
