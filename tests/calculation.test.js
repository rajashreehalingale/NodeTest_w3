const describe = require('mocha').describe
const it = require('mocha').it
const expect = require('chai').expect
const sumAll = require('../calculation')

describe('Calculation', () => {
  describe('sumAll', () => {
    it('returns the sum of the numbers in the array', () => {
      const nums = [4, 3, 2]

      const total = sumAll(nums)

      expect(total).to.equal(9)
    })
  })
})
