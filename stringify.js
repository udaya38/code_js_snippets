function stringifyMock(obj) {
    if (Array.isArray(obj)) {
        str += '[';
        let j = 1;
        for (let arr of obj) {
            if (Array.isArray(arr)) {
                stringifyMock(arr)
            } else if (typeof arr === "object") {
				stringifyMock(arr)
            } else {
                if (j === obj.length) {
                    str += typeof arr === "string" ? `'${arr}'` : `${arr}`;
                } else {
                    str += typeof arr === 'string' ? `'${arr}',` : `${arr},`;
                }
            }
            j++;
        }
str += ']';
    } else if (typeof obj === "object") {
        str += '{';
        let i = 1;
        for (let data in obj) {
            if (Array.isArray(obj[data])) {
                str += `'${data}':`;
                stringifyMock(obj[data])
            } else if (typeof obj[data] === "object") {
                str += `'${data}':`;
                stringifyMock(obj[data])
            } else {
                if (i === Object.keys(obj).length) {
                    str += typeof arr === "string" ? `'${data}':${obj[data]}` : `'${data}':${obj[data]}`;
                } else {
                    str += typeof arr === 'string' ? `'${data}':${obj[data]},` : `'${data}':${obj[data]},`;
                }
            }
            i++;
        }
        str += '}';
    } else {
        console.log(typeof obj === 'string')
        str += obj;
    }
    return str;
}


let str = '';
let input = {
    a: 1,
    b: {
        arr: [1, 2, 3, "hello", {
            c: {
                d: 4
            }
        }]
    }
}
console.log(stringifyMock(input))  // "{'a':1,'b':{'arr':[1,2,3,'hello',{'c':{'d':4}}]}}"