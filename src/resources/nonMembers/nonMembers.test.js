import { getNonMembers } from './nonMembers'
import { nonMembers } from '../../mocks/data'

describe('getNonMembers', () => {
  it('should return 5 non members on page 1', async () => {
    const expected =  {data: nonMembers.slice(0, 5), page: 1, pageSize: 5, total: 100}
    const nonMembersData = await getNonMembers()
    expect(nonMembersData).toEqual(expected)
  })

  it('should return 5 non members on page 2', async () => {
    const expected =  {data: nonMembers.slice(5, 10), page: 2, pageSize: 5, total: 100}
    const nonMembersData = await getNonMembers(2)
    expect(nonMembersData).toEqual(expected)
  })
})
