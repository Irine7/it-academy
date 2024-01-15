import express from 'express';
import { basicAuthMiddleware } from '../middlewares/basicAuthMiddleware';
import { cacheMiddleware } from '../middlewares/cacheMiddleware';
import { corsMiddleware } from '../middlewares/corsMiddleware';
import { jsonMiddleware } from '../middlewares/jsonMiddleware';
import { routerTodoApp } from '../../user-interface/http/appControllers';

export const app = express();

app.use(basicAuthMiddleware);
app.use(cacheMiddleware);
app.use(corsMiddleware);
app.use(jsonMiddleware);


app.use('/api/todo', routerTodoApp);
