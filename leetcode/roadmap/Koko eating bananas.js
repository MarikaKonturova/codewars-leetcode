var minEatingSpeed = function (piles, h) {
  let minSpeed = 1,
    maxSpeed = Math.max(...piles),
    k = maxSpeed;
  const time = (speed) =>
    piles.reduce((sum, pile) => sum + Math.ceil(pile / speed), 0);

  while (minSpeed <= maxSpeed) {
    const mid = Math.floor((maxSpeed + minSpeed) / 2);

    if (time(mid) <= h) {
      k = mid;
      maxSpeed = mid - 1;
    } else {
      minSpeed = mid + 1;
    }
  }
  return k;
};

console.log(minEatingSpeed((piles = [3, 6, 7, 11]), (h = 8)));
