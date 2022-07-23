const input = {
  a: "david",
  func: function () {
    console.log("hello")
  },
  b: {
    c: {
      d: {
        e: {
          g: {}
        }
      },
      z: 6, k: ["kumar"]
    }
  },
  c: {},
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

console.log(JSON.stringify(input))   //Original Stringify method
console.log(stringify(input))        //Custom Stringify method

//Original Stringify method Output
{"a":"david","b":{"c":{"d":{"e":{"g":{}}},"z":6,"k":["kumar"]}},"c":{},"d":6,"j":[[true,"javascript",1,2,3,9.8]],"l":[{"d":{"c":{"f":65}}}]}

//Custom Stringify method Output
{"a":"david","b":{"c":{"d":{"e":{"g":{}}},"z":6,"k":["kumar"]}},"c":{},"d":6,"j":[[true,"javascript",1,2,3,9.8]],"l":[{"d":{"c":{"f":65}}}]}



//main code
function stringify(input) {
  function validate(value) {
    let str = '';
    if (Array.isArray(value)) {
      for (let arr of value) {
        if (Array.isArray(arr)) {
          str += `[${validate(arr)}],`
        }
        else if (typeof arr === 'object') {
          str += `{${validate(arr)}},`;
        }
        else if (typeof arr !== 'function') {
          str += `${typeof arr === 'string' ? `"${arr}",` : `${arr},`}`
        }
      }
      str = str[str.length - 1] === ',' ? str.slice(0, str.length - 1) : str;
      return str;
    }
    else if (typeof value === 'object') {
      for (let obj in value) {
        if (Array.isArray(value[obj])) {
          str += `"${obj}":[${validate(value[obj])}],`
        }
        else if (typeof value[obj] === 'object') {
          str += `"${obj}":{${validate(value[obj])}},`;
        }
        else if (typeof value[obj] !== 'function') {
          str += `"${obj}":${typeof value[obj] === 'string' ? `"${value[obj]}",` : `${value[obj]},`}`;
        }
      }
      str = str[str.length - 1] === ',' ? str.slice(0, str.length - 1) : str;
      return str;
    }
  }
  return Array.isArray(input) ? `[${validate(input)}]` : `{${validate(input)}}`;
}
