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
  })
]
