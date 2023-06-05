var carFleet = function (target, position, speed) {
  const len = position.length;
  let map = new Map(),
    res = 0,
    lastTime = -1;

  for (let i = 0; i < len; i++) {
    map.set(position[i], speed[i]);
  }

  const sortedPos = [...map.keys()].sort((a, b) => b - a);

  for (let i = 0; i < len; i++) {
    let time = (target - sortedPos[i]) / map.get(sortedPos[i]);

    if (time > lastTime) {
      res++;
      lastTime = time;
    }
  }
  return res;
};

console.log(
  carFleet( 
    (target = 12),
    (position = [10, 8, 0, 5, 3]),
    (speed = [2, 4, 1, 1, 3])
  )
);
