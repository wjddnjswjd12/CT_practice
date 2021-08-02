function solution(bridge_length, weight, truck_weights) {
  var answer = 0;
  let seconds = 0;
  let idx = 0;
  const length = truck_weights.length;
  const passed = [];
  const passing = Array.from({ length: bridge_length }, (v, i) => 0);
  let popped = 0;
  while (length !== passed.length) {
    if (idx === 0) {
      popped = passing.shift();
      passing.push(truck_weights.shift());
      seconds++;
      idx++;
      continue;
    }
    popped = passing.shift();
    const sum = passing.reduce((acc, curr) => (acc += curr), 0);
    if (sum + truck_weights[0] <= weight) {
      passing.push(truck_weights.shift());
    } else {
      passing.push(0);
    }
    if (popped > 0) passed.push(popped);
    seconds++;
  }

  return seconds;
}
