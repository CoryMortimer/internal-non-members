import { sendCheck } from './sentChecks'

describe('sendCheck', () => {
  it('should return a successful response', async () => {
    const nonMembersData = await sendCheck()
    expect(nonMembersData).toEqual('')
  })
})
