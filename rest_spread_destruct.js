function shift(arr) {
	const [first, ...rest] = arr;
	return rest;
}

function unshift(arr, ...rest) {
	return [...rest, ...arr];
}

function pop(arr) {
	const {
		[arr.length - 1]: last, ...rest
	} = arr;
	return Object.values(rest);
}

function push(arr, ...rest) {
	return [...arr, ...rest];
}

const input = [1, 2, 3, 4, 5];

console.log(shift(input)) //[2, 3, 4, 5]
console.log(unshift(input, 6, 7, 8)) //[6, 7, 8, 1, 2, 3, 4, 5]
console.log(pop(input)) //[1, 2, 3, 4]
console.log(push(input, 6, 7, 8)) //[1, 2, 3, 4, 5, 6, 7, 8]