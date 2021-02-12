import { rest } from 'msw'
import { nonMembers } from './data'

const PAGE_SIZE = 5

export const handlers = [
  rest.get('/api/non_members', (req, res, ctx) => {
    const page = parseInt(req.url.searchParams.get('page') || '1', 10)

    return res(
      ctx.json({
        page,
        pageSize: PAGE_SIZE,
        data: nonMembers.slice((page - 1) * PAGE_SIZE, (page - 1) * PAGE_SIZE + PAGE_SIZE),
        total: nonMembers.length
      }),
    )
  }),
  rest.post('/api/non_members/:id/sent_check', (req, res, ctx) => {
    const { id } = req.params

    const indexOfNonMember = nonMembers.findIndex((nonMember) => nonMember.id === parseInt(id, 10))

    nonMembers.splice(indexOfNonMember, 1)

    return res(
      ctx.status(200),
    )
  })
]
