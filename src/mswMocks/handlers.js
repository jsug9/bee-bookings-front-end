// eslint-disable-next-line import/no-extraneous-dependencies
import { rest } from 'msw';

export default [
  rest.post('https://bee-store.herokuapp.com/api/v1/signin', (req, res, ctx) => res(
    ctx.status(200),
    ctx.json({
      user_id: 4,
      username: 'AaronIsCool',
    }),
  )),
  rest.delete(
    'https://bee-store.herokuapp.com/api/v1/items/:id',
    (req, res, ctx) => res(
      ctx.status(200),
      ctx.json({
        message: 'Item deleted successfully',
      }),
    ),
  ),
];
