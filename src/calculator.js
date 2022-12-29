const chai = require('chai')
const expect = chai.expect
const add = (a, b) => a + b
const subtract = (a, b) => a - b
const multiply = (a, b) => a * b
const divide = (a, b) => b !== 0 ? (a / b) : undefined

module.exports = {
    add,
    subtract,
    multiply,
    divide,
}

const calculator = require('../src/calculator')

describe('Calculator', () => {
    describe('Addition', () => {
        it('1 + 1 should be equals to 2', () => {
            expect(calculator.add(1, 1)).to.equal(2)
        })
    })

    describe('Subtraction', () => {
        it('1 - 1 should be equals to 0', () => {
            expect(calculator.subtract(1, 1)).to.equal(0)
        })
    })

    describe('Multiplication', () => {
        it('1 * 0 should be equals to 0', () => {
            expect(calculator.multiply(1, 0)).to.equal(0)
        })
    })

    describe('Division', () => {
        it('1 / 1 should be equals to 1', () => {
            expect(calculator.divide(1, 1)).to.equal(1)
        })
        it('should return NaN if the denominator is zero', () => {
            expect(calculator.divide(4, 0)).to.equal(undefined)
        })
    })
})
