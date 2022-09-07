export default function collatzConjecture(num) {
  const nums = [num]
  let current = num;

  while (current !== 1 || current < 0) {
    if (current % 2 === 0) {
      const newNum = current / 2;
      nums.push(newNum)
      current = newNum;
    }
    else {
      const newNum = (current * 3) + 1;
      nums.push(newNum)
      current = newNum
    }
  }
  return nums;
}

// function getRandomArbitrary(min, max) {
//   return Math.random() * (max - min) + min;
// }

// export default function collatzConjecture(num) {
//   return Array.from({ length: num }, (value, index) => getRandomArbitrary(-1000, 1000))
// }
