function fairRations(B) {
  //[2, 3, 4, 5, 6]

  const initialLength = B.length;
  const initialSum = B.reduce((a, b) => a + b);
  let i = 0;
  while (i < initialLength) {
    if (B[i] % 2 !== 0 && i < initialLength - 1) {
      B[i] = B[i] + 1;
      B[i + 1] = B[i + 1] + 1;
    }
    i++;
  }
  for (let i = 0; i < initialLength; i++) {
    if (B[i] % 2) {
      return "NO";
    }
  }

  const updatedSum = B.reduce((a, b) => a + b);
  return updatedSum - initialSum;
}

console.log(fairRations([2, 3, 4, 5])); //4
