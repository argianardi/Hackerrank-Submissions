function missingNumbers(arr, brr) {
  return (
    arr.forEach((v) => brr.splice(brr.indexOf(v), 1)),
    [...new Set(brr)].sort((a, b) => a - b)
  );
}
console.log(
  missingNumbers(
    [203, 204, 205, 206, 207, 208, 203, 204, 205, 206],
    [203, 204, 204, 205, 206, 207, 205, 208, 203, 206, 205, 206, 204]
  )
); //[204, 205, 206]
