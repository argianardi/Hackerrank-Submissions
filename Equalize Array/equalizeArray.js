function equalizeArray(arr) {
  const cache = {};

  //check the number of occurrences of each element
  for (let i of arr) {
    if (cache[i]) {
      cache[i]++;
    } else {
      cache[i] = 1;
    }
  }

  //cache {1:1, 2:1, 3:3}
  //get most occurrences
  let occur = Object.values(cache); //[1, 1, 3]
  let max = Math.max(...occur); //3

  //   get the number of elements to delete
  return arr.length - max; //2
}

console.log(equalizeArray([3, 3, 2, 1, 3])); //2
