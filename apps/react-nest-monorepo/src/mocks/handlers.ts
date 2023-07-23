// src/mocks/handlers.js
import { rest } from 'msw';
import { todos } from './fixtures';

export const handlers = [
  rest.get('/todos', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(todos));
  }),
];
