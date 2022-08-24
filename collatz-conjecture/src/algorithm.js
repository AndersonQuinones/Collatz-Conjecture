const collatzConjecture = (num) => {
  const nums = new Set();
  let current = num;

  while (current !== 1 || current < 0) {
    if (current % 2 === 0) {
      const newNum = current / 2;
      nums.add(newNum)
      current = newNum;
    }
    else {
      const newNum = (current * 3) + 1;
      nums.add(newNum)
      current = newNum
    }
  }

  console.log(nums)
}
collatzConjecture(9)
