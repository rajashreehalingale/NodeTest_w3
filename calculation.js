function sumAll(numArray) {
  let total = 0

  while (numArray.length) {
    total += numArray.pop()
  }

  return total
}

module.exports = sumAll
