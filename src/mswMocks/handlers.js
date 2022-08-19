// eslint-disable-next-line import/no-extraneous-dependencies
import { rest } from 'msw';
import mockBees from './beesData';
import mockBookings from './bookingsData';

export default [
  // signing up a new user
  rest.post('https://bee-store.herokuapp.com/api/v1/signin', (req, res, ctx) =>
    res(
      ctx.status(200),
      ctx.json({
        user_id: 4,
        username: 'AaronIsCool',
      }),
    ),
  ),
  // delete bee
  rest.delete(
    'https://bee-store.herokuapp.com/api/v1/items/:id',
    (req, res, ctx) =>
      res(
        ctx.status(200),
        ctx.json({
          message: 'Item deleted successfully',
        }),
      ),
  ),
  // create bee
  rest.post(
    'https://bee-store.herokuapp.com/api/v1/items/:id',
    (req, res, ctx) =>
      res(
        ctx.status(200),
        ctx.json({
          id: 34,
          name: 'TeeBee',
          image:
            'https://previews.123rf.com/images/chudtsankov/chudtsankov1107/chudtsankov110700050/10049766-cute-cartoon-bee.jpg',
          description: 'A bee that likes to wear tees',
          created_at: '2022-08-19T20:22:17.746Z',
          updated_at: '2022-08-19T20:22:17.746Z',
        }),
      ),
  ),
  // list bees
  rest.get('https://bee-store.herokuapp.com/api/v1/items', (req, res, ctx) =>
    res(ctx.status(200), ctx.json(mockBees)),
  ),
  // bee details
  rest.get(
    'https://bee-store.herokuapp.com/api/v1/items/:id',
    (req, res, ctx) => res(ctx.status(200), ctx.json(mockBees[0])),
  ),
  // create a booking
  rest.post(
    'https://bee-store.herokuapp.com/api/v1/bookings',
    (req, res, ctx) =>
      res(
        ctx.status(200),
        ctx.json({
          id: 41,
          date: '2023-08-19',
          city: 'New York',
          created_at: '2022-08-19T20:36:37.427Z',
          updated_at: '2022-08-19T20:36:37.427Z',
          user_id: 2,
          item_id: 4,
        }),
      ),
  ),
  // get booking
  rest.get(
    'https://bee-store.herokuapp.com/api/v1/bookings/:id',
    (req, res, ctx) => res(ctx.status(200), ctx.json(mockBookings[0])),
  ),
  // delete booking
  rest.delete(
    'https://bee-store.herokuapp.com/api/v1/bookings/:id',
    (req, res, ctx) => res(ctx.status(204), ctx.json({})),
  ),
];
