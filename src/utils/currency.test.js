import { convertCentsToDollarString } from './currency'

describe('convertCentsToDollarString', () => {
  it('should return $49.00 given 4900', () => {
    expect(convertCentsToDollarString(4900)).toEqual('$49.00')
  })

  it('should return $0.00 given a null input', () => {
    expect(convertCentsToDollarString(null)).toEqual('$0.00')
  })
})
