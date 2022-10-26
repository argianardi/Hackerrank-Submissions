function hurdleRace(k, height) {
  let potion = height.sort(function (h, k) {
    return h - k;
  });

  if (potion[potion.length - 1] > k) {
    return potion[potion.length - 1] - k;
  } else {
    return 0;
  }
}

console.log(hurdleRace(4, [1, 6, 3, 5, 2])); //2
