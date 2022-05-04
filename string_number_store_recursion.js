function collectStrings(obj) {
    let arr = {
        arrayOfString: [],
        arrayOfNumbers: []
    };
    for (let child in obj) {
        if (Array.isArray(obj[child])) {
            let returnValue = collectStrings(obj[child])
            arr.arrayOfString.push(...returnValue.arrayOfString);
            arr.arrayOfNumbers.push(...returnValue.arrayOfNumbers);
        } else if (typeof obj[child] === 'object') {
            let returnValue = collectStrings(obj[child])
            arr.arrayOfString.push(...returnValue.arrayOfString);
            arr.arrayOfNumbers.push(...returnValue.arrayOfNumbers);
        } else {
            if (typeof obj[child] === 'string') {
                arr.arrayOfString.push(obj[child])
            } else if (typeof obj[child] === 'number') {
                arr.arrayOfNumbers.push(obj[child])

            }
        }
    }
    return arr;
}

const obj = {
    stuff: "foo",
    one: 1,
    data: {
        val: {
            two: 2,
            thing: {
                info: [{
                    message: "hello"
                }],
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz",
                        three: 3
                    }
                }
            }
        }
    }
}

console.log(collectStrings(obj)) 
/*
{
  arrayOfNumbers: (3) [1, 2, 3]
  arrayOfString: (3) ['foo', 'hello', 'baz']
}
*/
