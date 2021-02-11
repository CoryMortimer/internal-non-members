const createNonMembers = () => {
  return [...Array(100)].map((_element, i) => ({
    id: i,
    address: `${i} lane`,
    name: `Company ${i}`,
    amount: 4000 + i * 100
  }))
}

export const nonMembers = createNonMembers()
