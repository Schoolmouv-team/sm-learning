import { CustomInt } from './custom-int'

describe('custom int test', () => {
  describe('from string test', () => {
    it('should return number if 0', () => {
      // Act
      const n = CustomInt.fromString('0')

      // Assert
      expect(n.getValue()).toEqual(0)
    })

    it('should throw error if not a number', () => {
      // Act
      try {
        const n = CustomInt.fromString('toto')
      } catch (e) {
        // Assert
        expect(e).toEqual(new Error('Not a number'))
      }
    })
  })

  describe('add test', () => {
    // Arrange
    const useCases = [
      { n1: 0, n2: 0, expected: 0 },
      { n1: 10, n2: 100, expected: 110 },
      { n1: 1000, n2: 10000, expected: 11000 }
    ]

    useCases.forEach((useCase, index) => {
      it(`should match use case ${index}`, () => {
        // Act
        const n1 = new CustomInt(useCase.n1)
        const n2 = new CustomInt(useCase.n2)
        const res = n1.add(n2)

        // Assert
        expect(res.getValue()).toEqual(useCase.expected)
      })
    })
  })

  describe('multiply test', () => {
    // Arrange
    const useCases = [
      { n1: 0, n2: 0, expected: 0 },
      { n1: 10, n2: 100, expected: 1000 },
      { n1: 1000, n2: 1, expected: 1000 }
    ]

    useCases.forEach((useCase, index) => {
      it(`should match use case ${index}`, () => {
        // Act
        const n1 = new CustomInt(useCase.n1)
        const n2 = new CustomInt(useCase.n2)
        const res = n1.multiply(n2)

        // Assert
        expect(res.getValue()).toEqual(useCase.expected)
      })
    })
  })
})
