export const convertCentsToDollarString = (cents) => (new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2
})).format(cents / 100)
