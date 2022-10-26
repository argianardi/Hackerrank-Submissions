function saveThePrisoner(n, m, s) {
  return ((m % n) + (s - 1)) % n || n;
}

console.log(saveThePrisoner(5, 2, 1));
console.log(saveThePrisoner(5, 2, 2));
