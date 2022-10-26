function alternatingCharacters(s) {
  let newString = [...s];
  let result = 0;

  newString.forEach((huruf, index) => {
    if (huruf === s[index + 1]) {
      result += 1;
    }
  });
  console.log(result);
}
alternatingCharacters("AAAA"); //3
alternatingCharacters("ABABABAB"); //0
alternatingCharacters("AAABBB"); //4
